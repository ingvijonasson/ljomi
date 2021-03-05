<template>
  <section>
    <h2 class="text-lg font-bold">Recommendations</h2>

    <article
      v-for="item in recommendations"
      :key="item.person"
      class="recommendation"
    >
      <h3 class="text-lg">{{ item.person }}</h3>
      <h4>{{ item.title }} - {{ item.organization }}</h4>
      <blockquote cite="https://www.linkedin.com/in/ingvijonasson/">
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

<style>
.recommendation {
  margin-top: 2rem;
}

.recommendation h3 {
  margin-bottom: 0.15rem;
}

.recommendation h4 {
  margin: 0 0 0.5rem;
}

.recommendation p,
.recommendation blockquote {
  margin-top: 0;
}
</style>
