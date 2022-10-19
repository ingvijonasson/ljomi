<template>
  <section class="section section--large">
    <div class="container">
      <h2 class="section__title">Recent Work</h2>
    </div>
    <div class="projects container container--large">
      <article v-for="(project, key) in projects" :key="key" class="project">
        <div class="project__info">
          <h3 class="project__title">{{ project.title }}</h3>
          <small class="project__tagline">{{ project.tagline }}</small>
          <ul v-if="project.stack" class="project__stack-list">
            <li
              v-for="(icon, index) in project.stack"
              :key="index"
              class="project__stack-item"
            >
              <svg-icon
                class="project__stack-icon"
                :name="icon"
                :title="icon"
              />
            </li>
          </ul>
        </div>
        <a :href="project.link" class="project__cover-wrapper">
          <img
            v-if="project.cover"
            class="project__cover"
            :src="require(`../assets/images/${project.cover}.png`)"
            alt=""
          />
        </a>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: 'Bauhaus',
          tagline: 'E-commerce',
          link: 'https://bauhaus.ch/',
          cover: 'cover-bauhaus',
          color: '#d8232a',
          stack: ['scss', 'webpack'],
        },
        {
          title: 'Arkio',
          tagline: 'Collaborative design with virtual reality',
          link: 'https://arkio.is/',
          cover: 'cover-arkio',
          color: '#4cc1b8',
          stack: ['nuxt', 'tailwind'],
        },
        {
          title: 'Simpego',
          tagline: 'Insurance',
          link: 'https://www.simpego.ch/',
          cover: 'cover-simpego',
          color: '#ff7c7c',
          stack: ['scss', 'webpack'],
        },
        {
          title: 'Livindo',
          tagline: 'Interior design',
          link: 'https://livindo.ch',
          cover: 'cover-livindo',
          color: '#d7b06e',
          stack: ['scss', 'webpack'],
        },
      ],
    }
  },
}
</script>

<style scoped>
@media only screen and (min-width: 800px) {
  .projects {
    margin-top: 2rem;
  }
}

.project {
  display: grid;
  gap: 2rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.project__info {
  grid-row-start: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
}

.project__title {
  margin-top: 0;
  margin-bottom: 0;
  font-size: var(--text-3xl);
  line-height: 1.2;
}

.project__tagline {
  font-size: var(--text-sm);
  font-weight: var(--font-regular);
}

.project__stack-list {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding-left: 0;
  margin-top: 0.5rem;
  list-style: none;
}

.project__stack-icon {
  max-width: 1.25rem;
  max-height: 1.25rem;
  margin-right: 1rem;
}

.project__cover {
  border-radius: 0.25rem;
  transition: transform 400ms;
}

@media only screen and (min-width: 800px) {
  .project {
    grid-template-columns: repeat(2, 1fr);
  }

  .project__info {
    grid-row-start: 1;
    padding: 2rem;
  }

  .project:nth-child(odd) .project__info {
    grid-column-start: 2;
    grid-row-start: 1;
  }

  .project__cover-wrapper {
    position: relative;
    overflow: hidden;
    border-radius: 0.25rem;
  }

  .project__cover-wrapper::after {
    content: 'Visit \2192';
    position: absolute;
    right: 0;
    bottom: 0;
    display: inline-block;
    padding: 0.25rem 2rem;
    background: rgba(255, 255, 255, 0.8);
    transition: transform 200ms;
    transform: translate(0, 100%);
  }

  .project__cover-wrapper:hover::after {
    transform: none;
  }

  .project__cover-wrapper:hover .project__cover {
    transform: scale(1.08) translateX(2%);
  }

  .project:nth-child(odd) .project__cover-wrapper:hover .project__cover {
    transform: scale(1.08) translateX(-2%);
  }
}
</style>
