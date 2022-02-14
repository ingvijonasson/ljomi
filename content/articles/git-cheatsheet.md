---
title: Git cheatsheet
summary: "A work in progress git cheatsheet for basic commands and common actions "
published: true
createdAt: 2022-02-14T14:01:24.223Z
---
## Show working directory status
```
git status
```

## Show commit history
```
git log
```

## Branches

### Show local branches
```
git branch
```

### Create a new branch
```
git checkout -b [branchname]
``` 

## Create an alias for a prettier log file in your `.bashrc` or `.bash-profile`
```
alias gitlog="git log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --branches"
```

## Move commits to a seperate branch
This one only works I have not pushed the commits that I want to move to the remote. As an example I am on master branch and I have committed 2 commits that I   want to move to a separate branch. What I can do is create a new branch and move back to master branch.

```
git checkout -b feature/my-new-feature
git checkout master
```
Now I need to run a `git log` or `gitlog` to find the commit identifier and reset the master branch back 2 commits. The 2 commits are then already on the new branch created and have been removed from master branch.

```
gitlog
git reset --hard [commit identifier] 
```