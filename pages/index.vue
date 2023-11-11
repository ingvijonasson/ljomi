<template>
  <div>
    <page-title>
      <p class="text-h1">
        👋 I’m Ingvi an independent developer in Switzerland. I build modern and
        <strong>accessible</strong> web with focus on
        <strong>user experience</strong>.
      </p>
    </page-title>
    <section-projects />
    <section-recommendations :recommendations="recommendations" />
    <section-about />
    <section-experience />
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import SectionRecommendations from '@/components/SectionRecommendations.vue'
import SectionExperience from '~/components/SectionExperience.vue'
import SectionProjects from '~/components/SectionProjects.vue'
import SectionAbout from '~/components/SectionAbout.vue'

export default {
  components: {
    PageTitle,
    SectionRecommendations,
    SectionExperience,
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
