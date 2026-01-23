# Git Branching Strategy

## Branch Structure

### `main` - Production Branch
- **Purpose:** Stable, production-ready code
- **Protection:** Should only receive tested code from `dev`
- **Deployment:** Auto-deploys to production (if configured)
- **Rules:** Never commit directly to `main`

### `dev` - Development Branch
- **Purpose:** Integration branch for testing new features
- **Protection:** Active development happens here
- **Testing:** All features tested before merging to `main`
- **Rules:** Feature branches merge here first

---

## Workflow

### 1. **Start New Feature**
```bash
# Make sure you're on dev branch
git checkout dev
git pull origin dev

# Create feature branch
git checkout -b feature/your-feature-name
```

### 2. **Work on Feature**
```bash
# Make changes, commit as needed
git add .
git commit -m "feat: add your feature description"
```

### 3. **Push Feature to Remote**
```bash
git push -u origin feature/your-feature-name
```

### 4. **Merge Feature to Dev (Testing)**
```bash
# Switch to dev
git checkout dev
git pull origin dev

# Merge your feature
git merge feature/your-feature-name

# Push to remote dev
git push origin dev

# Delete feature branch (optional)
git branch -d feature/your-feature-name
```

### 5. **Test on Dev Branch**
- Test all features thoroughly
- Run all tests: `npm test` (if configured)
- Manual QA testing
- Fix any bugs found

### 6. **Merge Dev to Main (Production)**
```bash
# Only when dev is stable and tested!
git checkout main
git pull origin main

# Merge dev into main
git merge dev

# Push to production
git push origin main

# Tag the release (optional)
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0
```

---

## Quick Commands Reference

### Switch Branches
```bash
git checkout main      # Switch to main
git checkout dev       # Switch to dev
```

### Check Current Branch
```bash
git branch            # List local branches
git status            # See current branch and status
```

### Update Branch
```bash
git pull origin dev   # Update dev from remote
git pull origin main  # Update main from remote
```

### View Branch Differences
```bash
git diff main dev     # See differences between main and dev
```

---

## Best Practices

### ✅ DO:
- Always work on feature branches
- Test thoroughly on `dev` before merging to `main`
- Write clear commit messages
- Pull latest changes before creating new feature branches
- Keep `main` stable and deployable at all times

### ❌ DON'T:
- Never commit directly to `main`
- Don't merge untested code from `dev` to `main`
- Don't push broken code to `dev`
- Don't leave feature branches unmerged for too long

---

## Commit Message Convention

```bash
feat: add new template for IAM justifications
fix: resolve bug in Magic Mode API call
docs: update README with branching strategy
style: format code with prettier
refactor: restructure template data structure
test: add unit tests for favorites feature
chore: update dependencies
```

---

## Current Branch Status

- ✅ `main` - Production ready
- ✅ `dev` - Development/testing (currently active)
- 📝 Feature branches created as needed

---

## Emergency Hotfix Workflow

If you need to fix a critical bug in production:

```bash
# Create hotfix from main
git checkout main
git checkout -b hotfix/critical-bug-name

# Fix the bug
git add .
git commit -m "hotfix: fix critical bug description"

# Merge to main
git checkout main
git merge hotfix/critical-bug-name
git push origin main

# Also merge to dev to keep in sync
git checkout dev
git merge hotfix/critical-bug-name
git push origin dev

# Delete hotfix branch
git branch -d hotfix/critical-bug-name
```

---

## Troubleshooting

### Undo Last Commit (Not Pushed)
```bash
git reset --soft HEAD~1
```

### Discard All Local Changes
```bash
git reset --hard HEAD
```

### View Commit History
```bash
git log --oneline --graph --all
```

### Force Pull (Overwrite Local)
```bash
git fetch origin
git reset --hard origin/dev  # or origin/main
```

---

**You're now on the `dev` branch!** Start building features here, and merge to `main` when ready for production.
