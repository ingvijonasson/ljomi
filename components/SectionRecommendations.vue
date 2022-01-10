<template>
  <section class="section section--love section--large">
    <div class="container">
      <!-- <h2>Recommendations</h2> -->
      <h2 class="section__title">Nice words by nicer people</h2>
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
.recommendation {
  margin-top: calc(1rem + 3vw);
}

.recommendation h3 {
  line-height: 1.1;
  margin-bottom: 0;
}

.recommendation h4 {
  margin: 0.5rem 0;
  line-height: 1.2;
}

.recommendation p,
.recommendation blockquote {
  margin-top: 0;
}
</style>
