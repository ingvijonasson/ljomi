<template>
  <section class="mt-16">
    <h2 class="text-lg font-bold">Recommendations</h2>

    <article v-for="item in recommendations" :key="item.person" class="mt-8">
      <h3 class="text-lg">
        <a :href="item.link">{{ item.person }}</a>
      </h3>
      <h4>{{ item.title }} - {{ item.organization }}</h4>
      <blockquote
        class="mt-2"
        cite="https://www.linkedin.com/in/ingvijonasson/"
      >
        <nuxt-content :document="item" />
      </blockquote>
    </article>
  </section>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const recommendations = await $content(
      'recommendations',
      params.slug
    ).fetch()

    return {
      recommendations,
    }
  },
}
</script>
