---
title: Setup draft mode in NetlifyCMS
summary: How to control drafts in NetlifyCMS and hide them from your app
draft: true
published: true
---

You can only publish pages and posts in NetlifyCMS and you can not really create drafts because your content goes into one directory in your git repository. A simple way to manage this is to setup a boolean field and query based on the boolean value.

First create a `published` boolean property and set it to `false` as default.

```yml
collections:
  fields:
    - { label: 'Title', name: 'title', widget: 'string' }
    - { label: 'Published', name: 'published', widget: 'boolean', default: false }
```

Secondly now update your query for posts so it will only return your posts where the draft is set to false.

```
code
```

Note if your posts do not have a draft value set to true or to false they will also not show up. So if you set this up and then first all your post will not match your query until you set the draft to false.
