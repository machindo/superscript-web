<template>
  <div class="release">
    <h4>
      {{ release.name }}
      <time :datetime="release.published_at ?? release.created_at">— {{ new Date(release.published_at ?? release.created_at).toLocaleDateString('en-US', {
        month: 'short',
        year:
          'numeric', day: 'numeric'
      }) }}</time>
    </h4>
    <h5>Changes</h5>
    <VueMarkdown :options="{ linkify: true }" :source="release.body" />
    <template v-if="release.assets">
      <h5>Downloads</h5>
      <ul>
        <li v-for="asset of release.assets?.filter(asset => !asset.name.startsWith('latest') || asset.name.endsWith('.exe'))" :key="asset.id">
          <a :href="asset.browser_download_url" rel="nofollow" :download="asset.name">{{ asset.name }}</a>
        </li>
      </ul>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { Octokit } from 'octokit'
import VueMarkdown from 'vue-markdown-render'

const { release } = defineProps<{
  release: Pick<Awaited<ReturnType<Octokit['rest']['repos']['listReleases']>>['data'][number], 'id' | 'name' | 'created_at' | 'body'>
    & Partial<Pick<Awaited<ReturnType<Octokit['rest']['repos']['listReleases']>>['data'][number], 'published_at' | 'assets'>>
}>()
</script>

<style lang="stylus">
.release
  margin-block 1em

  h4
    margin-block 0 1ex

  h5
    margin-block 1ex

  p
    margin-block 1ex
</style>