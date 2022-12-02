---
slug: "/git-md"
date: "2022-12-01"
title: "Git-md"
---

# **GIT**

Most popular [**version control system**](https://www.atlassian.com/git/tutorials/what-is-version-control)

## **Git Benefits**

<details>
<summary> Feature Branch Workflow </summary>

    Feature branches provide an isolated environment for every change to your code base. When a developer wants to start working they create a new branch. This ensures that the main branch always contains production-quality code.

    They let you represent development work at the same granularity as the your agile backlog. For example, you might implement a policy where each Jira ticket is addressed in its own feature branch.

</details>

<details>
<summary> Pull Requests </summary>

    Bitbucket enhance core Git functionality with pull requests. A pull request is a way to ask another developer to merge one of your branches into their repository. This not only makes it easier for project leads to keep track of changes, but also lets developers initiate discussions around their work before integrating it with the rest of the codebase.

</details>

## **Git Basics**

For more detailed information, you may refer to the [git documentation](https://git-scm.com/docs)

1. `git init <directory>`
    - Initialize current directory as a new git repository
    - Creates a .git subdirectory containing git metadata

2. `git clone <repo>`
    - Create a clone, or copy of the target repository
    - repo is usually from a remote repo url (HTTP/SSH/GIT)

3. `git config`
    - For git configuration at global or local project level

        <details>
        <summary> Common Use Case </summary>

        - commonly used to set author name/email for commits
        - It is also used to configure the gpg singing key for each commit we are singing off

        </details>

4. `git checkout <branch>`
    - Switch between different versions of code
    - Checkout / switches to an existing branch
    - Add `-b` before `<branch>` to create and checkout a new branch
    - Do `git checkout <commit hash>` to check out the commit

5. `git status`
    - displays the state of the working directory and the staging area
    - is branch up to date, Staged changes, Not Staged changes, Untracked files

6. `git fetch`
    - downloads commits, files and new branches from the remote repo into local repo
    - it does not merge with the current working directory, require `git merge <branch>` or `git rebase <base>`

7. `git merge <branch>`
    - Integrating new commits from different branches
    - The merge will be a new commit with 2 parent commits (local and remote)
    - When conflicts happen during the merge, they need to be resolved. Conflict markers will be added to the files with markers
    - VSC has a way to resolve these conflicts easily, it can also be done via vim in the command line by directly editing the files and removing the markers

8. `git pull`
    - does a git fetch -> git merge
    - --rebase option can be added so it does git fetch -> `git rebase <base>` instead

9. `git add <directory/file>`
    - stages all changes in directory or the single file
    - if add `-a` instead of `<directory/file>` then it will add all files

10. `git commit`
    - commit the staged files
    - add `-m <message>` option to add the commit message without opening text editor
    - commit is local until it is pushed

11. `git push <remote>`
    - pushes commits to remote branch
    - could also specify `<branch>` after `<remote>` to push to specific branch, if no such branch exist it will be created

12. `git branch`
    - List all branches in current local repo
    - do `git branch <branch>` to create a new branch called `<branch>`
    - add `-a` option to list all branch in both local and remote
    - add `-d` option to delete brunch locally

13. `git log`
    - Shows a list of all commit made to repo
    - We can find out commit hashes which can be used to checkout to see the state of the project at the commit

14. `git diff`
    - Displays difference among files in current working dir
    - Can be applied to any data sources such as commits, branches, files and more
    - e.g. `git diff <branch> <branch>` , `git diff <commit> <commit>`

## Advanced Git
1. `git rebase <base>`
    - Re-committing all commits of current branch onto a different base commit
    - If `<base>` is origin/main, it will add in latest main's commit before adding our commits
    - Changing the base of your branch from one commit to another making it appear as if you'd created your branch from a different commit
    - Maintains a linear project history
    - Should not be used on a public branch

2. `git stash`
    - temporarily shelves all uncommitted changes of current working copy
    - theses can be reapplied with `git stash pop` and `git stash apply`
    - it will not stash changes for files that are not added or are untracked
    - can delete with `git stash drop` or drop all with `git stash clear`

        <details>
        <summary> Common Use Case </summary>

        - When working on a branch and urgently need to work on another branch but your current changes are not suitable for a commit
        - Applying the same stashed changes to multiple branches

        </details>

3. `GIT_TRACE=1 <git command>`
    - provides the stack trace of the git command you are running
    - it helps with debugging git related commands such as commit with gpg signing

4. Concept of **"Squashing"**
    - merge sequential commits into one commit
    - main use case is when we are merging a pull requests from a feature branch where there are too many insignificant commits
    - allows for a cleaner git history and makes it easier to track
    - achieved via `git rebase -i` or `git merge --squash <branch>`

5. `git cherry-pick <commit-hash>`
    - Choose a commit from one branch and commit to existing branch

## **Git Flow**
Git Flow is a Git branching model that involves the use of feature branches and multiple primary branches.

- **main** - stores official release history
- **develop** - integration branch for features
- **feature/*** - for new feature development, will be merged back into develop after feature is completed
- **bugfix/*** - for fixing bugs, usually branched from release branch but could be also from develop, will be merged back into release and develop after bugfix is completed
- **release/qa** - branched from dev when there are sufficient features to be released. meant for release oriented tasks - bug fixes, documentation, UAT uses this code base
- **hotfix/*** - quickly patch production releases based on main, forked from main, should be merged into main and develop

    ### Overall Flow
    - A **develop** branch is created from **main**
    - **Feature** branches are created from **develop**
    - When a **feature** is complete, it is merged into the **develop** branch
    - A **release** branch is created from **develop** when there are enough features
    - When the **release** branch is done, it is merged into **develop** and **main**
    - If an issue in **main** is detected, a **hotfix** branch is created from **main**
    - Once the **hotfix** is complete it is merged to both **develop** and **main**

## **Trunk-Based**
Trunk-Based development is a version control management practice where developers merge small, frequent updates to a core “trunk” or main branch. This allows continuous code integration (Eases the friction of code integration), ensures continuous code review and enables consecutive production code releases

Main branch is assumed to always be stable, ready to deploy.

This is highly recommended for **CI - CONTINUOUS INTEGRATION** as smaller constant branches are integrated into the main branch.

### J&J Specific Trunk-Based CI/CD Notes
- **feature** branches will have CI
- **main** branch will have CI/CD
- We have **develop** , **qa**, **main** branches only for CD

## **GIT FLOW vs TRUNK-BASED**

- Git Flow has stricter controls and more structure while Trunk-Based only requires a single PR for code to be live in production. This means that Git Flow tends to be slower compared to Trunk-Based due to more branches, more PRs and approval.

### **When to use which?**
- **Git Flow is better:**
    - for open-source projects
    - when working with junior development teams
    - when working on an established product
- **Trunk-Based is better:**
    - for creating Minimum Viable Products (MVP)
    - when there is a need for speedy and quick iteration
    - when working with senior developers

## **FAQ**

- Why do I have to `git push --set-upstream origin <branch>` even though I've just pushed a local branch I've created recently?

    - Branches that are created locally do not have an upstream. Upon pushing to remote, the upstream does not automatically update. Hence local branches require you to set the upstream. [More Details](https://stackoverflow.com/questions/37770467/why-do-i-have-to-git-push-set-upstream-origin-branch). After this, you simply have to `git push` for the other pushes.
    - Alternatively, you can do `git push origin <branch>` for every push.

- When should we use rebase over merge?

    - When we prefer a cleaner log history for the project as it eliminates the unnecessary merge commits required by git merge and provides you a clean linear history.
    - Rebase can also be used to switch the base of the current forked branch to another base.

- When to use fetch instead of pull?

    - When you want to see the latest code changes done from remote but you may not necessarily want to merge them yet and instead perform other changes.
    - It can also be used to check for new branches on remote, since it also fetches new branches.

- How to change commit message after pushing to remote?

    - git rebase -i HEAD~n to do interactive rebase for the last n commits affected. (i.e. if you want to change a commit message 3 commits back, do git rebase -i HEAD~3) git will pop up an editor to handle those commits, notice this command:  r, reword = use commit, but edit the commit message

    - Change pick to r for those commits that you want to update the message. Don't bother changing the commit message here, it will be ignored. You'll do that on the next step. Save and close the editor. Note that if you edit your rebase 'plan' yet it doesn't begin the process of letting you rename the files, run: git rebase --continue

    - Git will pop up another editor for every revision you put r before. Update the commit msg as you like, then save and close the editor.

    - After all commits msgs are updated. you might want to do git push -f to update the remote.