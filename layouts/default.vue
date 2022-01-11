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
</style>
