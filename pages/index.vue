<template>
  <div>
    <page-title is-large>
      <p>
        I’m Ingvi. I develop websites together with designers. I create quality
        frontend code that works for people.
      </p>
    </page-title>

    <section-recommendations :recommendations="recommendations" />
  </div>
</template>

<script>
import SectionRecommendations from '@/components/SectionRecommendations.vue'
import PageTitle from '@/components/PageTitle.vue'

export default {
  components: {
    PageTitle,
    SectionRecommendations,
  },
  async asyncData({ $content, params }) {
    const recommendations = await $content(
      'recommendations',
      params.slug
    ).fetch()

    return {
      recommendations,
    }
  },
}
</script>
