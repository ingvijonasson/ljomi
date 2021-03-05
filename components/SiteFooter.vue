<template>
  <footer>
    <div class="container">
      <div class="site-footer__inner">
        <div>
          <h3>Contact</h3>
          <address>
            <ul>
              <li><strong>ljómi gmbh</strong></li>
              <li>
                <a
                  href="https://duckduckgo.com/?q=staatsstrasse+53+3049&t=ffab&ia=maps&iaxm=maps"
                >
                  Staatstrasse 53, <br />
                  3049 Säriswil</a
                >
              </li>
              <li>
                <a
                  href="https://be.chregister.ch/cr-portal/auszug/auszug.xhtml?uid=CHE-368.810.255"
                >
                  CHE-368.810.255
                </a>
              </li>
            </ul>
          </address>
        </div>
        <div>
          <h3>Connect</h3>
          <ul>
            <li>
              <a href="tel:+41795234432">+41795234432</a>
            </li>
            <li>
              <a href="mailto:hello@ljomi.ch"> hello@ljomi.ch </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="site-footer__rest">
        <div>© 2021 ljomi</div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  --footer-color: var(--color-dark);
  --footer-color-background: var(--color-base);
}

.site-footer__inner {
  margin-top: 3rem;
  padding: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: var(--footer-color-background);
  color: var(--footer-color);
}

h3 {
  margin-top: 0;
  margin-bottom: 1.5em;
  font-size: 1rem;
}

.site-footer__rest {
  padding: 2rem 0;
  font-size: 0.875rem;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

a {
  /* text-decoration: none; */
  color: var(--footer-color);
}

address {
  font-style: normal;
}
</style>
