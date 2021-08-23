<template>
  <section class="section-recommendations section-large">
    <div class="container">
      <!-- <h2>Recommendations</h2> -->
      <h2>Nice words by nicer people</h2>
      <article
        v-for="item in recommendations"
        :key="item.person"
        class="recommendation"
      >
        <h3>{{ item.person }}</h3>
        <h4>{{ item.title }} - {{ item.organization }}</h4>
        <blockquote cite="https://www.linkedin.com/in/ingvijonasson/">
          <nuxt-content :document="item" />
        </blockquote>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    recommendations: {
      type: Array,
      default: () => {},
    },
  },
}
</script>

<style>
.section-recommendations {
  background-color: var(--color-pink);
}

.recommendation {
  margin-top: calc(1rem + 3vw);
}

.recommendation h3 {
  margin-bottom: 0.15rem;
}

.recommendation h4 {
  margin: 0 0 0.25rem;
}

.recommendation p,
.recommendation blockquote {
  margin-top: 0;
}
</style>
