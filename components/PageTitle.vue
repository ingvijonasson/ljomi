<template>
  <section class="section-intro">
    <div class="container">
      <div class="section-intro__text">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-intro {
  --fluid-spacing: calc(1.5rem + 4vw);

  padding-top: var(--fluid-spacing);
  padding-bottom: var(--fluid-spacing);
  background-color: var(--color-base);
}
</style>
