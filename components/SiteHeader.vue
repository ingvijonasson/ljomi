<template>
  <header>
    <div class="container">
      <div class="site-header__layout">
        <nuxt-link class="logo" to="/">ljómi</nuxt-link>
        <nuxt-link to="/articles">articles </nuxt-link>
      </div>
      <p class="site-header__intro">
        I’m Ingvi. I develop websites together with designers and agencies. I
        create websites that are for everyone.
      </p>
    </div>
  </header>
</template>

<style scoped>
header {
  padding: 3.5rem 0;
  background-color: var(--color-base);
}

.site-header__layout {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.site-header__intro {
  padding: 12rem 0;
  font-size: 2.75rem;
  font-weight: 600;
}

.logo {
  font-size: 1.25rem;
  font-weight: 600;
  text-decoration: none;
}

a {
  font-weight: 600;
}
</style>
