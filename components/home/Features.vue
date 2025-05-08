<template>
  <section class="narrow-container features">
    <pseudo-editor class="features-editor"></pseudo-editor>
    <div class="panels">
      <div class="panel editor-panel editor1"></div>

      <div class="panel spotlight">
        <div class="spotlight-text">
          <small>August 2018 Comic Spotlight</small>
          <h2>7 Shells: A Bad Hand</h2>
          by Jeffrey L. Wilson and Amrit Birdi
        </div>
        <a class="spotlight-image-link" href="https://www.comixology.com/7-Shells-0/digital-comic/663431">
          <img class="spotlight-img" src="/images/august-featured-comic.jpg" alt="Featured Comic">
        </a>
        <a class="spotlight-text-link" href="https://www.comixology.com/7-Shells-0/digital-comic/663431">
          Buy it now
        </a>
      </div>

      <div class="panel panel-heading">
        <h2>Features</h2>
      </div>

      <div class="panel text-panel autoformat">
        <h3>Format as you type</h3>
        <p>Don't bother with menus, toolbars or side panels. Superscript's plain text syntax will format your script as you type.
          All you have to do is write.</p>
      </div>

      <div class="panel text-panel autonumber">
        <h3>Automatic numbering</h3>
        <p>Pages and panels are numbering automatically as you type. Especially useful when inserting a page into the middle
          of your script.</p>
      </div>

      <div class="panel text-panel word-count">
        <h3>Spoken word count</h3>
        <p>Dialog/SFX is counted per speech bubble, per panel and per page, to ensure that your graphic novel is a
          <em>graphic</em> novel.</p>
      </div>

      <div class="panel editor-panel editor2"></div>

      <div class="panel text-panel spell-check">
        <h3>Spell check</h3>
        <p>Shows your typos and suggest spellings, without bothering you about your fictional character names and other words.</p>
      </div>

      <div class="panel text-panel autocomplete">
        <h3>Autocomplete</h3>
        <p>You'll see suggestions for your character names and fictional words as you type, so you don't need to worry about
          spelling things multiple ways by accident.</p>
      </div>

      <div class="panel text-panel lettering">
        <h3>Built for letterers, too</h3>
        <p>One-click copying, global shortcuts and automatic text transformation make copying &amp; pasting dialog a breeze.</p>
      </div>

      <div class="panel editor-panel editor3"></div>

      <div class="panel text-panel images">
        <h3>Embed images and comments</h3>
        <p>Insert images for your artist to reference and comments for your collaborators.</p>
      </div>

      <div class="panel text-panel export">
        <h3>Share in any format</h3>
        <p>Export to Word, PDF, Markdown, rich text and plain text.</p>
        <p>Print or share your masterpiece in a variety of common script formats, with numbered pages, panels and dialog.</p>
      </div>

      <div class="panel editor-panel editor4"></div>

      <div class="panel text-panel bookmarks">
        <h3>Bookmarks</h3>
        <p>Bookmark pages in your script to return to later.</p>
      </div>

      <div class="panel text-panel cross-platform">
        <h3>Cross-platform</h3>
        <p><nuxt-link to="/download">Available for Mac and PC.</nuxt-link></p>
      </div>

      <div class="panel editor-panel editor5"></div>
      <div class="panel editor-panel editor6"></div>
    </div>
  </section>
</template>
<style lang="stylus" scoped>
@import '../../assets/css/vars'

h3
  margin-bottom 0

.features
  position relative

.features-editor
  position absolute !important
  width auto
  top 1.5em
  left 1.5em
  right 1.5em
  bottom 2em
  z-index -1

.panels
  padding 0
  list-style none
  grid-template-areas \
    'editor1        editor1         editor1' \
    'spotlight      spotlight       spotlight' \
    'heading        heading         heading' \
    'editor2        autoformat      autoformat' \
    'autonumber     editor3         word-count' \
    'export         export          lettering' \
    'editor4        autocomplete    editor5' \
    'images         bookmarks       editor5' \
    'editor6        spell-check     cross-platform'

.panel
  padding 0 1em
  outline solid .7em $pageBackground

.text-panel
  background $pageBackground

.editor-panel
  min-height 200px

.editor1
  grid-area editor1
  position relative
  height 1350px
  border-top none
  border-left none
  border-right none

  &::after
    content ''
    display block
    position absolute
    bottom 0
    left 0
    right 0
    height 200px
    border-top $border
    border-left $border
    border-right $border
    border-top-left-radius 2px
    border-top-right-radius 2px
    background lighten($brandSecondaryColor, 50%)
    z-index -2

.editor2
  grid-area editor2
  background #f32d3254

.editor3
  grid-area editor3
  background #42ba3d54

.editor4
  grid-area editor4
  background rgba(lighten($brandSecondaryColor, 20%) 40%)

.editor5
  grid-area editor5
  background rgba(lighten($brandColor, 30%) 25%)

.editor6
  grid-area editor6
  background #fffd5b4a

.autonumber
  grid-area autonumber

.autoformat
  grid-area autoformat

.word-count
  grid-area word-count

.spell-check
  grid-area spell-check

.autocomplete
  grid-area autocomplete

.lettering
  grid-area lettering

.images
  grid-area images

.export
  grid-area export

.bookmarks
  grid-area bookmarks

.cross-platform
  grid-area cross-platform

.spotlight
  grid-area spotlight
  position relative
  padding 0
  border none
  background black
  text-align center
  color white
  box-shadow 800px 0 black, -800px 0 black,  1600px 0 black, -1600px 0 black

  &::before
  &::after
    content ''
    display block
    position absolute
    width 1em
    top 0
    bottom 0
    background black

  &::before
    left -1em

  &::after
    right -1em

.spotlight-text
  margin 0
  padding 1em
  text-align center
  font-weight bold

  > h2
    margin 10px 0 0
    font-size 2em
    line-height 1

.spotlight-text-link
  display block
  position relative
  padding 1em
  color white

.spotlight-image-link
  display block
  position relative

.spotlight-img
  display block
  width 100%

@media only screen and (max-width: $mediumMax)
  .panels
    grid-template-areas \
      'editor1        editor1' \
      'spotlight      spotlight' \
      'heading        heading' \
      'autonumber     autoformat' \
      'editor2        word-count' \
      'lettering      export' \
      'autocomplete   editor3' \
      'spell-check    spell-check' \
      'images         bookmarks' \
      'editor4        cross-platform'

  .editor5
  .editor6
    display none

@media only screen and (max-width: $smallMax)
  .panels
    grid-template-areas \
      'editor1' \
      'spotlight' \
      'heading' \
      'autonumber' \
      'autoformat' \
      'editor2' \
      'word-count' \
      'export' \
      'lettering' \
      'autocomplete' \
      'editor3' \
      'spell-check' \
      'images' \
      'bookmarks' \
      'cross-platform' \
      'editor4'
</style>
