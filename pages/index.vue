<template>
  <div>
    <div class="hero-bg"></div>
    <Hero></Hero>
    <button class="text-button arrow-button scroll-cta" @click="scrollTo('feature-autoformat')">&downarrow;</button>
    <div ref="features" class="features">
      <div class="editor-wrapper">
        <PseudoEditor ref="editor" class="editor" :class="{ minimized: minimizeEditor }"></PseudoEditor>
      </div>

      <div class="feature-wrapper" id="feature-autoformat" data-start-line="5" data-end-line="15">
        <div class="narrow-container">
          <div class="feature autoformat">
            <button class="text-button arrow-button" @click="scrollTo('page-header')">&uparrow;</button>
            <h2>Automatic formatting</h2>
            <p>
              Don't bother with menus, toolbars or side panels. Superscript's plain text syntax will style your text as
              you type.
              All you have to do is write.
            </p>
            <nuxt-link class="button" to="/download" @click="clickedCTA('autoformat')">Download</nuxt-link>
            <button class="text-button arrow-button" @click="scrollTo('feature-autonumber')">&downarrow;</button>
          </div>
        </div>
      </div>

      <div class="feature-wrapper" id="feature-autonumber" data-start-line="15" data-end-line="41">
        <div class="narrow-container">
          <div class="feature autonumber">
            <button class="text-button arrow-button" @click="scrollTo('feature-autoformat')">&uparrow;</button>
            <h2>Automatic numbering</h2>
            <p>
              Pages and panels are numbering automatically as you type. Especially useful when inserting a page into the
              middle
              of your script.
            </p>
            <nuxt-link class="button" to="/download" @click="clickedCTA('autonumber')">Download</nuxt-link>
            <button class="text-button arrow-button" @click="scrollTo('feature-word-count')">&downarrow;</button>
          </div>
        </div>
      </div>

      <div class="feature-wrapper" id="feature-word-count" data-start-line="41" data-word-count="on"
        data-scroll-to="15">
        <div class="narrow-container">
          <div class="feature word-count">
            <button class="text-button arrow-button" @click="scrollTo('feature-autonumber')">&uparrow;</button>
            <h2>Spoken word count</h2>
            <p>
              Dialog/SFX is counted per speech bubble, per panel and per page, to ensure that your graphic novel is a
              <em>graphic</em> novel.
            </p>
            <nuxt-link class="button" to="/download" @click="clickedCTA('word-count')">Download</nuxt-link>
            <button class="text-button arrow-button" @click="scrollTo('spell-check-feature')">&downarrow;</button>
          </div>
        </div>
      </div>

      <div class="feature-wrapper" id="spell-check-feature" data-start-line="42" data-end-line="73">
        <div class="narrow-container">
          <div class="feature spell-check">
            <button class="text-button arrow-button" @click="scrollTo('feature-word-count')">&uparrow;</button>
            <h2>Spell check + Autocomplete</h2>
            <p>See your typos and get spelling suggestions, based on your own defined character names and fictional
              words.</p>
            <nuxt-link class="button" to="/download" @click="clickedCTA('spell-check')">Download</nuxt-link>
            <button class="text-button arrow-button" @click="scrollTo('feature-lettering')">&downarrow;</button>
          </div>
        </div>
      </div>

      <div class="feature-wrapper" id="feature-lettering" data-start-line="73" data-letterer-mode="on"
        data-scroll-to="46">
        <div class="narrow-container">
          <div class="feature lettering">
            <button class="text-button arrow-button" @click="scrollTo('spell-check-feature')">&uparrow;</button>
            <h2>Built for letterers, too</h2>
            <p>One-click copying, global shortcuts and automatic text transformation make copying &amp; pasting dialog a
              breeze.</p>
            <nuxt-link class="button" to="/download" @click="clickedCTA('lettering')">Download</nuxt-link>
            <button class="text-button arrow-button" @click="scrollTo('feature-images')">&downarrow;</button>
          </div>
        </div>
      </div>

      <div class="feature-wrapper" id="feature-images" data-start-line="73" data-end-line="104">
        <div class="narrow-container">
          <div class="feature images">
            <button class="text-button arrow-button" @click="scrollTo('feature-lettering')">&uparrow;</button>
            <h2>Embed images and comments</h2>
            <p>Insert images for your artist to reference and comments for your collaborators.</p>
            <nuxt-link class="button" to="/download" @click="clickedCTA('images')">Download</nuxt-link>
            <button class="text-button arrow-button" @click="scrollTo('feature-export')">&downarrow;</button>
          </div>
        </div>
      </div>

      <div class="feature-wrapper" id="feature-export" data-export-window="show">
        <div class="narrow-container">
          <div class="feature export">
            <button class="text-button arrow-button" @click="scrollTo('feature-images')">&uparrow;</button>
            <h2>Share in any format</h2>
            <p>Export to Word, PDF, Markdown, rich text and plain text.</p>
            <p>Print or share your masterpiece in a variety of common script formats, with numbered pages, panels and
              dialog.</p>
            <nuxt-link class="button" to="/download" @click="clickedCTA('export')">Download</nuxt-link>
            <button class="text-button arrow-button" @click="scrollTo('testimonials')">&downarrow;</button>
          </div>
        </div>
      </div>
    </div>
    <div class="below-features">
      <Testimonials id="testimonials"></Testimonials>
      <Backers></Backers>
    </div>
  </div>
