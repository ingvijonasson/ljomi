---
title: Setup draft mode in NetlifyCMS
summary: How to control drafts in NetlifyCMS and hide them from your app
draft: true
published: true
---

You can publish pages and posts in NetlifyCMS but you can not really create drafts.  Your content goes into one directory in your git repository and is by default available. A way to manage this is to setup a boolean field for your content and then query your content based on the boolean value.

First create a `published` property and set it to `false` as default. This way your posts will start as a draft and then you will set them to published when ready.

```yml
collections:
  fields:
    - { label: 'Title', name: 'title', widget: 'string' }
    - { label: 'Published', name: 'published', widget: 'boolean', default: false }
```

Secondly update your query for posts so it will only return your posts where the `published` is `true`. Your query could look like this.

```js
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only(['title', 'published', 'slug', 'createdAt'])
      .where({ published: true })
      .fetch()

    return {
      articles,
    }
  },
```

Now your previously created posts do not have a published method value set to either true or to false because the value does not excist these posts will also not show up. So you will have to update these as needed.
