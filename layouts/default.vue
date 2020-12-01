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
