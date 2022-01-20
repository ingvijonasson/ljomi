<template>
  <section class="section section--love section--large">
    <div class="container">
      <h2 class="section__title">Nice words by nicer people</h2>
    </div>
    <div class="container container--large">
      <div class="recommendation__grid">
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
.recommendation__grid {
  display: grid;
  grid-gap: calc(0.5rem + 1.5vw);
  margin-top: calc(3.5rem + 1.5vw);
}

.recommendation {
  padding: 1.2rem;
  border-radius: 0.25rem;
  box-shadow: 0 0 8px hsla(0, 0%, 0%, 0.1);
  background-color: var(--color-white);
  max-width: 700px;
}

@media only screen and (min-width: 800px) {
  .recommendation__grid {
    grid-template-columns: 100px 1fr 100px;
  }

  .recommendation:nth-child(odd) {
    grid-column: 1 / 3;
  }

  .recommendation:nth-child(even) {
    grid-column: 2 / 4;
  }
}

.recommendation h3 {
  line-height: 1.1;
  margin-bottom: 0;
  margin-top: 0.5rem;
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
