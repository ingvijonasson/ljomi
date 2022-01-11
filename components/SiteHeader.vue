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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  padding-top: clamp(1rem, 1.5rem + 1.5vw, 3rem);
  padding-bottom: clamp(1rem, 1.5rem + 1.5vw, 3rem);
  background-color: transparent;
}

.site-header__layout {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.25rem;
  font-weight: 600;
  text-decoration: none;
}

/* nav a {
  text-decoration: none;
  font-weight: 600;
} */
</style>
