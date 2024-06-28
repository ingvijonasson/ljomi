<template>
  <section class="section section--large">
    <div class="container">
      <h2 class="section__title">Selected Work</h2>
    </div>
    <div class="projects container container--large">
      <a
        v-for="(project, key) in projects"
        :key="key"
        :href="project.link"
        class="project"
      >
        <div class="project__info">
          <h3 class="project__title">{{ project.title }}</h3>
          <small class="project__tagline">{{ project.tagline }}</small>
          <p v-if="project.description">{{ project.description }}</p>
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
        <div class="project__cover-wrapper">
          <img
            v-if="project.cover"
            class="project__cover"
            :src="require(`../assets/images/${project.cover}.png`)"
            alt=""
          />
        </div>
      </a>
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
          stack: ['scss', 'javascript', 'webpack'],
          description:
            'With the team at Bauhaus my role was to create markup, styles and functionality for various UI components. We created a simple styleguide for tracking every UI element and more importantly for everyone in the team being able to test the components',
        },
        {
          title: 'Arkio',
          tagline: 'Collaborative design with virtual reality',
          link: 'https://arkio.is/',
          cover: 'cover-arkio',
          color: '#4cc1b8',
          stack: ['nuxt', 'tailwind'],
          description:
            'With Arkio I collaborated with Hilmar and UX team to create a modern and responsive web application including some micro interactions which make the site plesant to use.',
        },
        {
          title: 'Simpego',
          tagline: 'Insurance',
          link: 'https://www.simpego.ch/',
          cover: 'cover-simpego',
          color: '#ff7c7c',
          stack: ['scss', 'javascript', 'webpack'],
          description:
            'With the team at fastforward my role was to  assist with the frontend. With provided design assests I created the UI and presented the components as an easy to use styleguide. During the process the team could test the patterns in the styleguide and implemented the UI seamlesly into the CMS.',
        },
        // {
        //   title: 'slowUp',
        //   tagline: 'Sport events',
        //   link: 'https://www.slowup.ch/',
        //   cover: 'cover-livindo',
        //   color: '#f7a823',
        //   stack: ['scss', 'javascript', 'greensock', 'webpack'],
        //   description: '',
        // },
        // {
        //   title: 'netto',
        //   tagline: 'Interior design',
        //   link: 'https://netto.ch/',
        //   // cover: 'cover-livindo',
        //   color: '#c20018',
        //   stack: ['javascript', 'scss', 'webpack'],
        //   description: '',
        // },
      ],
    }
  },
}
</script>

<style scoped>
.projects {
  margin-top: 2rem;
}

.project {
  display: grid;
  gap: calc(1rem + 3vw);
  text-decoration: none;
}

.project + .project {
  margin-top: calc(5vw + 3rem);
}

.project__info {
  grid-row-start: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  height: 100%;
  object-fit: cover;
  transition: transform 400ms;
}

@media only screen and (min-width: 1000px) {
  .project {
    grid-template-columns: repeat(2, 1fr);
  }

  .project__info {
    grid-row-start: 1;
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

  .project:hover .project__cover-wrapper::after,
  .project:focus .project__cover-wrapper::after {
    transform: none;
  }

  .project:hover .project__cover,
  .project:focus .project__cover {
    transform: scale(1.08) translateX(2%);
  }

  .project:nth-child(odd) .project__cover-wrapper:hover .project__cover {
    transform: scale(1.08) translateX(-2%);
  }
}
</style>
