---
title: My first Blog Post
description: Learning how to use @nuxt/content to create a blog
---

<div class="bg-blue-500 text-white p-4 mb-4">
  This is HTML inside markdown that has a class of note
</div>

Empower your NuxtJS application with `@nuxtjs/content` module: write in a `content/` directory and fetch your Markdown, JSON, YAML and CSV files through a MongoDB like API, acting as a **Git-based Headless CMS**.

## Writing content

Learn how to write your `content/`, supporting Markdown, YAML, CSV and JSON: https://content.nuxtjs.org/writing.

## Fetching content

Learn how to fetch your content with `$content`: https://content.nuxtjs.org/fetching.

<info-box>
  <template #text>
    This is a vue component inside markdown using slots
  </template>
</info-box>


## Displaying content

Learn how to display your Markdown content with the `<nuxt-content>` component directly in your template: https://content.nuxtjs.org/displaying.

```js[nuxt.config.js]
export default {
  nuxt: "is the best"
}
```

```html[my-first-blog-post.md]
<p>code styling is easy</p>
```
