# 🤖 Autonomous Development Agent

## Quick Start

### Method 1: GitHub Issues (Recommended)
1. Create a new issue with your task
2. Add the label `auto-dev`
3. Wait 10-20 minutes
4. Review the PR that gets created!

### Method 2: Comment on Existing Issue
Comment `/dev <your task>` on any issue

### Method 3: Run Locally
```bash
export ANTHROPIC_API_KEY=your_key_here
node .agent/scripts/autonomous-agent.js "Add dark mode toggle"
```

## Examples

**Simple tasks:**
- `/dev Add a loading spinner to the submit button`
- `/dev Fix the mobile menu not closing`
- `/dev Add placeholder text to all input fields`

**Complex tasks:**
- `/dev Implement user authentication with Supabase`
- `/dev Add 50 new templates for marketing category`
- `/dev Refactor the entire routing system to use React Router v6`

**Crazy tasks:**
- `/dev Rebuild the entire UI with Tailwind CSS`
- `/dev Add real-time collaboration features`
- `/dev Implement AI-powered template suggestions`

## How It Works

1. **Analyze**: Scans your codebase to understand structure
2. **Plan**: Creates a detailed implementation plan
3. **Execute**: Makes all necessary code changes
4. **Test**: Runs linter and type checks
5. **PR**: Creates a pull request for review

## Time Savings

| Task Complexity | Manual Time | Agent Time | Your Time |
|----------------|-------------|------------|-----------|
| Simple fix | 30 min | 5 min | 2 min (review) |
| New feature | 2 hours | 15 min | 10 min (review) |
| Major refactor | 1 day | 30 min | 30 min (review) |

## Tips

- Be specific in your task description
- The agent works best with well-defined tasks
- Review PRs carefully before merging
- You can queue multiple tasks by creating multiple issues

## Limitations

- Cannot access external APIs without credentials
- May need guidance on complex architectural decisions
- Works best with TypeScript/React codebases
- Requires ANTHROPIC_API_KEY to be set

## Troubleshooting

**Agent didn't create a PR:**
- Check GitHub Actions logs
- Ensure ANTHROPIC_API_KEY is set in secrets
- Task may have been too vague

**PR has errors:**
- Agent will attempt to fix linting errors
- Type errors may need manual review
- Comment on the PR with fixes needed

**Want to stop the agent:**
- Cancel the GitHub Action workflow
- Close the issue
