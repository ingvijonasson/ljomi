<template>
  <footer>
    <div class="container">
      <address>
        <ul>
          <li>
            <strong class="block">ljómi</strong>
          </li>
          <li>
            <a
              href="https://duckduckgo.com/?q=staatsstrasse+53+3049&t=ffab&ia=maps&iaxm=maps"
            >
              Staatstrasse 53, <br />
              3049 Säriswil</a
            >
          </li>
          <li>
            <a href="tel:+41795234432">+41795234432</a>
          </li>
          <li>
            <a href="mailto:hello@ljomi.ch"> hello@ljomi.ch </a>
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

      <div>© 2021 ljomi</div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  --footer-color: var(--color-white);
  --footer-color-background: var(--color-dark);

  padding: 2rem 0;
  color: var(--footer-color);
  background-color: var(--footer-color-background);
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: var(--footer-color);
}

address {
  font-style: normal;
}
</style>
