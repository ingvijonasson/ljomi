<template>
  <section class="section-intro">
    <div class="container">
      <slot></slot>
    </div>
  </section>
</template>

<style scoped>
.section-intro {
  --fluid-spacing: calc(1.5rem + 4vw);

  padding-top: var(--fluid-spacing);
  padding-bottom: calc(var(--fluid-spacing) * 2);
  background-color: var(--color-base);
}
</style>
