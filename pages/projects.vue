<template>
  <section class="container">
    <!-- TODO: ADD a loader for when fetching projects -->
    <article v-for="project in projects" :key="project.id" class="project">
      <h3 class="project__title">
        <a :href="project.html_url">
          {{ project.name }}
        </a>
      </h3>
      <small class="project__description">{{ project.description }}</small>
      <ul>
        <li v-for="(topic, key) in project.topics" :key="key">{{ topic }}</li>
      </ul>
      <a :href="project.stargazers_url">{{ project.stargazers_count }} ⭐️</a>
    </article>
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
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}
</style>
