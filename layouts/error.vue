<template>
  <div class="error-page narrow-container">
    <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 48 48"><path d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"/></svg>

    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>

    <p>{{ error.message }}</p>

    <nuxt-link to="/">Home</nuxt-link>
  </div>
</template>
<script setup lang="ts">
const { error } = defineProps<{ error: { statusCode: number, message: string } }>()
</script>
<style lang="stylus" scoped>
@import '../assets/css/vars'

.error-page
  padding-top 50px
  text-align center

svg
  fill $textColor
</style>
