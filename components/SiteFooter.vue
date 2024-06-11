<template>
  <footer class="site-footer noprint">
    <div class="container">
      <h2 class="site-footer__title">Say hello</h2>
      <a
        class="site-footer__mail"
        href="mailto:ingvi@ljomi.ch"
        data-analytics="Email"
      >
        ingvi@ljomi.ch
      </a>
      <ul class="site-footer__social-list">
        <li v-for="(item, index) in social" :key="index">
          <a
            class="site-footer__link"
            :href="item.link"
            :title="item.title"
            :data-analytics="item.title"
          >
            <svg-icon class="site-footer__icon" :name="item.title" />
          </a>
        </li>
      </ul>
      <div class="site-footer__colophon">
        This site is built with
        <a class="link link--white" href="https://nuxtjs.org/">Nuxt</a> and
        hosted on
        <a class="link link--white" href="https://www.netlify.com/">Netlify</a>.
        Source code is hosted on
        <a class="link link--white" href="https://github.com/ingvoo/ljomi"
          >Github</a
        >.
        <div>ljomi ©2020—{{ currentYear }}</div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      social: [
        {
          title: 'codepen',
          link: 'https://codepen.io/ingvoo',
        },
        {
          title: 'github',
          link: 'https://github.com/ingvoo',
        },
        {
          title: 'linkedin',
          link: 'https://ch.linkedin.com/in/ingvoo',
        },
      ],
    }
  },
  computed: {
    currentYear() {
      return new Date().getFullYear()
    },
  },
}
</script>

<style scoped>
.site-footer {
  padding: calc(3rem + 5vw) 0;
  background-color: var(--color-base-300);
}

.site-footer__inner {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
}

.site-footer__title {
  font-size: var(--text-base);
}

.site-footer__mail {
  position: relative;
  z-index: 4;
  display: inline-block;
  font-size: var(--text-3xl);
  font-weight: var(--font-bold);
  text-decoration: none;
  outline: none;
}

.site-footer__mail::before {
  content: ' ';
  display: block;
  position: absolute;
  inset: 60% -20px 5px -20px;
  z-index: -1;
  background-color: var(--color-pink-200);
  transition: transform 0.3s ease;
  transform: scaleX(0);
  transform-origin: bottom right;
}

.site-footer__mail:hover::before,
.site-footer__mail:focus::before {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.site-footer__social-list {
  display: flex;
  margin-top: 1rem;
  padding-left: 0;
  list-style: none;
}

.site-footer__link {
  margin-right: 3rem;
  padding: 1rem 0;
  outline: none;
  transition: color 200ms;
}

.site-footer__link:hover,
.site-footer__link:focus {
  color: var(--color-pink-500);
}

.site-footer__icon {
  max-width: 1.25rem;
  max-height: 1.25rem;
}

.site-footer__colophon {
  margin-top: calc(3rem + 5vw);
  padding-top: 1rem;
  border-top: 2px solid var(--color-base-text);
}
</style>
