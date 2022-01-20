<template>
  <div>
    <page-title>
      <p class="text-h1">Uses</p>
    </page-title>
    <section class="section section-large">
      <div class="container">
        <h2>Hardware</h2>
        <ul>
          <li>Macbook Pro 2019 16 inch</li>
          <li>Dell U3419W - curved monitor</li>
          <li>Keychron K1 - mechanical Keyboard</li>
          <li>
            Logitech MX3 for Mac - very popular mouse. Highly recommend it
          </li>
          <li>Logitech Brio - webcamera</li>
          <li>Rode NT-USB - microphone</li>
        </ul>

        <h2>Editor and Terminal</h2>
        <ul>
          <li>Firefox - for private usage. Chrome and Edge for testing</li>
          <li>iTerm - my prefered terminal</li>
          <li>Visual studio code - previously using sublime text and atom</li>
          <li>Tower - GUI for GIT</li>
        </ul>

        <h2>Desktop apps</h2>
        <ul>
          <li>1Password</li>
          <li>Alfred</li>
          <li>Better snaptool - for snapping windows to your screen edges</li>
          <li>
            ColorSlurp - any color picker will do this one has been working out
            fine for me since a couple of years
          </li>
          <li>Dato - replace the macOs clock with multiple clocks timezones</li>
          <li>Figma - for designing</li>
          <li>Kap - for quick screen recording</li>
          <li>Maccy - for managing multiple cliphands</li>
        </ul>

        <h2>Saas</h2>
        <ul>
          <li>
            Browserstack - for testing legacy browsers or better said ie11
          </li>
          <li>Harvest - for time tracking and simple invoicing</li>
        </ul>

        <h2>Backup strategy</h2>
        <ul>
          <li>Time Machine - with an external hard drive</li>
          <li>Backblaze - for cloud sync</li>
          <li>
            ProtonDrive - for backing up certain files. I use the drive usually
            and backblaze and time machine are only for emergency situations.
          </li>
          <li>SpiderOak - for backing up everything else</li>
        </ul>

        <!-- <h2>Hardware - Desk setup</h2> -->

        <h2>Audio</h2>
        <ul>
          <li>Ableton live 11 - for editing audio files and compose</li>
          <li>
            RØDE NT-USB microphone and LogiLink professional Microphone Boom Arm
            Stand - for quality audio
          </li>
        </ul>

        <h2>Miscellaneous</h2>
        <ul>
          <li>
            Protonmail and ProtonVPN - for a basic layer of secure emailing and
            browsing
          </li>
        </ul>
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

<style scoped>
ul {
  margin-top: 1rem;
}
</style>
