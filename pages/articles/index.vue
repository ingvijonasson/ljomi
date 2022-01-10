<template>
  <section>
    <page-title>
      <h1>Articles</h1>
    </page-title>

    <div class="section section--large">
      <div class="container">
        <ul class="mt-12">
          <li v-for="article of articles" :key="article.slug">
            <NuxtLink
              class="block mt-4"
              :to="{ name: 'articles-slug', params: { slug: article.slug } }"
            >
              <h2>{{ article.title }}</h2>
              <small>{{ formatDate(article.createdAt) }}</small>
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
      .only(['title', 'published', 'summary', 'slug', 'createdAt', 'updatedAt'])
      .where({ published: true })
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
  head() {
    return {
      title: 'Articles',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Thoughts on web and life',
        },
      ],
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

h2 {
  margin-bottom: 0;
}

small {
  display: block;
  margin-top: 0.25rem;
  line-height: 1;
  color: #777;
}

p {
  margin-top: 0;
}

a {
  text-decoration: none;
}
</style>
