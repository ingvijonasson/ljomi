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
    <section-projects />
    <section-recommendations :recommendations="recommendations" />
    <section-about />
    <section-work />
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import SectionRecommendations from '@/components/SectionRecommendations.vue'
import SectionWork from '~/components/SectionWork.vue'
import SectionProjects from '~/components/SectionProjects.vue'
import SectionAbout from '~/components/SectionAbout.vue'

export default {
  components: {
    PageTitle,
    SectionRecommendations,
    SectionWork,
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
