<template>
  <section class="section section--large">
    <div class="container">
      <h2 class="section__title">How I can help</h2>
      <ul>
        <li>
          Creating applications with framworks such as Angular, Vue, React or
          Astro.
        </li>
        <li>
          Creating a styleguide or a pattern library with tools such as
          Storybook.
        </li>
        <li>Providing scalable and modern CSS.</li>
        <li>Develop with web accessibility mindset.</li>
      </ul>

      <h2 class="section__title">Little bit about me</h2>
      <p>
        I've been building the web professionally for over 15 years. Both
        developing and design applications. I'm all about getting the details
        right and making sure everything is in it's right place.
      </p>

      <p>
        Since I started developing for the web I have been serious about good
        markup or the structure that lies underneath every websites. Good markup
        has many benefits and is crucial for search engines and also fosters
        accessibility for all users.
      </p>

      <h2 class="section__title">Timeline</h2>
      <article v-for="(work, key) in works" :key="key" class="work">
        <div class="work__info">
          <h3 class="work__title">
            {{ work.title }}
          </h3>
          <p class="work__role">{{ work.role }}</p>
        </div>
        <time class="block">
          {{ work.start }}
          <span v-if="work.end">- {{ work.end }}</span>
        </time>
        <span class="block">{{ work.location }}</span>
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
          start: '2023',
          end: null,
        },
        {
          title: 'Die Mobiliar',
          location: 'Bern',
          role: 'UI developer | freelance',
          start: '2020',
          end: '2022',
        },
        {
          title: 'Ljomi GmbH',
          location: 'Bern',
          role: 'Founder',
          start: '2020',
          end: null,
        },
        {
          title: 'Liip AG',
          link: 'https://liip.ch',
          location: 'Bern',
          role: 'Frontend developer',
          start: '2018',
          end: '2020',
        },
        {
          title: 'Ginetta AG',
          link: 'https://ginetta.net',
          location: 'Zürich',
          role: 'Frontend developer',
          start: '2016',
          end: '2018',
        },
        {
          title: 'Freelance',
          location: 'Berlin',
          role: 'Frontend developer and designer',
          start: '2014',
          end: '2016',
        },
        {
          title: 'Skapalón',
          location: 'Reykjavík',
          role: 'Frontend developer',
          start: '2012',
          end: '2014',
        },
        {
          title: 'SAE Institute',
          location: 'Berlin',
          link: 'https://www.sae.edu',
          role: 'Supervisor',
          start: '2012',
          end: '2013',
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
  align-items: baseline;
  padding-block: 0.5rem;
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

@media only screen and (min-width: 800px) {
  .work {
    grid-template-columns: 1fr 1fr 3fr;
    padding-block: 0.75rem;
  }

  .work__info {
    grid-column-start: 3;
    grid-row-start: 1;
  }

  .work__role {
    line-height: 1.4;
    margin-block: 0.15rem;
  }
}
</style>
