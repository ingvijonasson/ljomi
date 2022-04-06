---
title: Using SSH with GIT
summary: "How to use git and SSH with multiple accounts "
published: false
createdAt: 2022-04-06T11:46:36.275Z
---
To be able to use SSH with multiple GIT accounts you set up the default GIT account and each alternative GIT account separately. This might be a client account or your private git account. It does not really matter but I suggest you use your private account as your default GIT.
Creating keys and authenticate
Start by creating a key on your machine
ssh-keygen -t ed25519 -C "[comment]"

### Copy your key to your clipboard
pbcopy < ~/.ssh/YOUR_PUBLIC_KEY
and then create a key on Github or [Gitlab](https://docs.gitlab.com/ee/user/ssh.html) or where your repository is stored.


## Managing keys with ssh-agent
ssh-add <YOURKEY>

### List all your keys to see if your new key was successfully added
ssh-add -l

## Create a config file and add your keys
```
touch ~/.ssh/config
vim ~/.ssh/config
```

Your key might look like following:
```
Host gitlab.com-<USERNAME>
HostName gitlab.com 
User git IdentityFile ~/.ssh/<YOURKEY>
```

I like to use my git username here but you can do whatever feels right to you.

## Clone your project with your custom config
git clone git@gitlab.com-<USERNAME>:someaccount/somerepo.git

Pay attention to where you update the string with your username you set in previous step.

## Global settings with SSH Agent
First list your git global configurations to see what is already setup

```bash
git config --global -l
```

If you already have git installed you should see something similar to this output:
```
user.name=yourname
user.email=youremail
user.signingkey=yourkey
gpg.program=/usr/local/bin/gpg
commit.gpgsign=true
```

These settings are normally stored in a .gitconfig file located in the home directory of your machine.
If you do not have this setup you need to provide a name and email for the default global settings.

```
git config --global user.name 'Your Name'
git config --global user.name 'your@email.com'
```

Now try to list again the settings and see if they were successfully stored.
Overwrite the global settings
In a work repo which is associated with different email address you need to set a different email for that repository and maybe a custom username as well. First locate to the repo using cd then setup the email and username for that repo.

```
cd ~/projects/client/
git config user.name 'yourname'
git config user.email 'your@client-work-email.com'
git config -l 
```

You can see your global settings first and the work email and username at the the bottom.
