<template>
  <header>
    <div class="container container--large">
      <div class="site-header__layout">
        <nuxt-link to="/" aria-label="Navigate to frontpage">
          <ljomi-logo />
        </nuxt-link>
        <nuxt-link to="/articles">articles </nuxt-link>
      </div>
    </div>

    <div class="container container--small">
      <p class="site-header__intro">
        I’m Ingvi. I develop websites together with designers and agencies. I
        create quality frontend code that works for people.
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
  padding: 3.5rem 0;
  background-color: var(--color-base);
}

.site-header__layout {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.site-header__intro {
  padding: 10rem 0;
  font-size: 2.25rem;
  font-weight: 600;
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
