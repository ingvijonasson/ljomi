<template>
  <div>
    <page-title is-large>
      <p class="text-h1">
        I’m Ingvi. I develop websites together with designers. I create quality
        frontend code that works for people.
      </p>
    </page-title>

    <section-about />
    <section-recommendations :recommendations="recommendations" />
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import SectionAbout from '@/components/SectionAbout.vue'
import SectionRecommendations from '@/components/SectionRecommendations.vue'

export default {
  components: {
    PageTitle,
    SectionAbout,
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
