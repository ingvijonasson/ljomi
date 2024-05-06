<template>
  <div>
    <page-title>
      <p class="text-h1">
        👋 I’m Ingvi an independent developer in Switzerland. I create
        <strong>accessible</strong> web solutions with focus on
        <strong>user experience</strong>.
      </p>
    </page-title>

    <section-about />
    <section-projects />
    <section-recommendations :recommendations="recommendations" />
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import SectionRecommendations from '@/components/SectionRecommendations.vue'
import SectionProjects from '~/components/SectionProjects.vue'
import SectionAbout from '~/components/SectionAbout.vue'

export default {
  components: {
    PageTitle,
    SectionRecommendations,
    SectionProjects,
    SectionAbout,
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
