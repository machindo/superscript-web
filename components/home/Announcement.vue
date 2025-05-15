<template>
  <div v-if="isShown" class="announcement-wrapper" @click.self="isShown = false">
    <div class="announcement">
      <h2>Superscript is now free!</h2>
      <button class="close-button" @click="isShown = false" title="Dismiss announcement">&#x2715;</button>
      <p>
        If you're an existing user looking for the pricing, purchasing, licensing or account page, they're all gone.
        Make sure to <nuxt-link to="/download">upgrade</nuxt-link> to the latest version of Superscript to keep using
        the app without restrictions.
      </p>
      <p>
        If you'd like to show some love, consider sponsoring us on GitHub:
      </p>
      <iframe src="https://github.com/sponsors/machindo/button" title="Sponsor machindo" height="32" width="114"
        style="border: 0; border-radius: 6px;"></iframe>
    </div>
  </div>
</template>

<script setup lang="ts">
const isShown = ref(true)
</script>

<style lang="stylus" scoped>
@import '../../assets/css/vars'

.announcement-wrapper
  position fixed
  inset 0
  display grid
  z-index 1001

.announcement
  position relative
  place-self center
  width 95%
  max-height 95%
  max-width 50ch
  padding 1em
  border solid 3px $borderColor
  background $pageBackground
  color $textColor
  box-shadow 0 1em 2em rgba(black .2), 0 2em 4em rgba(black .2), 0 4em 8em rgba(black .2)
  pointer-events all

.close-button
  position absolute
  top 1ex
  right 1ex
  background none
  border none
  cursor pointer
  font-size 150%

  &:hover
    color $brandColor
</style>