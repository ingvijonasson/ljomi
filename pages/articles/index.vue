<template>
  <section>
    <page-title>
      <h1>Articles</h1>
    </page-title>

    <div class="section section--large">
      <div class="container">
        <ul class="mt-12">
          <li v-for="article of articles" :key="article.slug">
            <small>{{ formatDate(article.createdAt) }}</small>
            <NuxtLink
              :to="{ name: 'articles-slug', params: { slug: article.slug } }"
            >
              <h2>{{ article.title }}</h2>
            </NuxtLink>
            <p>{{ article.summary }}</p>
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
      .only(['title', 'published', 'summary', 'slug', 'createdAt'])
      .where({ published: true })
      .sortBy('createdAt', 'desc')
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
  margin-top: 3.5rem;
}

li + li {
  margin-top: 3rem;
}

h2 {
  margin-bottom: 0;
  margin-top: 0.5rem;
}

small {
  display: block;
  line-height: 1;
}

p {
  margin-top: 0;
}

a {
  text-decoration: none;
}
</style>
