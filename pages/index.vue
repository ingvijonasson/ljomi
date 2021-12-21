<template>
  <div>
    <page-title>
      <p class="text-h1">
        Hi, I’m Ingvi Jonasson, independent user interface developer based in
        Bern, Switzerland. I help companies and organizations build modern,
        resilient, and inclusive user interfaces and design systems, with a
        strong focus on responsive design, performance, and accessibility.
      </p>
    </page-title>
    <section-work />
    <section-recommendations :recommendations="recommendations" />
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import SectionRecommendations from '@/components/SectionRecommendations.vue'
import SectionWork from '~/components/SectionWork.vue'

export default {
  components: {
    PageTitle,
    SectionRecommendations,
    SectionWork,
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
  head() {
    return {
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description,
        },
      ],
    }
  },
}
</script>
