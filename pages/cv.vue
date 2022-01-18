<template>
  <div class="container page-cv">
    <header class="site-header">
      <div class="site-header__brand">
        <h1 class="site-header__headline">Ingvi Jónasson</h1>
        <p>
          Frontend developer. Based in Bern, Switzerland. I care about
          accessibility and great user experience. Creating modular and
          maintainable CSS are one of my favorite things at the job as well as
          always learning something new.
        </p>
      </div>
    </header>
    <section class="o-section">
      <h2 class="o-section__title visually-hidden">Profile</h2>

      <div class="o-grid">
        <article>
          <h3 class="o-section__subtitle">Day to day comfort</h3>
          <ul>
            <li>Accessible and semantic HTML</li>
            <li>Modular and scaleable CSS</li>
            <li>Sass, Less and PostCSS</li>
            <li>Javascript</li>
            <li>SVG</li>
            <li>Git</li>
          </ul>
        </article>

        <article>
          <h3 class="o-section__subtitle">Experienced</h3>
          <ul>
            <li>Vue</li>
            <li>Angular</li>
            <li>React</li>
            <li>Webpack</li>
            <li>Storybook</li>
            <li>Kirby CMS</li>
            <li>WordPress</li>
          </ul>
        </article>
      </div>
    </section>

    <section class="o-section">
      <h2 class="o-section__title">Work experience</h2>

      <article class="card">
        <h3 class="card__title">Ljomi - founder and web developer</h3>
        <p class="card__period">Februar 2020</p>
        <p class="card__description">
          Working independently developing and designing applications for
          various clients.
        </p>
      </article>

      <article class="card">
        <h3 class="card__title">Liip - web developer</h3>
        <p class="card__period">Februar 2018 - Januar 2020</p>
        <p class="card__description">
          Creating applications with Vue. Working closely with ux designers.
          Worked for clients such as
          <a href="https://smartenergylink.ch/de/">Smart Energie Link</a> and
          <a href="https://www.stapferhaus.ch/">Stapferhaus</a>.
        </p>
      </article>

      <article class="card">
        <h3 class="card__title">Ginetta - web developer</h3>
        <p class="card__period">June 2016 - Januar 2018</p>
        <p class="card__description">
          Creating styleguides and applications with frameworks such as React,
          Vue and Angular. Working closely with ux designers and researchers.
          Worked for clients such as
          <a href="https://made.ginetta.net/siroop-jobs.html">siroop</a> and
          <a href="https://made.ginetta.net/sympany-website.html">Sympany</a>.
        </p>
      </article>

      <article class="card">
        <h3 class="card__title">Independent web developer</h3>
        <p class="card__period">May 2014 - May 2016</p>
        <p class="card__description">
          Frontend development and WordPress theming for clients such as:
          <a href="https://www.activitystream.com/">Activity Stream</a>,
          <a href="https://barkbox.com/">Barkbox</a>,
          <a href="http://eogco.is/">E&Co</a>,
          <a href="http://www.florafaunavisions.de/">florafaunavisions</a>,
          <a href="http://geysir.com">Geysir</a>,
          <a href="http://hafnarborg.is/">Hafnarborg</a>,
          <a href="http://hverfisgalleri.is/">Hverfisgalleri</a>,
          <a href="https://www.meniga.com/">Meniga</a> and
          <a href="http://nordichouse.is/">The Nordic House</a>.
        </p>
      </article>

      <article class="card">
        <h3 class="card__title">Skapalón - web developer</h3>
        <p class="card__period">Jan 2013 - May 2014</p>
        <p class="card__description">
          Frontend development of custom web applications, WordPress theming and
          building HTML emails.
        </p>
      </article>

      <article class="card">
        <h3 class="card__title">SAE Institute Berlin - Supervisor</h3>
        <p class="card__period">Okt 2012 - May 2013</p>
        <p class="card__description">
          Assisting students with their assignments such as frontend and backend
          development with PHP and MySQL and how to get around with Photoshop,
          Illustrator and Flash. Creating development assets for students and
          responsibilities for various administration tasks.
        </p>
      </article>
    </section>

    <section class="o-section">
      <h2 class="o-section__title">Education</h2>

      <article class="card">
        <h3 class="card__title">SAE Institute Berlin</h3>
        <p class="card__period">Sep 2011 - Sep 2012</p>
        <p class="card__description">
          "Web Design and Development Diploma". Main focus was HTML, CSS,
          Javascript, PHP, MySQL and Photoshop.
        </p>
      </article>

      <article class="card">
        <h3 class="card__title">BSI Sprachschule</h3>
        <p class="card__period">Sep 2009 - Sep 2011</p>
        <p class="card__description">
          German language for foreigners. Graduation with "TestDaF" level C1.
        </p>
      </article>

      <article class="card">
        <h3 class="card__title">Fjölbraut í Garðabæ</h3>
        <p class="card__period">Sep 2006 - May 2010</p>
        <p class="card__description">
          Icelandic high school. Main topics were marketing, design, psychology
          and history.
        </p>
      </article>

      <article class="card">
        <h3 class="card__title">Iðnskólinn í Hafnarfirði</h3>
        <p class="card__period">Sep 2000 - May 2002</p>
        <p class="card__description">
          Icelandic technical college - "Industrial design and development"
          diploma.
        </p>
      </article>
    </section>

    <section class="o-section">
      <h2 class="o-section__title">Languages</h2>
      <div class="card">
        <ul class="list-languages">
          <li>English<i>*</i></li>
          <li>German<i>*</i></li>
          <li>Icelandic<i>**</i></li>
          <li>French<i>***</i></li>
        </ul>
      </div>
      <small
        >* Full professional proficiency,<br />
        ** Native language, <br />
        *** Elementary proficiency</small
      >
    </section>

    <section>
      <h2>Contact</h2>
      <ul>
        <li><a href="http://www.ljomi.ch">ljomi.ch</a></li>
        <li><a href="mailto:ingvi@ljomi.ch">ingvi@ljomi.ch</a></li>
        <li><a href="tel:0041795234432">079 523 44 32</a></li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  head() {
    return {
      meta: [
        {
          name: 'robots',
          content: 'noindex,follow',
        },
      ],
    }
  },
}
</script>

<style scoped>
h2 {
  color: #777;
}

ul {
  padding-left: 0;
  list-style-position: inside;
}
.card__title {
  margin-bottom: 0.15rem;
}
.card__period {
  margin: 0;
  font-weight: var(--font-bold);
  font-size: 0.75rem;
}
</style>
