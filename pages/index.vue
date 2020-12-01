<template>
  <div>
    <p class="text-3xl mt-12">
      Developing websites together with designers and agencies.
    </p>

    <section class="mt-8">
      <h2 class="text-2xl">Recommendations</h2>
      <article v-for="item in recommendations" :key="item.person" class="mt-6">
        <h3 class="text-lg">
          <a :href="item.link">{{ item.person }}</a>
        </h3>
        <h4>{{ item.title }}</h4>
        <blockquote cite="https://www.linkedin.com/in/ingvijonasson/">
          <nuxt-content :document="item" />
        </blockquote>
      </article>
    </section>
  </div>
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
