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
  --color-base: #ffe9cf;
  --base-color: var(--color-dark);
  --base-background: var(--color-white);

  font-size: 16px;
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
  max-width: 44em;
}

blockquote {
  margin-left: 0;
}

.container {
  margin-left: auto;
  margin-right: auto;
  max-width: 1020px;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
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
  margin-top: 4rem;
}

.site-footer {
  flex-shrink: 0;
  margin-top: 3rem;
}

.nuxt-content-highlight {
  position: relative;
}

.nuxt-content-highlight .filename {
  position: absolute;
  right: 0;

  /* text-gray-600
  font-light
  z-10
  mr-2
  mt-1
  text-sm; */
}
</style>
