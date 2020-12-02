<template>
  <article>
    <h1>{{ article.title }}</h1>
    <small class="font-bold">
      Article last updated: {{ formatDate(article.updatedAt) }}
    </small>
    <nav>
      <ul class="list-disc p-4">
        <li
          v-for="link of article.toc"
          :key="link.id"
          :class="{ 'py-1': link.depth === 2, 'ml-2 pb-2': link.depth === 3 }"
        >
          <NuxtLink :to="`#${link.id}`" class="underline">
            {{ link.text }}
          </NuxtLink>
        </li>
      </ul>
    </nav>

    <nuxt-content :document="article" />
  </article>
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
}
</script>

<style lang="postcss">
h1 {
  @apply text-xl font-bold;
}

h2 {
  @apply text-lg font-bold mt-8;
}

.icon.icon-link {
  background-image: url('~assets/icons/hashtag.svg');
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
}
</style>
