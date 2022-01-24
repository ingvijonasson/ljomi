---
title: Using SSH with GIT
summary: "How to use git and SSH with multiple accounts "
published: false
---
To be able to use SHH with multiple git accounts you set the default git account first. This might be a client account or your private git account. It does not really matter but I suggest you use your private account.

## Creating keys and authenticate


## Global settings with SSH Agent

First list your git global configurations to see what is already setup

```bash
git config --global -l
```

If you already have git installed you should see something similar to this output:

```bash
user.name=yourname
user.email=youremail
user.signingkey=yourkey
gpg.program=/usr/local/bin/gpg
commit.gpgsign=true
```
These settings are normally stored in a `.gitconfig` file located in the home directory of your machine. 

If you do not have this setup you need to provide a name and email for the default global settings

```bash
git config --global user.name 'Your Name'
```

```bash
git config --global user.name 'your@email.com'
```

Now try to list again the settings and see if they were successfully stored.


## Overwrite the global settings

In a work repo which is associated with different email address you need to set a different email for that repository and maybe a custom username as well. First locate to the repo using `cd` then setup the email and username for that repo.

```bash
cd ~/projects/client/
git config user.name 'yourname'
git config user.email 'your@client-work-email.com'
```

 `git config -l` you can see your global settings first and the work email and username at the the bottom.
