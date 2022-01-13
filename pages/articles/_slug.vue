<template>
  <section>
    <page-title>
      <h1>{{ article.title }}</h1>
      <small>{{ formatDate(article.createdAt) }}</small>
    </page-title>
    <div class="section">
      <div class="container">
        <article>
          <nuxt-content :document="article" />
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    return { article }
  },

  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'short', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
  head() {
    return {
      title: `${this.article.title}  — ljomi`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.summary,
        },

        // Open Graph
        {
          property: 'og:title',
          hid: 'og:title',
          name: 'og:title',
          content: this.article.title,
        },
        {
          property: 'og:description',
          hid: 'og:description',
          name: 'og:description',
          content: this.article.summary,
        },
        // {
        //   property: 'og:url',
        //   hid: 'og:url',
        //   name: 'og:url',
        //   content: 'https://www.ljomi.ch',
        // },

        // Twitter Card
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.article.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.article.summary,
        },
      ],
    }
  },
}
</script>

<style>
h1 {
  margin-bottom: 0;
}

/* TODO:  Lets add this back asp and then remove the tabindex as well */
/* .icon.icon-link {
  background-image: url('~assets/icons/hashtag.svg');
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
} */
</style>
