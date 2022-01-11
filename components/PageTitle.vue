<template>
  <section class="section-intro">
    <div class="container">
      <slot></slot>
    </div>
  </section>
</template>

<style scoped>
.section-intro {
  --fluid-spacing: calc(4rem + 3vw);

  padding-top: calc(120px + var(--fluid-spacing));
  padding-bottom: calc(var(--fluid-spacing) * 2);
  background-color: var(--color-base);
}
</style>
