#!/usr/bin/env python3
"""
Coding & Development Templates Generator
Generates 15 coding templates for PromptCraft
"""

import json

coding_templates = [
    {
        "id": "refactor-code",
        "category": "code",
        "title": "Refactor Code",
        "icon": "Code",
        "description": "Improve code quality, readability, and maintainability without changing functionality",
        "fields": [
            {"name": "code", "label": "Code to Refactor", "type": "textarea", "placeholder": "Paste your code here"},
            {"name": "language", "label": "Programming Language", "type": "text"},
            {"name": "focus", "label": "Refactoring Focus", "type": "select", "options": ["Readability", "Performance", "SOLID Principles", "DRY", "All"]}
        ],
        "promptTemplate": """Refactor this {language} code with focus on: {focus}

Code:
```
{code}
```

Provide:
1. **Refactored Code**: Clean, improved version
2. **Changes Made**: Bullet list of specific improvements
3. **Why**: Explain the reasoning behind each change
4. **Before/After Metrics**: Complexity, lines of code, readability score

Follow best practices:
- Meaningful variable/function names
- Single Responsibility Principle
- Remove code duplication
- Add helpful comments
- Improve error handling"""
    },
    {
        "id": "debug-fix-code",
        "category": "code",
        "title": "Debug & Fix Code",
        "icon": "Bug",
        "description": "Identify and fix bugs with detailed explanations",
        "fields": [
            {"name": "code", "label": "Buggy Code", "type": "textarea"},
            {"name": "error_message", "label": "Error Message", "type": "textarea", "placeholder": "Paste error/stack trace"},
            {"name": "expected_behavior", "label": "Expected Behavior", "type": "text", "placeholder": "What should happen?"}
        ],
        "promptTemplate": """Debug and fix this code.

Code:
```
{code}
```

Error message:
```
{error_message}
```

Expected behavior: {expected_behavior}

Provide:
1. **Root Cause**: What's causing the bug?
2. **Fixed Code**: Complete corrected version
3. **Explanation**: Line-by-line breakdown of the fix
4. **Prevention**: How to avoid this bug in the future
5. **Test Cases**: 3 test cases to verify the fix

Highlight the specific lines that were changed."""
    },
    {
        "id": "generate-function",
        "category": "code",
        "title": "Generate Function",
        "icon": "Function",
        "description": "Create custom functions from natural language descriptions",
        "fields": [
            {"name": "description", "label": "Function Description", "type": "textarea", "placeholder": "Describe what the function should do"},
            {"name": "language", "label": "Language", "type": "select", "options": ["Python", "JavaScript", "TypeScript", "Java", "C++", "Go", "Rust"]},
            {"name": "inputs", "label": "Input Parameters", "type": "text", "placeholder": "e.g., array of numbers, string"},
            {"name": "output", "label": "Expected Output", "type": "text", "placeholder": "What should it return?"}
        ],
        "promptTemplate": """Generate a {language} function that: {description}

Inputs: {inputs}
Output: {output}

Requirements:
1. **Function Signature**: Properly typed (if applicable)
2. **Implementation**: Clean, efficient code
3. **Error Handling**: Handle edge cases
4. **Documentation**: Docstring/JSDoc explaining parameters and return value
5. **Example Usage**: 2-3 examples showing how to call it
6. **Time/Space Complexity**: Big O notation

Follow {language} best practices and naming conventions."""
    },
    {
        "id": "code-review",
        "category": "code",
        "title": "Code Review",
        "icon": "MagnifyingGlass",
        "description": "Get senior-level code review feedback on security, performance, and patterns",
        "fields": [
            {"name": "code", "label": "Code to Review", "type": "textarea"},
            {"name": "language", "label": "Language/Framework", "type": "text"},
            {"name": "review_focus", "label": "Review Focus", "type": "select", "options": ["Security", "Performance", "Best Practices", "All"]}
        ],
        "promptTemplate": """Perform a senior-level code review on this {language} code.

Focus: {review_focus}

Code:
```
{code}
```

Review checklist:
1. **Security Vulnerabilities**: SQL injection, XSS, authentication issues, etc.
2. **Performance Issues**: O(n²) operations, unnecessary loops, memory leaks
3. **Code Smells**: Long functions, god objects, tight coupling
4. **Best Practices**: SOLID principles, design patterns, naming conventions
5. **Edge Cases**: Null checks, boundary conditions, error handling

For each issue found:
- **Severity**: Critical/High/Medium/Low
- **Location**: Line number or function name
- **Problem**: What's wrong
- **Solution**: How to fix it
- **Example**: Show the corrected code

End with an overall score (1-10) and summary."""
    },
    {
        "id": "write-unit-tests",
        "category": "code",
        "title": "Write Unit Tests",
        "icon": "TestTube",
        "description": "Generate comprehensive unit tests with edge cases",
        "fields": [
            {"name": "code", "label": "Code to Test", "type": "textarea"},
            {"name": "language", "label": "Language", "type": "text"},
            {"name": "framework", "label": "Testing Framework", "type": "select", "options": ["Jest", "Pytest", "JUnit", "Mocha", "RSpec", "Go Test"]}
        ],
        "promptTemplate": """Write comprehensive unit tests for this {language} code using {framework}.

Code to test:
```
{code}
```

Generate tests covering:
1. **Happy Path**: Normal, expected inputs
2. **Edge Cases**: Empty inputs, null, undefined, zero, negative numbers
3. **Boundary Conditions**: Min/max values, array limits
4. **Error Cases**: Invalid inputs, exceptions
5. **Integration**: How it works with dependencies (use mocks/stubs)

For each test:
- Descriptive test name
- Arrange-Act-Assert pattern
- Clear assertions
- Mock external dependencies

Include:
- Test setup/teardown if needed
- At least 8-10 test cases
- Code coverage estimate"""
    },
    {
        "id": "api-design",
        "category": "code",
        "title": "API Design",
        "icon": "Globe",
        "description": "Design RESTful or GraphQL APIs with best practices",
        "fields": [
            {"name": "resource", "label": "Resource/Entity", "type": "text", "placeholder": "e.g., User, Product, Order"},
            {"name": "api_type", "label": "API Type", "type": "select", "options": ["REST", "GraphQL", "gRPC"]},
            {"name": "operations", "label": "Required Operations", "type": "textarea", "placeholder": "List CRUD operations needed"}
        ],
        "promptTemplate": """Design a {api_type} API for managing {resource}.

Required operations:
{operations}

Provide:

**1. ENDPOINTS** (for REST) or **SCHEMA** (for GraphQL):
- List all endpoints with HTTP methods
- URL structure following conventions
- Request/response examples

**2. DATA MODELS**:
- JSON schema for {resource}
- Field types and validations
- Relationships to other entities

**3. AUTHENTICATION**:
- Recommended auth method (JWT, OAuth, API keys)
- Protected vs public endpoints

**4. ERROR HANDLING**:
- Standard error response format
- HTTP status codes
- Error messages

**5. BEST PRACTICES**:
- Versioning strategy
- Pagination for lists
- Rate limiting
- HATEOAS links (if REST)

**6. EXAMPLE REQUESTS**:
- cURL examples for each endpoint
- Expected responses

Follow {api_type} conventions and industry standards."""
    },
    {
        "id": "sql-query-builder",
        "category": "code",
        "title": "SQL Query Builder",
        "icon": "Database",
        "description": "Generate optimized SQL queries from natural language",
        "fields": [
            {"name": "description", "label": "Query Description", "type": "textarea", "placeholder": "Describe what data you need"},
            {"name": "database", "label": "Database Type", "type": "select", "options": ["PostgreSQL", "MySQL", "SQL Server", "SQLite", "Oracle"]},
            {"name": "tables", "label": "Table Names", "type": "text", "placeholder": "Comma-separated table names"}
        ],
        "promptTemplate": """Generate a {database} SQL query for: {description}

Tables involved: {tables}

Provide:
1. **The Query**: Formatted, readable SQL
2. **Explanation**: What each part does
3. **Indexes Needed**: Suggest indexes for performance
4. **Execution Plan**: Expected query performance
5. **Alternative Approaches**: If there's a better way

Optimize for:
- Performance (avoid N+1, use JOINs wisely)
- Readability (proper formatting, aliases)
- Security (parameterized, no SQL injection risk)

Include:
- Proper JOINs (INNER, LEFT, etc.)
- WHERE clauses with correct logic
- GROUP BY and HAVING if needed
- ORDER BY and LIMIT
- Comments explaining complex parts"""
    },
    {
        "id": "regex-pattern-generator",
        "category": "code",
        "title": "Regex Pattern Generator",
        "icon": "Asterisk",
        "description": "Create and explain complex regular expressions",
        "fields": [
            {"name": "pattern_description", "label": "What to Match", "type": "textarea", "placeholder": "e.g., Email addresses, phone numbers, URLs"},
            {"name": "language", "label": "Language/Flavor", "type": "select", "options": ["JavaScript", "Python", "Java", "PCRE", "Golang"]},
            {"name": "examples", "label": "Example Matches", "type": "textarea", "placeholder": "Provide 2-3 examples that should match"}
        ],
        "promptTemplate": """Create a regular expression to match: {pattern_description}

Language/Flavor: {language}
Should match these examples:
{examples}

Provide:
1. **The Regex Pattern**: Complete expression
2. **Breakdown**: Explain each part:
   - `^` and `$` (anchors)
   - `[]` (character classes)
   - `()` (capture groups)
   - `*`, `+`, `?` (quantifiers)
   - `\\d`, `\\w`, `\\s` (shortcuts)
3. **Test Cases**:
   - 5 strings that SHOULD match
   - 5 strings that should NOT match
4. **Code Example**: How to use it in {language}
5. **Performance Notes**: Any optimization tips

Make it readable with comments (using `(?# comment)` if supported)."""
    },
    {
        "id": "code-documentation",
        "category": "code",
        "title": "Code Documentation",
        "icon": "FileDoc",
        "description": "Generate comprehensive documentation for code",
        "fields": [
            {"name": "code", "label": "Code to Document", "type": "textarea"},
            {"name": "language", "label": "Language", "type": "text"},
            {"name": "doc_style", "label": "Documentation Style", "type": "select", "options": ["JSDoc", "Docstring (Python)", "Javadoc", "GoDoc", "RDoc"]}
        ],
        "promptTemplate": """Generate {doc_style} documentation for this {language} code:

```
{code}
```

Include:
1. **Function/Class Description**: What it does, why it exists
2. **Parameters**: Each parameter with:
   - Type
   - Description
   - Default value (if any)
   - Constraints/validation
3. **Return Value**: Type and description
4. **Exceptions/Errors**: What can go wrong
5. **Examples**: 2-3 usage examples
6. **Notes**: Performance considerations, gotchas
7. **See Also**: Related functions/classes

Follow {doc_style} format exactly.
Make it beginner-friendly but technically accurate."""
    },
    {
        "id": "cli-tool-script",
        "category": "code",
        "title": "CLI Tool Script",
        "icon": "Terminal",
        "description": "Create command-line tools and scripts",
        "fields": [
            {"name": "tool_purpose", "label": "Tool Purpose", "type": "textarea", "placeholder": "What should this CLI tool do?"},
            {"name": "language", "label": "Language", "type": "select", "options": ["Python", "Bash", "Node.js", "Go"]},
            {"name": "arguments", "label": "Command Arguments", "type": "textarea", "placeholder": "List required and optional arguments"}
        ],
        "promptTemplate": """Create a {language} CLI tool that: {tool_purpose}

Arguments:
{arguments}

Generate:
1. **Complete Script**: Production-ready code
2. **Argument Parsing**: Handle flags and options properly
3. **Help Text**: `--help` output
4. **Error Handling**: Validate inputs, show helpful errors
5. **Usage Examples**: How to run it
6. **Installation**: How to make it executable

Include:
- Shebang line (if applicable)
- Proper exit codes (0 for success, 1+ for errors)
- Colored output (optional)
- Progress indicators for long operations
- Configuration file support (if complex)

Make it user-friendly with clear error messages."""
    },
    {
        "id": "docker-configuration",
        "category": "code",
        "title": "Docker Configuration",
        "icon": "Package",
        "description": "Generate Dockerfiles and docker-compose files",
        "fields": [
            {"name": "app_type", "label": "Application Type", "type": "text", "placeholder": "e.g., Node.js API, Python Flask, React app"},
            {"name": "dependencies", "label": "Dependencies", "type": "textarea", "placeholder": "List required services (DB, Redis, etc.)"},
            {"name": "environment", "label": "Environment", "type": "select", "options": ["Development", "Production", "Both"]}
        ],
        "promptTemplate": """Create Docker configuration for a {app_type} application.

Dependencies: {dependencies}
Environment: {environment}

Generate:

**1. Dockerfile**:
- Appropriate base image
- Multi-stage build (for production)
- Layer optimization
- Security best practices (non-root user)
- Health check

**2. docker-compose.yml**:
- Main application service
- All dependencies from {dependencies}
- Volume mounts
- Environment variables
- Network configuration
- Port mappings

**3. .dockerignore**:
- Files to exclude

**4. README section**:
- How to build: `docker build`
- How to run: `docker-compose up`
- Environment variables needed

**5. Best Practices Applied**:
- Minimal image size
- Build caching
- Security scanning

Include comments explaining each section."""
    },
    {
        "id": "cicd-pipeline",
        "category": "code",
        "title": "CI/CD Pipeline",
        "icon": "GitBranch",
        "description": "Create GitHub Actions, GitLab CI, or Jenkins pipelines",
        "fields": [
            {"name": "platform", "label": "CI/CD Platform", "type": "select", "options": ["GitHub Actions", "GitLab CI", "Jenkins", "CircleCI"]},
            {"name": "project_type", "label": "Project Type", "type": "text", "placeholder": "e.g., Node.js, Python, Java"},
            {"name": "deployment_target", "label": "Deployment Target", "type": "select", "options": ["AWS", "Google Cloud", "Azure", "Heroku", "Vercel", "Self-hosted"]}
        ],
        "promptTemplate": """Create a {platform} pipeline for a {project_type} project deploying to {deployment_target}.

Pipeline stages:
1. **Build**
2. **Test**
3. **Security Scan**
4. **Deploy**

Generate:

**1. Pipeline Configuration File**:
- Proper YAML/Groovy syntax for {platform}
- Trigger conditions (push, PR, tags)
- Environment variables
- Secrets management

**2. Build Stage**:
- Install dependencies
- Compile/bundle
- Cache dependencies

**3. Test Stage**:
- Unit tests
- Integration tests
- Code coverage
- Linting

**4. Security Stage**:
- Dependency vulnerability scan
- SAST (static analysis)
- Container scanning (if applicable)

**5. Deploy Stage**:
- Deploy to {deployment_target}
- Environment-specific configs (staging, production)
- Rollback strategy

**6. Notifications**:
- Slack/email on failure

Include comments and best practices for {platform}."""
    },
    {
        "id": "security-audit",
        "category": "code",
        "title": "Security Audit",
        "icon": "Shield",
        "description": "Identify security vulnerabilities in code",
        "fields": [
            {"name": "code", "label": "Code to Audit", "type": "textarea"},
            {"name": "language", "label": "Language/Framework", "type": "text"},
            {"name": "app_type", "label": "Application Type", "type": "select", "options": ["Web App", "API", "Mobile App", "CLI Tool", "Library"]}
        ],
        "promptTemplate": """Perform a security audit on this {language} {app_type} code.

Code:
```
{code}
```

Check for:

**1. INJECTION ATTACKS**:
- SQL Injection
- NoSQL Injection
- Command Injection
- XSS (Cross-Site Scripting)
- LDAP Injection

**2. AUTHENTICATION & AUTHORIZATION**:
- Weak password policies
- Missing authentication
- Broken access control
- Session management issues

**3. DATA EXPOSURE**:
- Sensitive data in logs
- Unencrypted data transmission
- Exposed API keys/secrets
- Information disclosure

**4. CRYPTOGRAPHY**:
- Weak hashing algorithms
- Hardcoded secrets
- Insecure random number generation

**5. CONFIGURATION**:
- Debug mode in production
- Default credentials
- Unnecessary services enabled

For each vulnerability:
- **OWASP Category**: (if applicable)
- **Severity**: Critical/High/Medium/Low
- **Exploit Scenario**: How an attacker could use it
- **Fix**: Secure code example
- **Prevention**: Best practices

Provide a security score (0-100) and prioritized fix list."""
    },
    {
        "id": "algorithm-design",
        "category": "code",
        "title": "Algorithm Design",
        "icon": "FlowArrow",
        "description": "Design efficient algorithms for complex problems",
        "fields": [
            {"name": "problem", "label": "Problem Description", "type": "textarea", "placeholder": "Describe the problem to solve"},
            {"name": "constraints", "label": "Constraints", "type": "textarea", "placeholder": "Input size, time limits, etc."},
            {"name": "language", "label": "Implementation Language", "type": "select", "options": ["Python", "JavaScript", "C++", "Java", "Go", "Pseudocode"]}
        ],
        "promptTemplate": """Design an efficient algorithm to solve: {problem}

Constraints: {constraints}

Provide:

**1. APPROACH**:
- High-level strategy
- Why this approach is optimal
- Alternative approaches considered

**2. ALGORITHM**:
- Step-by-step pseudocode
- Key data structures used

**3. IMPLEMENTATION** (in {language}):
- Clean, commented code
- Helper functions if needed

**4. COMPLEXITY ANALYSIS**:
- Time Complexity: O(?)
- Space Complexity: O(?)
- Proof/explanation of complexity

**5. EXAMPLES**:
- Input → Output walkthrough
- Edge cases handled

**6. OPTIMIZATIONS**:
- How to improve further
- Trade-offs made

**7. TEST CASES**:
- Normal cases
- Edge cases
- Large inputs

Make it interview-ready with clear explanations."""
    },
    {
        "id": "database-migration",
        "category": "code",
        "title": "Database Migration",
        "icon": "Database",
        "description": "Create database migration scripts with rollback support",
        "fields": [
            {"name": "migration_description", "label": "Migration Description", "type": "textarea", "placeholder": "What changes are you making?"},
            {"name": "database", "label": "Database", "type": "select", "options": ["PostgreSQL", "MySQL", "MongoDB", "SQL Server"]},
            {"name": "orm", "label": "ORM/Tool", "type": "select", "options": ["Raw SQL", "Prisma", "TypeORM", "Sequelize", "Alembic", "Flyway"]}
        ],
        "promptTemplate": """Create a database migration for: {migration_description}

Database: {database}
Tool: {orm}

Generate:

**1. UP MIGRATION** (apply changes):
- CREATE TABLE / ALTER TABLE statements
- Add indexes
- Add constraints
- Data transformations (if needed)

**2. DOWN MIGRATION** (rollback):
- Reverse all changes
- Restore previous state

**3. SAFETY CHECKS**:
- Check if table/column exists before creating
- Handle existing data
- Prevent data loss

**4. PERFORMANCE CONSIDERATIONS**:
- Index creation strategy (CONCURRENTLY if supported)
- Batch data updates
- Lock minimization

**5. TESTING PLAN**:
- How to test the migration
- Rollback testing
- Data validation queries

**6. DEPLOYMENT NOTES**:
- Downtime required? (yes/no)
- Order of operations
- Backup recommendation

Follow {orm} syntax and {database} best practices.
Include comments explaining each step."""
    }
]

def generate_typescript_templates(templates, category_name):
    ts_code = f"\n// ========== {category_name.upper()} TEMPLATES ==========\n"
    for template in templates:
        ts_code += "  {\n"
        ts_code += f"    id: '{template['id']}',\n"
        ts_code += f"    category: '{template['category']}',\n"
        ts_code += f"    title: '{template['title']}',\n"
        ts_code += f"    icon: '{template['icon']}',\n"
        ts_code += f"    description: `{template['description']}`,\n"
        ts_code += f"    fields: {json.dumps(template['fields'], indent=6)},\n"
        ts_code += f"    promptTemplate: `{template['promptTemplate']}`\n"
        ts_code += "  },\n"
    return ts_code

output = generate_typescript_templates(coding_templates, "Coding & Development")

print("=" * 80)
print("CODING & DEVELOPMENT TEMPLATES GENERATED (15 templates)")
print("=" * 80)
print(output[:500] + "...")

with open("generated_coding_templates.ts", "w") as f:
    f.write(output)

print("\n✅ Coding templates saved to: generated_coding_templates.ts")
print(f"✅ Generated {len(coding_templates)} coding templates")
