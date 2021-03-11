<template>
  <section>
    <page-title>
      <h1>Articles</h1>
    </page-title>

    <div class="section-large">
      <div class="container">
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
    </div>
  </section>
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

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
}
</style>
