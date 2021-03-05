<template>
  <div class="site-master">
    <div class="site-content">
      <site-header />
      <main class="site-main container">
        <Nuxt />
      </main>
    </div>
    <site-footer class="site-footer" />
  </div>
</template>

<script>
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'

export default {
  components: {
    SiteHeader,
    SiteFooter,
  },
}
</script>

<style>
:root {
  --color-white: #fffffe;
  --color-black: #00214d;
  --color-dark: #001c44;
  --color-lime: #00ebc7;
  --color-yellow: #fde24f;
  --color-red: #ff5470;

  /* --color-base: #f8dad0; */
  --color-base: #fce5e5;
  --base-color: var(--color-dark);
  --base-background: var(--color-white);

  font-size: 20px;
  color: var(--base-color);
  background-color: var(--base-background);
}

html,
body {
  height: 100%;
}

body {
  display: flex;
  flex-direction: column;
  font-family: 'Jost', sans-serif;
  font-weight: 400;
  margin: 0;
}

a {
  color: var(--color-dark);
}

p {
  max-width: 34em;
}

blockquote {
  margin-left: 0;
}

.container {
  margin-left: auto;
  margin-right: auto;
  max-width: 1020px;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
}

.site-master {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.site-content {
  flex: 1 0 auto;
}

.site-main {
  margin-top: 6rem;
}

.site-footer {
  flex-shrink: 0;
  margin-top: 3rem;
}

.nuxt-content-highlight {
  margin-top: 2rem;
  margin-bottom: 2rem;
}
</style>
