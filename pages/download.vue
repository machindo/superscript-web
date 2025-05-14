<template>
  <div class="narrow-container download-page">
    <div class="panels heading-row">
      <div class="panel panel-heading">
        <h1>Download</h1>
      </div>
      <div v-if="macReleases.length && windowsReleases.length" class="panel latest-releases">
        <div v-if="os === 'mac'">
          <a class="button primary" :href="macReleases[0].url" rel="nofollow" download="Superscript.dmg">Download for
            Mac</a>
          <p>
            <small>Requires macOS 10.9+</small>
          </p>
        </div>
        <div v-else-if="os === 'windows'">
          <a class="button primary" :href="windowsReleases[0].url" rel="nofollow"
            download="Superscript Setup.exe">Download for Windows</a>
          <p>
            <small>Requires Windows 7+</small>
          </p>
        </div>
        <div v-else>
          <a class="button" :href="windowsReleases[0].url" rel="nofollow" download="Superscript Setup.exe">Download for
            Windows</a>
          &nbsp;
          <a class="button" :href="`/releases/dmg/${macReleases[0].version}`" rel="nofollow"
            download="Superscript.dmg">Download for Mac</a>
          <p>
            <small>Requires macOS 10.9+ or Windows 7</small>
          </p>
        </div>
      </div>
    </div>

    <div class="panels all-releases">
      <div class="panel">
        <h3>Windows releases</h3>
        <small>Requires Windows 7 or newer</small>
        <ul>
          <li v-for="release of windowsReleases" :key="release.version">
            <a :href="release.url" rel="nofollow" download="Superscript Setup.exe">v{{
              release.version
            }}</a>
          </li>
        </ul>
      </div>
      <div class="panel">
        <h3>Mac releases</h3>
        <small>Requires macOS 10.9 or newer</small>
        <ul>
          <li v-for="release of macReleases" :key="release.version">
            <a :href="release.url" rel="nofollow" :download="`Superscript.${release.extension}`">v{{
              release.version }}</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="panels">
      <div class="panel">
        <h3>Example Scripts</h3>
        <ul>
          <li v-for="example of examples" :key="example.title">
            <a :href="`examples/${example.filename}`" rel="nofollow" :download="example.filename">{{ example.title
              }}</a>
            by {{ example.writer }}
            <small v-if="example.copyright">&copy; {{ example.copyright }}</small>
            <template v-if="example.linkHref && example.linkText">
              —
              <a :href="example.linkHref">{{ example.linkText }}</a>
            </template>
          </li>
        </ul>
        <small>These scripts are available for personal use only. No rights are given to share or sell any these scripts
          in
          either its original or altered form without the express permission of its owner.</small>
      </div>
      <div class="panel changelog">
        <h3>Changelog</h3>

        <div v-for="release of changelog" :key="release.version">
          <h4>
            {{ release.version }}
            <time :datetime="release.date">— {{ new Date(release.date).toLocaleDateString('en-US', {
              month: 'short',
              year:
                'numeric', day: 'numeric'
            }) }}</time>
          </h4>
          <ul>
            <li v-for="(change, index) of release.changes" :key="index">{{ change }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import changelog from '../data/changelog.json'
import examples from '../data/examples.json'
import releases from '../data/releases.json'
import { getOS } from '../utils/os'

const os = getOS()
const sortedReleases = [...releases].sort((a, b) => b.version.localeCompare(a.version))
const linuxReleases = sortedReleases.filter(release => release.os === 'linux')
const macReleases = sortedReleases.filter(release => release.os === 'mac')
const windowsReleases = sortedReleases.filter(release => release.os === 'windows')

useSeoMeta({
  title: 'Download Superscript'
})
</script>
<style lang="stylus" scoped>
@import '../assets/css/vars'

.heading-row
  grid-template-areas 'heading latest'
  grid-template-columns 1fr 2fr

.panel
  text-align center

  ul
    text-align left

.panel-heading
  flex 0 1 30%

.latest-releases
  flex 0 1 59%

.button
  margin .5ch

.all-releases
  grid-template-columns 1fr 1fr

  > .panel
    flex 0 1 45%

.changelog
  text-align left

  > h3
    text-align center

  time
    font-weight normal

@media only screen and (max-width: $mediumMax)
  .heading-row
    grid-template-areas 'heading'
    grid-template-columns 1fr

  .all-releases
    grid-template-columns 1fr
</style>
