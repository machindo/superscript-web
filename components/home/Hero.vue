<template>
  <section class="hero">
    <div class="hero-contents narrow-container">
      <SuperscriptLogo height="100" width="72" viewBox="0 0 72 100" />
      <p class="hero--brand-name brand-name">Superscript</p>
      <p class="hero--description">The dedicated comic book script editor.</p>
      <div class="hero-actions">
        <nuxt-link
          class="button primary"
          to="/download"
          rel="nofollow"
          download="superscript.AppImage"
        >Download</nuxt-link>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import SuperscriptLogo from '../components/SuperscriptLogo.vue'
</script>
<style lang="stylus" scoped>
@import '../../assets/css/vars'

.hero
  margin 100px 0 50px
  text-align center

.hero--brand-name
  margin 0
  font-size 4.24rem

.hero--description
  margin-top 1ex
  text-align center
  font-weight 200
  font-size 1.618rem
  color rgba(black .6)

.primary
  padding 1em 2em
  background #28c596

small > a
  color black

@media only screen and (max-width: 500px)
  .hero
    margin 0 0 25px

  .hero--logo
    width 54px
    height 75px

  .hero--brand-name
    font-size 2.6rem

  .hero--description
    font-size 1rem
</style>
