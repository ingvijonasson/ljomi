---
title: Using SSH with GIT
summary: 'How to use git and SSH with multiple accounts '
published: false
---

List your git global configurations to see what is already setup

```bash
git config --global -l
```

If you do not have this setup you need to provide a name and email

```bash
git config --global user.name 'Your Name'
```

```bash
git config --global user.name 'your@email.com'
```

Now in a work repo which is assositated with different email address you need to set a different email for that repo

```bash
git config user.email 'your@client-work-email.com'
```

If you give `git config -l` you can see your global settings first and the work email and username at the the bottom.