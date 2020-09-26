<template>
  <div>
    <h1 class="text-3xl">all articles</h1>
    <ul class="mt-12">
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink
          class="block mt-4"
          :to="{ name: 'articles-slug', params: { slug: article.slug } }"
        >
          <h2>{{ article.title }}</h2>
          <p>{{ article.description }}</p>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only(['title', 'description', 'img', 'slug', 'author'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      articles,
    }
  },
}
</script>
