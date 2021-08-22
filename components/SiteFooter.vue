<template>
  <footer>
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
          <h3>Follow</h3>
          <ul>
            <li>
              <a href="https://codepen.io/ingvi">codepen</a>
            </li>
            <li>
              <a href="https://github.com/ingvijonasson">github</a>
            </li>
            <li>
              <a href="https://ch.linkedin.com/in/ingvijonasson">linkedin</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="site-footer__rest">
        <div>© 2021 ljomi</div>
      </div>
    </div>
    <!-- <svg
      class="site-footer__deco"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 709 388"
    >
      <ellipse
        cx="515.267"
        cy="516.267"
        rx="515.267"
        ry="516.267"
        fill="var(--color-pink)"
        fill-opacity=".8"
      />
    </svg> -->
  </footer>
</template>

<style scoped>
footer {
  --footer-color: var(--color-black);
  --footer-color-background: var(--color-base);

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
  max-width: 28em;
  background-color: var(--footer-color-background);
  color: var(--footer-color);
}
.site-footer__rest {
  padding-top: 0.5rem;
  margin-top: calc(1rem + 3vw);
  margin-bottom: calc(3rem + 3vw);
  font-size: 0.875rem;
  border-top: 4px solid var(--color-base);
}

.site-footer__column {
  margin-bottom: 1.5rem;
}

/* .site-footer__deco {
  position: absolute;
  z-index: -1;
  bottom: 0;
  right: 0;
  width: calc(400px + 25vw);
} */
</style>
