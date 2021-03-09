<template>
  <header>
    <div class="container container--large">
      <div class="site-header__layout">
        <nuxt-link to="/" aria-label="Navigate to frontpage">
          <ljomi-logo />
        </nuxt-link>
        <nuxt-link to="/articles">articles </nuxt-link>
      </div>

      <p class="site-header__intro">
        I’m Ingvi. I develop websites together with designers. I create quality
        frontend code that works for people.
      </p>
    </div>
  </header>
</template>

<script>
import LjomiLogo from '@/components/LjomiLogo.vue'

export default {
  components: {
    LjomiLogo,
  },
}
</script>

<style scoped>
header {
  padding: clamp(1rem, 1.5rem + 1.5vw, 3rem) 0;
  background-color: var(--color-base);
}

.site-header__layout {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.site-header__intro {
  --fluid-spacing: calc(1.5rem + 8vw);

  margin-left: auto;
  margin-right: auto;
  padding-top: var(--fluid-spacing);
  padding-bottom: var(--fluid-spacing);
  font-size: 1.8rem;
  font-weight: 600;
  max-width: 20em;
}

.logo {
  font-size: 1.25rem;
  font-weight: 600;
  text-decoration: none;
}

a {
  font-weight: 600;
  text-decoration: none;
}
</style>
