<template>
  <div class="site-master">
    <div class="site-content">
      <site-header />
      <main class="site-main">
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
  --color-black: #151717;
  --color-pink: #fce5e5;
  --color-blue: #e4f4fc;
  --color-green: #e4f4fc;
  --color-base: #fcf4e4;
  --base-background: var(--color-white);

  color: var(--color-black);
  background-color: var(--base-background);
}

html {
  font-size: min(max(1rem, 4vw), 22px);
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
  line-height: 1.5;
  margin: 0;
}

h1 {
  line-height: 1.2;
}

a {
  color: var(--color-black);
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

.container--large {
  max-width: 1400px;
}

.container--small {
  max-width: 800px;
}

.section-large {
  padding-top: 6rem;
}

.site-master {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.site-content {
  flex: 1 0 auto;
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
