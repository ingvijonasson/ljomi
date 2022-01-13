<template>
  <header>
    <div class="container container--large">
      <div class="site-header__layout">
        <nuxt-link to="/" aria-label="Navigate to frontpage">
          <ljomi-logo />
        </nuxt-link>
      </div>
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
  padding-top: clamp(1rem, 1.5rem + 1.5vw, 3rem);
  padding-bottom: clamp(1rem, 1.5rem + 1.5vw, 3rem);
  background-color: var(--color-base);
}

.site-header__layout {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.25rem;
  font-weight: var(--font-bold);
  text-decoration: none;
}

nav a {
  text-decoration: none;
  font-weight: var(--font-bold);
}
</style>
