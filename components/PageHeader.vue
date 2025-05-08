<template>
  <header class="page-header wide-container" id="page-header">
    <nuxt-link class="page-header--brand-link" to="/">
      <SuperscriptLogo class="page-header--logo" width="36" height="50" />
      <h1 class="page-header--brand-name brand-name">Superscript</h1>
    </nuxt-link>
    <button class="menu-button" @click="toggleNav" aria-label="Navigation menu">
      <svg width="40" height="40" viewBox="0 0 24 24" enable-background="new 0 0 24 24">
        <g id="Bounding_Boxes">
          <path fill="none" d="M0,0h24v24H0V0z"></path>
        </g>
        <g id="Rounded">
          <path d="M4,18h16c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H4c-0.55,0-1,0.45-1,1v0C3,17.55,3.45,18,4,18z M4,13h16c0.55,0,1-0.45,1-1
            v0c0-0.55-0.45-1-1-1H4c-0.55,0-1,0.45-1,1v0C3,12.55,3.45,13,4,13z M3,7L3,7c0,0.55,0.45,1,1,1h16c0.55,0,1-0.45,1-1v0
            c0-0.55-0.45-1-1-1H4C3.45,6,3,6.45,3,7z"></path>
        </g>
      </svg>
    </button>
    <div class="background-mask" :class="{ show: showNav }"></div>
    <nav class="nav" :class="{ show: showNav }" @click="closeNav">
      <nuxt-link class="nav-link home-link" to="/">Home</nuxt-link>
      <nuxt-link class="nav-link" to="/docs">Learn</nuxt-link>
      <nuxt-link class="nav-link" to="/features">Features</nuxt-link>
      <nuxt-link class="nav-link" to="/download">Download</nuxt-link>
      <button class="close-button" @click="closeNav" aria-label="Close">
        <svg width="40" height="40" viewBox="0 0 24 24">
          <g id="Bounding_Boxes">
            <path fill="none" d="M0,0h24v24H0V0z"></path>
          </g>
          <g id="Rounded">
            <path
              d="M18.3,5.71L18.3,5.71c-0.39-0.39-1.02-0.39-1.41,0L12,10.59L7.11,5.7c-0.39-0.39-1.02-0.39-1.41,0l0,0
            c-0.39,0.39-0.39,1.02,0,1.41L10.59,12L5.7,16.89c-0.39,0.39-0.39,1.02,0,1.41h0c0.39,0.39,1.02,0.39,1.41,0L12,13.41l4.89,4.89
            c0.39,0.39,1.02,0.39,1.41,0l0,0c0.39-0.39,0.39-1.02,0-1.41L13.41,12l4.89-4.89C18.68,6.73,18.68,6.09,18.3,5.71z">
            </path>
          </g>
        </svg>
      </button>
    </nav>
  </header>
</template>

<script setup lang="ts">
import SuperscriptLogo from '../components/SuperscriptLogo.vue'

const showNav = ref(false)

const toggleNav = () => {
  showNav.value = !showNav.value
}

const closeNav = () => {
  showNav.value = false
}
</script>

<style lang="stylus" scoped>
@import '../assets/css/vars'

.page-header
  position relative
  display flex
  margin-bottom 25px
  padding 1ch 1em
  z-index 1000
  align-items center

.page-header--brand-link
  display flex
  align-items center
  text-decoration none

.page-header--logo
  margin-right 1em

.page-header--brand-name
  margin 0
  font-size 1rem

.nav
  margin-left auto

.nav-link
  margin-left 1ch
  padding 1ch
  border solid 1px transparent
  border-radius 2px
  background none
  color $textColor
  text-decoration none
  cursor pointer

  &:hover, &.nuxt-link-active
    border-color $brandColor
    color $brandColor

.menu-button
  display none
  margin-left auto
  border none
  background none
  cursor pointer

.home-link, .background-mask
  display none

.close-button
  display none
  position absolute
  top 105%
  width 100%
  border none
  background none
  color white
  cursor pointer

@media only screen and (max-width: $mediumMax)
  .page-header--brand-link.nuxt-link-exact-active
    display none

  .menu-button
    display block

  .nav
    display none
    position fixed
    top 0
    left 0
    right 0
    border-bottom $border
    background $pageBackground
    box-shadow 0 0 100vmax 50vmin rgba($borderColor 50%)
    flex-direction column
    z-index 1

    &.show
      display flex

  .nav-link
    margin 0
    padding 1em
    border-top 1px solid $lightTextColor !important
    border-left none
    border-right none
    border-bottom none
    border-radius 0

    &:first-child
      border none

  .home-link
    display block

  .close-button
    display block

  .background-mask
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    background rgba($borderColor 20%)
    z-index -1

    &.show
      display block
</style>
