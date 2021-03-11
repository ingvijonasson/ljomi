<template>
  <footer>
    <div class="container">
      <div class="site-footer__inner">
        <div>
          <h3>Connect</h3>
          <ul>
            <li>Ingvi Jonasson</li>
            <li><a href="tel:+41795234432">079 523 44 32</a></li>
            <li><a href="mailto:ingvi@ljomi.ch">ingvi@ljomi.ch </a></li>
          </ul>
        </div>
        <div class="site-footer__follow">
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

  position: relative;
}

.site-footer__inner {
  margin-top: 3rem;
  padding: 4rem 4rem;
  display: grid;
  max-width: 28em;
  background-color: var(--footer-color-background);
  color: var(--footer-color);
}

/* .site-footer__deco {
  position: absolute;
  z-index: -1;
  bottom: 0;
  right: 0;
  width: calc(400px + 25vw);
} */

h3 {
  margin-top: 0;
  margin-bottom: 0.5em;
  font-size: 1rem;
}

.site-footer__rest {
  padding-top: 0.5rem;
  margin-top: 12rem;
  margin-bottom: calc(6rem + 10vw);
  font-size: 0.875rem;
  border-top: 4px solid var(--color-base);
}

.site-footer__follow {
  margin-top: 1.5rem;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  line-height: 1.8;
}

a {
  color: var(--footer-color);
}

@media only screen and (min-width: 600px) {
  .site-footer__inner {
    grid-template-columns: repeat(2, 1fr);
  }

  .site-footer__follow {
    margin-top: 0;
  }
}
</style>
