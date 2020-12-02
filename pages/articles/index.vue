<template>
  <div>
    <!-- TODO: add visually hidden to the headline -->
    <h1 class="text-xl">Articles</h1>
    <ul class="mt-12">
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink
          class="block mt-4"
          :to="{ name: 'articles-slug', params: { slug: article.slug } }"
        >
          <h2>{{ article.title }}</h2>
          <p>{{ article.summary }}</p>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only(['title', 'summary', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      articles,
    }
  },
}
</script>
