<template>
  <section>
    <page-title>
      <h1>{{ article.title }}</h1>
      <small> Article last updated: {{ formatDate(article.updatedAt) }}</small>
    </page-title>

    <div class="section-large">
      <div class="container">
        <article>
          <!-- <nav>
            <ul class="list-disc p-4">
              <li
                v-for="link of article.toc"
                :key="link.id"
                :class="{
                  'py-1': link.depth === 2,
                  'ml-2 pb-2': link.depth === 3,
                }"
              >
                <NuxtLink :to="`#${link.id}`" class="underline">
                  {{ link.text }}
                </NuxtLink>
              </li>
            </ul>
          </nav> -->

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
}
</script>

<style>
.icon.icon-link {
  background-image: url('~assets/icons/hashtag.svg');
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
}
</style>
