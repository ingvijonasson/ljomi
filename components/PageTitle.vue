<template>
  <section class="section-intro" :class="{ 'section-intro--large': isLarge }">
    <div class="container">
      <div class="section-intro__text">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    isLarge: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
.section-intro {
  --fluid-spacing: calc(1.5rem + 4vw);

  padding-top: var(--fluid-spacing);
  padding-bottom: var(--fluid-spacing);
  background-color: var(--color-pink);
}

.section-intro__text {
  font-size: 1.8rem;
  font-weight: 600;
}

.section-intro--large {
  --fluid-spacing: calc(1.5rem + 8vw);
}

.section-intro--large .section-intro__text {
  max-width: 20em;
  margin-left: auto;
  margin-right: auto;
}
</style>
