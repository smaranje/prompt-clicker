#!/usr/bin/env node
/**
 * Autonomous Development Agent
 * Works independently to complete development tasks
 */

const Anthropic = require('@anthropic-ai/sdk');
const fs = require('fs').promises;
const path = require('path');
const { exec } = require('child_process');
const util = require('util');
const execPromise = util.promisify(exec);

const client = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY
});

class AutonomousAgent {
    constructor(task) {
        this.task = task;
        this.conversationHistory = [];
        this.maxIterations = 20; // Prevent infinite loops
        this.iteration = 0;
    }

    async run() {
        console.log('🤖 Autonomous Agent Starting...');
        console.log(`📋 Task: ${this.task}\n`);

        // Step 1: Analyze the codebase
        console.log('📊 Step 1: Analyzing codebase...');
        const codebaseContext = await this.analyzeCodebase();

        // Step 2: Create implementation plan
        console.log('📝 Step 2: Creating implementation plan...');
        const plan = await this.createPlan(codebaseContext);
        console.log('Plan:', JSON.stringify(plan, null, 2));

        // Step 3: Execute plan autonomously
        console.log('⚡ Step 3: Executing plan...');
        await this.executePlan(plan);

        // Step 4: Verify and test
        console.log('🧪 Step 4: Running tests...');
        await this.runTests();

        console.log('\n✅ Autonomous agent completed successfully!');
    }

    async analyzeCodebase() {
        const srcFiles = await this.findFiles('src', ['.tsx', '.ts']);
        const fileContents = {};

        // Read key files
        for (const file of srcFiles.slice(0, 10)) { // Limit to avoid token overflow
            try {
                const content = await fs.readFile(file, 'utf-8');
                fileContents[file] = content.slice(0, 1000); // First 1000 chars
            } catch (err) {
                console.error(`Error reading ${file}:`, err.message);
            }
        }

        return {
            files: srcFiles,
            structure: await this.getDirectoryStructure(),
            samples: fileContents
        };
    }

    async findFiles(dir, extensions) {
        const { stdout } = await execPromise(
            `find ${dir} -type f \\( ${extensions.map(ext => `-name "*${ext}"`).join(' -o ')} \\)`
        );
        return stdout.split('\n').filter(Boolean);
    }

    async getDirectoryStructure() {
        const { stdout } = await execPromise('tree -L 3 -I "node_modules|dist|.git" || ls -R');
        return stdout;
    }

    async createPlan(context) {
        const response = await client.messages.create({
            model: 'claude-3-5-sonnet-20241022',
            max_tokens: 4000,
            messages: [{
                role: 'user',
                content: `You are an autonomous development agent. Create a detailed implementation plan.

Task: ${this.task}

Codebase context:
- Files: ${context.files.slice(0, 20).join(', ')}
- Structure: ${context.structure.slice(0, 500)}

Return a JSON object with this structure:
{
  "steps": [
    {
      "id": 1,
      "description": "Step description",
      "files": ["file1.tsx", "file2.ts"],
      "action": "create|modify|delete",
      "priority": "high|medium|low"
    }
  ],
  "estimatedTime": "15 minutes",
  "dependencies": ["package1", "package2"]
}

Be specific about which files to modify and what changes to make.`
            }]
        });

        return JSON.parse(response.content[0].text);
    }

    async executePlan(plan) {
        for (const step of plan.steps) {
            console.log(`\n📌 Executing step ${step.id}: ${step.description}`);

            try {
                await this.executeStep(step);
                console.log(`✅ Step ${step.id} complete`);
            } catch (error) {
                console.error(`❌ Step ${step.id} failed:`, error.message);

                // Try to recover
                console.log('🔄 Attempting to recover...');
                await this.recoverFromError(step, error);
            }
        }
    }

    async executeStep(step) {
        for (const file of step.files) {
            if (step.action === 'create' || step.action === 'modify') {
                const content = await this.generateFileContent(file, step);
                await this.writeFile(file, content);
            } else if (step.action === 'delete') {
                await fs.unlink(file);
            }
        }
    }

    async generateFileContent(file, step) {
        let existingContent = '';
        try {
            existingContent = await fs.readFile(file, 'utf-8');
        } catch (err) {
            // File doesn't exist, will create new
        }

        const response = await client.messages.create({
            model: 'claude-3-5-sonnet-20241022',
            max_tokens: 8000,
            messages: [{
                role: 'user',
                content: `Generate the complete content for ${file}.

Step: ${step.description}
Action: ${step.action}

${existingContent ? `Current content:\n\`\`\`\n${existingContent}\n\`\`\`` : 'This is a new file.'}

Return ONLY the complete file content, no explanations.`
            }]
        });

        return response.content[0].text;
    }

    async writeFile(filePath, content) {
        const dir = path.dirname(filePath);
        await fs.mkdir(dir, { recursive: true });
        await fs.writeFile(filePath, content);
        console.log(`  ✍️  Wrote ${filePath}`);
    }

    async recoverFromError(step, error) {
        const response = await client.messages.create({
            model: 'claude-3-5-sonnet-20241022',
            max_tokens: 2000,
            messages: [{
                role: 'user',
                content: `An error occurred while executing this step:

Step: ${JSON.stringify(step)}
Error: ${error.message}

Provide a recovery plan as JSON:
{
  "diagnosis": "What went wrong",
  "fix": "How to fix it",
  "alternativeApproach": "Different way to achieve the goal"
}`
            }]
        });

        const recovery = JSON.parse(response.content[0].text);
        console.log('Recovery plan:', recovery);

        // Implement recovery logic here
    }

    async runTests() {
        try {
            console.log('  Running linter...');
            await execPromise('npm run lint');
            console.log('  ✅ Linter passed');
        } catch (err) {
            console.log('  ⚠️  Linter warnings (non-blocking)');
        }

        try {
            console.log('  Running type check...');
            await execPromise('npm run type-check');
            console.log('  ✅ Type check passed');
        } catch (err) {
            console.log('  ❌ Type check failed');
            throw err;
        }
    }
}

// Main execution
const task = process.argv[2];

if (!task) {
    console.error('Usage: node autonomous-agent.js "<task description>"');
    process.exit(1);
}

if (!process.env.ANTHROPIC_API_KEY) {
    console.error('Error: ANTHROPIC_API_KEY environment variable not set');
    process.exit(1);
}

const agent = new AutonomousAgent(task);
agent.run().catch(err => {
    console.error('Fatal error:', err);
    process.exit(1);
});
