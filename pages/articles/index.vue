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
              <small>
                Last updated on the {{ formatDate(article.updatedAt) }}</small
              >
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
      .only(['title', 'draft', 'summary', 'slug', 'updatedAt'])
      .where({ draft: false })
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      articles,
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'short', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

h2 {
  margin-bottom: 0;
}

p {
  margin-top: 0;
}

a {
  text-decoration: none;
}
</style>
