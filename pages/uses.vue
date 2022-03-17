<template>
  <div>
    <page-title>
      <p class="text-h1">Uses</p>
    </page-title>
    <section class="section section-large">
      <div class="container">
        <p>
          All the things I currently choose to use. Some affiliates but I will
          garantie that I actually all of these in may daily life.
        </p>
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
          <li>Firefox - for private and development</li>
          <li>Browserstack, Chrome and Edge - for testing</li>
          <li>iTerm - my prefered terminal</li>
          <li>Visual studio code - previously using sublime text and atom</li>
          <li>
            <a class="link" href="https://github.com/taniarascia/new-moon">
              New Moon
            </a>
            - VSCode theme
          </li>
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
          <li>
            (Harvest)[https://www.getharvest.com/invitation/3-131363?utm_source=rp]
            - for time tracking and simple invoicing
          </li>
          <li>Kap - for quick screen recording</li>
          <li>KeyCastr - for displaying keystrokes</li>
          <li>Maccy - for managing multiple cliphands</li>
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

        <h2>Audio</h2>
        <ul>
          <li>Ableton live 11 - for editing audio files and compose</li>
          <li>Novation Launchkey Mini MK3</li>
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
