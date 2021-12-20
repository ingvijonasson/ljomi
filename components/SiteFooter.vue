<template>
  <footer class="noprint">
    <div class="container">
      <div class="site-footer__inner">
        <div class="site-footer__column">
          <h3>Connect</h3>
          <ul>
            <li>Ingvi Jonasson</li>
            <li><a href="tel:+41795234432">079 523 44 32</a></li>
            <li><a href="mailto:ingvi@ljomi.ch">ingvi@ljomi.ch </a></li>
          </ul>
        </div>
        <div class="site-footer__column">
          <h3>Elsewhere</h3>
          <ul>
            <li>
              <a href="https://codepen.io/ingvoo">codepen</a>
            </li>
            <li>
              <a href="https://github.com/ingvoo">github</a>
            </li>
            <li>
              <a href="https://ch.linkedin.com/in/ingvoo">linkedin</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="site-footer__rest">
        <div>ljomi © 2020 — 2021</div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  --footer-color: var(--color-black);
  --footer-color-background: var(--color-pink);

  margin-top: 5rem;
  position: relative;
}

h3 {
  margin-top: 0;
  margin-bottom: 0.5em;
  font-size: 1rem;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  line-height: 1.8;
}

a {
  color: var(--footer-color);
  text-decoration: none;
}

.site-footer__inner {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1rem;
  padding: calc(3rem + 2vw);
  padding-bottom: calc(1.5rem + 2vw);
  background-color: var(--footer-color-background);
  color: var(--footer-color);
}
.site-footer__rest {
  padding-top: 0.5rem;
  margin-top: calc(1rem + 3vw);
  margin-bottom: calc(3rem + 3vw);
  font-size: 0.875rem;
  border-top: 4px solid var(--color-pink);
}

.site-footer__column {
  margin-bottom: 1.5rem;
}
</style>
