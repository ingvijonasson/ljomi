<template>
  <div class="flex flex-col min-h-screen mx-auto bg-gray-100">
    <div class="flex-1">
      <site-header />
      <main class="container">
        <Nuxt />
      </main>
    </div>
    <site-footer class="flex-shrink-0 mt-12" />
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
html,
body {
  height: 100%;
}

body {
  display: flex;
  flex-direction: column;
  font-family: 'Jost', sans-serif;
  font-weight: 400;
}

p {
  max-width: 44em;
}

.container {
  margin-left: auto;
  margin-right: auto;
  max-width: 720px;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
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
