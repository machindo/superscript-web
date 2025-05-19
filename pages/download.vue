<template>
  <div class="narrow-container download-page">
    <div class="panels heading-row">
      <div class="panel panel-heading">
        <h1>Download</h1>
      </div>
      <div v-if="macReleases.length && windowsReleases.length" class="panel latest-releases">
        <ClientOnly>
          <div v-if="os !== 'mac'">
            <a class="button primary" :href="windowsReleases[0].asset.browser_download_url" rel="nofollow"
              :download="windowsReleases[0].downloadName">Download for Windows</a>
            <p>
              <small>Requires Windows 7+</small>
            </p>
          </div>
          <div v-if="os !== 'windows'">
            <a class="button primary" :href="macReleases[0].asset.browser_download_url" rel="nofollow" :download="macReleases[0].downloadName">Download for
              Mac</a>
            <p>
              <small>Requires macOS 10.9+</small>
            </p>
          </div>
          <template #fallback>
            <div>
              <a class="button primary" :href="windowsReleases[0].asset.browser_download_url" rel="nofollow"
                :download="windowsReleases[0].downloadName">Download for Windows</a>
              <p>
                <small>Requires Windows 7+</small>
              </p>
            </div>
            <div>
              <a class="button primary" :href="macReleases[0].asset.browser_download_url" rel="nofollow" :download="macReleases[0].downloadName">Download for
                Mac</a>
              <p>
                <small>Requires macOS 10.9+</small>
              </p>
            </div>
          </template>
        </ClientOnly>
      </div>
    </div>

    <div class="panels">
      <div class="panel changelog">
        <h3>Releases</h3>

        <Release :release="releases[0]" />

        <details>
          <summary>Older releases</summary>
          <Release v-for="release of releases.slice(1)" :key="release.id" :release="release" />
          <Release v-for="release of oldChangelog" :key="release.id" :release="release" />
        </details>
      </div>
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
    </div>
  </div>
</template>
<script setup lang="ts">
import { Octokit } from 'octokit'
import Release from '../components/download/Release.vue'
import oldChangelog from '../data/changelog.json'
import examples from '../data/examples.json'
import { getOS } from '../utils/os'

useSeoMeta({
  title: 'Download Superscript'
})

const octokit = new Octokit()

const { data: releases } = await octokit.rest.repos.listReleases({
  owner: 'machindo',
  repo: 'superscript'
})

type ReleaseWithAsset = {
  release: typeof releases[number],
  asset: typeof releases[number]['assets'][number],
  downloadName: string,
}

const macReleases = releases
  .map(release => ({ 
    release, 
    asset: release.assets.find(asset => asset.name.endsWith('.dmg')),
    downloadName: `Superscript.${release.name}.dmg`
  }))
  .filter(release => !!release.asset) as ReleaseWithAsset[]

const windowsReleases = releases
  .map(release => ({ 
    release, 
    asset: release.assets.find(asset => asset.name.endsWith('.exe')),
    downloadName: `Superscript.${release.name}.exe`
  }))
  .filter(release => !!release.asset) as ReleaseWithAsset[]

const os = getOS()
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
