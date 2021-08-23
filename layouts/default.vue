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
  --color-white: hsl(60, 100%, 100%);
  --color-black: hsl(180, 6%, 17%);
  --saturation: 75%;
  --lightness: 95%;
  --color-pink: hsl(0, var(--saturation), var(--lightness));
  --color-blue: hsl(200, var(--saturation), var(--lightness));
  --color-green: hsl(160, var(--saturation), var(--lightness));
  --color-base: hsl(40, var(--saturation), var(--lightness));
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
  line-height: 1.75;
  margin: 0;
}

h1,
.text-h1 {
  font-size: 1.8rem;
  line-height: 1.4;
  font-weight: 600;
  max-width: none;
}

h2,
.text-h2 {
  line-height: 1.4;
}

h1,
h2,
h3,
h4 {
  margin-top: 2.5em;
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

small {
  font-size: 0.85rem;
  font-weight: bold;
}

.container {
  margin-left: auto;
  margin-right: auto;
  max-width: 800px;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
}

.container--large {
  max-width: 1400px;
}

.section {
  padding-top: calc(1rem + 1vw);
  padding-bottom: calc(1rem + 1vw);
}

.section-large {
  padding-top: calc(1rem + 1vw);
  padding-bottom: calc(2rem + 3vw);
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
}

.nuxt-content-highlight {
  margin-top: 2rem;
  margin-bottom: 2rem;
}
</style>
