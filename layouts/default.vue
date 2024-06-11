<template>
  <div class="site-master" data-theme="dark">
    <div class="site-content">
      <site-header />
      <main class="site-main">
        <Nuxt />
      </main>
    </div>
    <site-footer class="site-footer" />
    <script>
      const links = document.querySelectorAll('a[data-analytics]')
      for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', handleLinkEvent)
        links[i].addEventListener('auxclick', handleLinkEvent)
      }

      function handleLinkEvent(event) {
        let link = event.target
        const middle = event.type === 'auxclick' && event.which === 2
        const click = event.type === 'click'
        while (
          link &&
          (typeof link.tagName === 'undefined' ||
            link.tagName.toLowerCase() !== 'a' ||
            !link.href)
        ) {
          link = link.parentNode
        }
        if (middle || click) {
          const attributes = link.getAttribute('data-analytics').split(/,(.+)/)
          const events = [
            JSON.parse(attributes[0]),
            JSON.parse(attributes[1] || '{}'),
          ]
          plausible(...events)
        }
        if (!link.target) {
          if (!(event.ctrlKey || event.metaKey || event.shiftKey) && click) {
            setTimeout(function () {
              location.href = link.href
            }, 150)
            event.preventDefault()
          }
        }
      }
    </script>
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