</template>
<script setup lang="ts">
import debounce from 'lodash/debounce';
import scrollIntoView from 'scroll-into-view-if-needed';

import Backers from '../components/home/Backers.vue';
import Hero from '../components/home/Hero.vue';
import PseudoEditor from '../components/home/PseudoEditor.vue';
import Testimonials from '../components/home/Testimonials.vue';

const features = ref<HTMLElement>()
const editor = ref<typeof PseudoEditor>()
const minimizeEditor = ref(false)

const clickedCTA = (featureName: string) => {
  // @ts-ignore
  $ga.event({
    eventCategory: 'CTA',
    eventAction: 'clicked homepage feature CTA',
    eventLabel: featureName
  })
}

const arrowPress = (event: KeyboardEvent) => {
  switch (event.key) {
    case 'ArrowUp':
      document.documentElement.scrollTop -= window.innerHeight
      document.body.scrollTop -= window.innerHeight
      event.preventDefault()
      break
    case 'ArrowDown':
      document.documentElement.scrollTop += window.innerHeight
      document.body.scrollTop += window.innerHeight
      event.preventDefault()
  }
}

const scroll = () => {
  if (features) {
    const pageScrollTop =
      document.documentElement.scrollTop || document.body.scrollTop

    minimizeEditor.value = pageScrollTop > (features.value?.offsetTop ?? 0)
  }

  scrollStopped()
}

const scrollStopped = debounce(async () => {
  if (editor.value && features.value) {
    const pageScrollTop =
      document.documentElement.scrollTop || document.body.scrollTop

    const children = Array.from(features.value.children).slice(
      1
    ) as HTMLElement[]

    let currentFeature: HTMLElement | undefined

    for (const feature of children) {
      const top = feature.offsetTop + features.value.offsetTop
      if (Math.abs(pageScrollTop - top) < feature.offsetHeight / 2) {
        currentFeature = feature
      }
    }

    if (currentFeature) {
      if (currentFeature.dataset.startLine) {
        if (currentFeature.dataset.endLine) {
          typeLines(
            parseInt(currentFeature.dataset.startLine, 10),
            parseInt(currentFeature.dataset.endLine, 10)
          )
        } else {
          await typeLines(parseInt(currentFeature.dataset.startLine, 10))
        }
      }

      if (currentFeature.dataset.scrollTo) {
        editor.value.scrollTo(
          parseInt(currentFeature.dataset.scrollTo, 10)
        )
      }

      editor.value.toggleWordCount(
        currentFeature.dataset.wordCount === 'on'
      )

      editor.value.toggleLettererMode(
        currentFeature.dataset.lettererMode === 'on'
      )

      editor.value.toggleExportWindow(
        currentFeature.dataset.exportWindow === 'show'
      )

      scrollIntoView(currentFeature, {
        behavior: 'smooth'
      })
    }
  }
}, 250)

const scrollTo = (id: string) => {
  const target = document.getElementById(id)

  if (target) {
    scrollIntoView(target, {
      behavior: 'smooth',
      block: 'start'
    })
  }
}

const typeLines = debounce((start: number, end?: number) => {
  return editor.value?.typeLines(start, end)
}, 600)

