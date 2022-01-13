---
title: Setup drafts in NetlifyCMS
summary: How to control drafts in NetlifyCMS and hide them from your app
createdAt: 2021-04-10
published: true
---

In [Netlify CMS](https://www.netlifycms.org/) you can not really create drafts. All your pages and posts goes into one directory in your git repository and by default is available. One way to manage drafts is by setting up a [boolean field](https://www.netlifycms.org/docs/widgets/#boolean) for the content and then query the content based on that boolean value.

Create a `draft` property and set it's default to `true`. This way your posts will start off as a draft and then you can set them to published when ready.

```yml
collections:
  fields:
    - { label: 'Title', name: 'title', widget: 'string' }
    - { label: 'Draft', name: 'draft', widget: 'boolean', default: true }
```

Then update the query so it will only return posts which have `published` set to `true`. Your query could look like this.

```js
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only(['title', 'published', 'slug', 'createdAt'])
      .where({ draft: false })
      .fetch()

    return {
      articles,
    }
  },
```

Note: Your previously created posts do not have a `draft` set to either true or to false. Because the field does not exist. These posts will not show up because of that. You will have to update these as needed.
