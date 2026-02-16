# 🤖 Automation Setup Guide

Stop manually babysitting PRs! This guide sets up full automation for your workflow.

## 🎯 What Gets Automated

1. **CodeRabbit Review** → Auto-triggered on PR creation
2. **Template Integration** → Auto-runs when CodeRabbit approves
3. **Discord Notifications** → Get pinged at each step (via OpenClaw)
4. **Auto-Merge** → Merges PR when all checks pass
5. **Zero Manual Work** → You just review the final result!

---

## 🚀 Quick Setup (5 minutes)

### Step 1: Add Discord Webhook (Optional but Recommended)

1. Go to your Discord server
2. Create a channel called `#github-notifications`
3. Right-click channel → Integrations → Webhooks → New Webhook
4. Copy the webhook URL
5. Add to GitHub secrets:
   ```bash
   # Go to: https://github.com/smaranje/prompt-clicker/settings/secrets/actions
   # Add new secret:
   # Name: DISCORD_WEBHOOK_URL
   # Value: <your webhook URL>
   ```

### Step 2: Enable GitHub Actions

The workflows are already created in `.github/workflows/`:
- ✅ `auto-integrate-templates.yml` - Auto-integrates templates
- ✅ `openclaw-integration.yml` - Discord notifications + auto-merge

Just commit and push them:

```bash
git add .github/workflows/auto-integrate-templates.yml
git add .github/workflows/openclaw-integration.yml
git commit -m "feat: Add automation workflows"
git push
```

### Step 3: Configure Auto-Merge (Optional)

If you want PRs to auto-merge after all checks pass:

1. Go to repo settings → General
2. Scroll to "Pull Requests"
3. Enable "Allow auto-merge"
4. Enable "Automatically delete head branches"

---

## 📱 How It Works

### Current Manual Flow (Painful 😫)
```
1. Create PR
2. Wait for CodeRabbit
3. Read review
4. Fix issues
5. Wait again
6. Manually integrate templates
7. Test
8. Merge
9. Repeat...
```

### New Automated Flow (Chill 😎)
```
1. Create PR → Get Discord ping
2. CodeRabbit reviews → Get Discord ping
3. If approved → Auto-integration runs → Get Discord ping
4. All checks pass → Auto-merge → Get Discord ping
5. Done! 🎉
```

---

## 🎮 Discord Commands (via OpenClaw)

Once set up, you can control everything from Discord:

```
!integrate     - Manually trigger template integration
!merge         - Merge the PR (if checks pass)
!status        - Check PR status
!rollback      - Revert last merge
```

---

## 🔧 Advanced: Full OpenClaw Integration

For the ultimate lazy dev experience:

### 1. Install OpenClaw Discord Bot

```bash
# Clone OpenClaw
git clone https://github.com/yourusername/openclaw.git
cd openclaw

# Configure
cp .env.example .env
# Edit .env with your Discord bot token and GitHub token

# Run
npm install
npm start
```

### 2. Configure OpenClaw Commands

Add to `openclaw/commands/github.js`:

```javascript
module.exports = {
  name: 'pr',
  description: 'Manage PRs',
  async execute(message, args) {
    const action = args[0];
    
    switch(action) {
      case 'status':
        // Check PR status
        const prs = await github.getPRs();
        message.reply(`You have ${prs.length} open PRs`);
        break;
        
      case 'integrate':
        // Trigger integration workflow
        await github.triggerWorkflow('auto-integrate-templates.yml');
        message.reply('🤖 Integration started!');
        break;
        
      case 'merge':
        // Merge the PR
        await github.mergePR(args[1]);
        message.reply('✅ PR merged!');
        break;
    }
  }
};
```

### 3. Sit Back and Relax

Now you can:
- Get notifications on Discord
- Control PRs from Discord
- Never open GitHub again (unless you want to)

---

## 🎯 Example Workflow

**You (in Discord):**
```
You: !pr create feature/new-templates
Bot: ✅ PR created! CodeRabbit is reviewing...
```

**5 minutes later:**
```
Bot: ✅ CodeRabbit approved! Auto-integration running...
```

**2 minutes later:**
```
Bot: 🎉 Integration complete! All checks passed!
Bot: Type !pr merge to merge, or I'll auto-merge in 5 minutes
```

**You:**
```
You: !pr merge
Bot: ✅ Merged! Deployed to production. You're done! 🚀
```

---

## 🛠️ Troubleshooting

### Workflows not running?
- Check GitHub Actions are enabled in repo settings
- Verify workflow files are in `.github/workflows/`
- Check workflow permissions (Settings → Actions → General)

### Discord notifications not working?
- Verify webhook URL is correct
- Check it's added as `DISCORD_WEBHOOK_URL` secret
- Test webhook with: `curl -H "Content-Type: application/json" -d '{"content":"Test"}' YOUR_WEBHOOK_URL`

### Auto-merge not working?
- Enable "Allow auto-merge" in repo settings
- Ensure all required checks are passing
- Check branch protection rules

---

## 🎉 You're Done!

No more manual work. The bots handle everything. You just:
1. Write code
2. Push
3. Get Discord notifications
4. Approve (or let it auto-approve)
5. Profit! 💰

**Time saved per PR**: ~30-45 minutes  
**Sanity preserved**: Priceless 😌
