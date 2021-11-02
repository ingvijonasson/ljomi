<template>
  <div>
    <page-title>
      <p class="text-h1">{{ description }}</p>
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
  data() {
    return {
      description:
        'I’m Ingvi. I develop websites together with designers. I create quality frontend code that works for people.',
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
