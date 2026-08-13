---
name: git-sync
description: >-
  Performs standard git synchronization workflow: git status, git pull, git commit (using Conventional Commits), and git push (pushing to main branch by default unless specified otherwise). Use when triggered via /git-sync or when asking to pull, commit, and push git repo changes.
---

# Git Sync Workflow (`/git-sync`)

This skill provides a standardized 4-step workflow to synchronize local and remote git repository states.

## Workflow Steps

1. **Check Status**:
   Run `git status` to view staged, unstaged, and untracked files.

2. **Pull Remote Changes**:
   Run `git pull` to get the latest updates from the remote repository.

3. **Stage & Commit Changes**:
   - Stage modified/new files (`git add .` or target specific files).
   - Write a commit message adhering to **Conventional Commits** (`feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `test:`, `chore:`).
   - Write the summary in imperative mood, concise and clear.

4. **Push Changes**:
   - By default (unless specified otherwise by the user), push to the `main` branch: `git push origin main`.
   - If working on a specific feature branch requested by the user, push to that branch instead.
