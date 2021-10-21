<template>
  <div>
    <page-title>
      <p class="text-h1">Uses</p>
    </page-title>
    <section class="section section-large">
      <div class="container">
        <h2>Editor and Terminal</h2>
        <ul>
          <li>Visual studio code</li>
          <li>Tower</li>
          <li>iTerm</li>
        </ul>
        <h2>Desktop apps</h2>
        <ul>
          <li>1Password</li>
          <li>Alfred</li>
          <li>Better snaptool</li>
          <li>
            ColorSlurp - any color picker will do this one has been working out
            fine for me since a couple of years
          </li>
          <li>Dato - replace the macOs clock</li>
          <li>Figma</li>
          <li>Kap - for quick screen recording</li>
          <li>Maccy</li>
        </ul>

        <h2>Saas</h2>
        <ul>
          <li>ProtonMail</li>
          <li>
            Browserstack - for testing legacy browsers or better said ie11
          </li>
          <li>Harvest for time tracking and invoicing</li>
        </ul>
        <h2>Backup strategy</h2>
        <ul>
          <li>Time Machine - with an external hard drive</li>
          <li>Backblaze - for cloud sync</li>
          <li>
            ProtonDrive - for backing up certain files. I use the drive usually
            and backblaze and time machine are only for emergency situations.
          </li>
        </ul>
        <h2>Desk setup</h2>
        <h2>Audio</h2>
        <ul>
          <li>Ableton live 11</li>
        </ul>
        <h2>Miscellaneous</h2>
      </div>
    </section>
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'

export default {
  components: {
    PageTitle,
  },
}
</script>
