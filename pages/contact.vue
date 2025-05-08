<template>
  <div class="narrow-container">
    <div class="panels">
      <div class="panel panel-heading">
        <h1>Contact</h1>
      </div>
      <div class="panel">
        <h2>Email</h2>
        <p>
          For problems, feedback, feature requests, etc., shoot us an email. We'll try to answer as quick as possible,
          usually within the hour.
        </p>
        <p>
          <a href="mailto:support@superscript.app">support@superscript.app</a>
        </p>
        <p>
          For press inquiries, or if you're interested in sponsoring us to support our development, please email
          <a href="mailto:justin@superscript.app">justin@superscript.app</a>.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Superscript Contact Information'
})
</script>

<style lang="stylus" scoped>
@import '../assets/css/vars'

.panels
  grid-template-areas 'heading other'
  grid-template-columns 1fr 2fr

@media only screen and (max-width: $smallMax)
  .panels
    grid-template-areas 'heading'
</style>