onMounted(() => {
  if (import.meta.client) {
    nextTick(scroll)
    document.addEventListener('scroll', scroll, { passive: true })
    window.addEventListener('keydown', arrowPress)
    window.addEventListener('resize', scroll, { passive: true })
  }
})

onBeforeUnmount(() => {
  // @ts-ignore
  if (import.meta.client) {
    document.removeEventListener('scroll', scroll)
    window.removeEventListener('keydown', arrowPress)
    window.removeEventListener('resize', scroll)
  }
})
</script>
<style lang="stylus">
:root
  overflow-x hidden
</style>
<style lang="stylus" scoped>
@import '../assets/css/vars'

.hero-bg
  position fixed
  top 0
  right 0
  width 100vw
  height 100vh
  background url(/images/hero-bg.jpg)
  background-position center center
  background-size cover
  z-index -1

.features
  position relative
  height 750vh

.editor-wrapper
  position sticky !important
  top 0
  height 100vh
  width 100%
  overflow hidden
  perspective 1000px
  z-index 1
  pointer-events none

.editor
  height 100vh
  transition transform .5s

  &.minimized
    transform scale(.75) translate(55%, 5%) rotateY(-2deg)

.feature-wrapper
  position relative
  overflow hidden

  &:nth-child(2)
    margin-top -50vh

  &:nth-child(2)
  &:nth-child(8)
    background rgba(#3382BA .7)
    color white

  &:nth-child(3)
  &:nth-child(9)
    background rgba(#379BAD .7)
    color white

  &:nth-child(4)
  &:nth-child(10)
    background rgba(#F7E7BB .7)

  &:nth-child(6)
  &:nth-child(11)
    background rgba(#B64D5B .7)
    color white

  &:nth-child(7)
  &:nth-child(12)
    background rgba($brandColor .7)
    color white

.feature
  display flex
  position relative
  height 100vh
  width 45%
  flex-direction column
  justify-content center

  > h2
    margin 0
    font-size 2em

  > p
    margin 1ex 0

  > .button
    margin-top 1em
    color inherit

    &:hover
      border-color white
      background white
      color $textColor

.arrow-button
  width 100%
  height 50px
  color inherit
  outline none
  transition padding .2s
  opacity .5

  &:hover
    opacity 1

  &:first-child
    margin-bottom 50px
    padding 50px 0 0

    &:hover
      padding 40px 0 10px

  &:last-child
    margin-top 50px
    padding 0 0 10px

    &:hover
      padding 10px 0 0

.arrow-button.scroll-cta
  position absolute
  bottom 0
  height auto
  margin-bottom 0 !important
  padding 0 0 1ex
  font-size 2em
  font-weight bold
  color $brandSecondaryColor
  opacity 1
  z-index 10
  transition padding .2s

  &:hover
    padding 1ex 0 0

.spotlight-wrapper
  position relative
  display flex
  height 100vh
  background #F7DB66
  align-items center
  box-shadow 0 0 2em rgba(black .2)
  z-index 2
  perspective 1000px

.spotlight
  grid-area spotlight
  position relative
  margin-bottom 50px
  padding 0

.spotlight-text
  margin 0
  padding 1em
  text-align center

  > h2
    margin 10px 0 0
    font-size 2em
    line-height 1

.spotlight-button
  margin 1em
  color white

  > svg
    margin-left 1ch
    fill white

.spotlight-image-link
  display block
  position relative
  position absolute
  top 10vh
  left 50vw

.spotlight-img
  display block
  max-height 80vh
  box-shadow 5px 15px 25px rgba(black .5)
  transform rotateY(-2deg)

.below-features
  padding 50px 0
  background $pageBackground

@media only screen and (max-width: 500px)
  .feature
    line-height 1.3

    > h2
      font-size 1.4em

  .arrow-button
    margin 1em 0 !important

  .spotlight-header
    font-size 1.5rem !important

  .spotlight-details
    display none

  .spotlight-image-link
    top 20vh

  .spotlight-img
    max-height 60vh

@media only screen and (min-width: 1200px)
  .feature-wrapper > .narrow-container
    position relative

    &::before
      content ''
      display block
      position absolute
      top 50px
      left -50px
      right -50px
      bottom 50px
      border $border
      box-shadow 0 0 0 100vmax rgba(black .3)
</style>
