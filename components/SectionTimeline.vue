<template>
  <section class="section section--large">
    <div class="container">
      <h2 class="section__title">Timeline</h2>
      <article v-for="(work, key) in works" :key="key" class="work">
        <div class="work__info">
          <h3 class="work__title">{{ work.title }} - {{ work.location }}</h3>
          <p class="work__role">{{ work.role }}</p>
        </div>
        <time class="work__duration">
          {{ work.start }}
          <span v-if="work.end">- {{ work.end }}</span>
        </time>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      works: [
        {
          title: 'ZKB',
          location: 'Zürich',
          role: 'UI developer | freelance',
          start: 'Jan 2023',
          end: 'Jun 2024',
        },
        {
          title: 'Die Mobiliar',
          location: 'Bern',
          role: 'UI developer | freelance',
          start: 'Feb 2020',
          end: 'Dec 2022',
        },
        {
          title: 'Ljomi GmbH',
          location: 'Bern',
          role: 'Founder',
          start: 'Feb 2020',
          end: 'Current',
        },
        {
          title: 'Liip AG',
          link: 'https://liip.ch',
          location: 'Bern',
          role: 'Frontend developer',
          start: 'Jan 2018',
          end: 'Jan 2020',
        },
        {
          title: 'Ginetta AG',
          link: 'https://ginetta.net',
          location: 'Zürich',
          role: 'Frontend developer',
          start: 'Jun 2016',
          end: 'Dec 2018',
        },
        {
          title: 'Freelance',
          location: 'Berlin',
          role: 'Frontend developer and designer',
          start: 'Oct 2008',
          end: 'Jun 2016',
        },
        {
          title: 'Skapalón',
          location: 'Reykjavík',
          role: 'Frontend developer',
          start: 'Jan 2013',
          end: 'Apr 2014',
        },
        {
          title: 'SAE Institute',
          location: 'Berlin',
          link: 'https://www.sae.edu',
          role: 'Supervisor',
          start: 'Oct 2012',
          end: 'Jun 2013',
        },
      ],
    }
  },
}
</script>

<style scoped>
.work {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr;
  align-items: start;
  padding-block: 0.75rem;
}

.work__title {
  margin-top: 0;
  margin-bottom: 0;
  line-height: 1.4;
}

.work__link {
  font-size: var(--text-sm);
  font-weight: var(--font-bold);
}

.work + .work {
  border-top: 1px solid currentColor;
}

.work__duration {
  text-align: right;
}

.work__role {
  line-height: 1.4;
  margin-block: 0.15rem;
}
</style>
