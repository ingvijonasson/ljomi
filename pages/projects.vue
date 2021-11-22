<template>
  <section>
    <page-title>
      <h1>Projects</h1>
    </page-title>

    <div class="container">
      <!-- TODO: Add a loader for when fetching projects -->
      <!-- TODO: Handle error when Github is not repsonding to fetching repos -->
      <!-- TODO: Add a tag/label for archived/obsolite projects -->
      <!-- TODO: Setup icon loader for icon sprite -->

      <article v-for="project in projects" :key="project.id" class="project">
        <h3 class="project__title">
          <a :href="project.html_url">
            {{ project.name
            }}<svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="project__title-icon"
            >
              <path
                fill="currentColor"
                d="M18 10.82a1 1 0 0 0-1 1V19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h7.18a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h11a3 3 0 0 0 3-3v-7.18a1 1 0 0 0-1-1Zm3.92-8.2a1 1 0 0 0-.54-.54A1 1 0 0 0 21 2h-6a1 1 0 0 0 0 2h3.59L8.29 14.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L20 5.41V9a1 1 0 0 0 2 0V3a1 1 0 0 0-.08-.38Z"
              />
            </svg>
          </a>
        </h3>
        <small class="project__description">
          {{ project.description }}
          <span v-if="project.description !== null">&mdash;</span>
          <small class="project__stars">
            {{ project.stargazers_count }}
            <svg
              class="project__star-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M22 9.67a1 1 0 0 0-.86-.67l-5.69-.83L12.9 3a1 1 0 0 0-1.8 0L8.55 8.16 2.86 9a1 1 0 0 0-.81.68 1 1 0 0 0 .25 1l4.13 4-1 5.68a1 1 0 0 0 1.47 1.08l5.1-2.67 5.1 2.67a.93.93 0 0 0 .46.12 1 1 0 0 0 .59-.19 1 1 0 0 0 .4-1l-1-5.68 4.13-4A1 1 0 0 0 22 9.67Zm-6.15 4a1 1 0 0 0-.29.88l.72 4.2-3.76-2a1.06 1.06 0 0 0-.94 0l-3.76 2 .72-4.2a1 1 0 0 0-.29-.88l-3-3 4.21-.61a1 1 0 0 0 .76-.55L12 5.7l1.88 3.82a1 1 0 0 0 .76.55l4.21.61Z"
              />
            </svg>
          </small>
        </small>
        <ul class="project__topics">
          <li
            v-for="(topic, key) in project.topics"
            :key="key"
            class="project__topic"
          >
            {{ topic }}
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>

<script>
const handle = 'ingvoo'
const url = `https://api.github.com/users/${handle}/repos`

export default {
  async fetch() {
    this.projects = await fetch(url).then((res) => res.json())
  },

  data() {
    return {
      projects: [],
    }
  },
}
</script>

<style scoped>
.project + .project {
  margin-top: 1rem;
  border-top: 1px solid black;
}

.project__title {
  display: flex;
  align-items: baseline;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}

.project__title-icon {
  width: 0.85rem;
  height: 0.85rem;
  margin-left: 0.25rem;
}

.project a {
  text-decoration: none;
}

.project__stars {
  display: inline-flex;
  align-items: flex-end;
  line-height: 1;
}

.project__star-icon {
  width: 0.85rem;
  height: 0.85rem;
  margin-left: 0.15rem;
}

.project__topics {
  display: flex;
  padding-left: 0;
  list-style: none;
}

.project__topic {
  background-color: var(--color-pink);
  padding: 0.25rem 0.75rem;
  font-size: 0.85rem;
  border-radius: 0.25rem;
}

.project__topic + .project__topic {
  margin-left: 0.5rem;
}
</style>
