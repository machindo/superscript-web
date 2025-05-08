<template>
  <div class="pricing-page narrow-container">
    <div class="panels">
      <div class="panel panel-heading">
        <h1>Features</h1>
      </div>
      <div class="panel">
        <p>This page covers Superscript's key features. To learn more about them, please dive into our
          <nuxt-link to="/docs">extensive documentation</nuxt-link>.
        </p>
      </div>
      <div class="panel feature-comparison">
        <h2>Feature comparison</h2>
        <p>How does Superscript stack up against its closest competitors?</p>
        <table>
          <thead>
            <tr>
              <th class="feature-heading"></th>
              <th>
                <SuperscriptLogo class="page-header--logo" height="45" width="33" />
                <br>
                <span class="brand-name">Superscript</span>
              </th>
              <th>
                <img src="/images/scrivener-logo.png" alt="Scrivener" width="150">
                <br>
              </th>
              <th>
                <img src="/images/celtx-logo.png" alt="Celtx" width="100">
                <br>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th class="feature-heading">Desktop app</th>
              <td>
                <small>macOS
                  <br>Windows
                  <br>Linux
                </small>
              </td>
              <td>
                <small>macOS
                  <br>Windows
                </small>
              </td>
              <td>
                <small>Online-only</small>
              </td>
            </tr>
            <tr>
              <th class="feature-heading">Context-aware formatting</th>
              <td>&check;</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th class="feature-heading">Automatic page and panel numbering</th>
              <td>&check;</td>
              <td>
                <small data-mobile-text="Partly">Only during export</small>
              </td>
              <td>&check;</td>
            </tr>
            <tr>
              <th class="feature-heading">Automatic panel count per page</th>
              <td>&check;</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th class="feature-heading">Automatic dialog numbering</th>
              <td>&check;</td>
              <td></td>
              <td>&check;</td>
            </tr>
            <tr>
              <th class="feature-heading">Automatic page breaks</th>
              <td>&check;</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th class="feature-heading">Multi-page splashes &amp; multi-panel sequence headings</th>
              <td>&check;</td>
              <td>&check;</td>
              <td></td>
            </tr>
            <tr>
              <th class="feature-heading">Spoken word count</th>
              <td>&check;</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th class="feature-heading">Name autocomplete</th>
              <td>
                <small data-mobile-text="✓">In character headings, panel descriptions, and dialog</small>
              </td>
              <td>
                <small data-mobile-text="Partly">Only in character headings</small>
              </td>
              <td>
                <small data-mobile-text="Partly">Only in character headings</small>
              </td>
            </tr>
            <tr>
              <th class="feature-heading">Spell check</th>
              <td>&check;</td>
              <td>&check;</td>
              <td>&check;</td>
            </tr>
            <tr>
              <th class="feature-heading">Custom script-level vocabulary</th>
              <td>
                <small data-mobile-text="✓">Yes, plus autocomplete</small>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th class="feature-heading">1-click dialog copy+paste</th>
              <td>&check;</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th class="feature-heading">Comments</th>
              <td>&check;</td>
              <td>&check;</td>
              <td>&check;</td>
            </tr>
            <tr>
              <th class="feature-heading">Embed images</th>
              <td>&check;</td>
              <td>&check;</td>
              <td></td>
            </tr>
            <tr>
              <th class="feature-heading">Bullet and numbered lists</th>
              <td>&check;</td>
              <td>&check;</td>
              <td></td>
            </tr>
            <tr>
              <th class="feature-heading">Export/print with customizable formatting</th>
              <td>&check;</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th class="feature-heading">Export as PDF</th>
              <td>&check;</td>
              <td></td>
              <td>&check;</td>
            </tr>
            <tr>
              <th class="feature-heading">&nbsp;&hellip; as Word doc</th>
              <td>&check;</td>
              <td>&check;</td>
              <td></td>
            </tr>
            <tr>
              <th class="feature-heading">&nbsp;&hellip; as Markdown</th>
              <td>&check;</td>
              <td>&check;</td>
              <td></td>
            </tr>
            <tr>
              <th class="feature-heading">&nbsp;&hellip; as Plain text</th>
              <td>&check;</td>
              <td>&check;</td>
              <td>
                <small data-mobile-text="Partly">Exports all but headings, which seems pointless to us</small>
              </td>
            </tr>
            <tr>
              <th class="feature-heading">Loaded with features unrelated to writing comic scripts</th>
              <td></td>
              <td>&check;</td>
              <td>&check;</td>
            </tr>
            <tr>
              <th class="feature-heading">Price</th>
              <td>
                <strong>FREE</strong>
              </td>
              <td>
                <strong>$59.99</strong>
              </td>
              <td>
                <strong>$14.99</strong>
                <br>
                <small>per month</small>
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          <small>Note: Scrivener and Celtx are both excellent products. If you're interested in screenwriting, you
            should definitely give them both a try.</small>
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import SuperscriptLogo from '../components/SuperscriptLogo.vue'

useSeoMeta({
  title: 'Superscript Features'
})
</script>
<style lang="stylus" scoped>
@import '../assets/css/vars'

.panels
  grid-template-areas \
    'heading panel' \
    'feature-comparison feature-comparison'
  grid-template-columns 1fr 1fr

  @media only screen and (max-width: $mediumMax)
    grid-template-areas \
      'heading' \
      'panel' \
      'feature-comparison'
    grid-template-columns 1fr

.panel
  text-align center

.feature-comparison
  grid-area feature-comparison

table
  table-layout fixed
  border-spacing 0

thead th
  position sticky
  top 0
  background rgba($pageBackground .9)
  vertical-align bottom

  > img
    max-width 100%

tbody
  tr
    &:nth-child(odd)
      background rgba($brandColor .06)

  th, td
    &:nth-child(even)
      background rgba($brandColor .03)

  tr:last-child
    background none

th, td
  padding 1ch

  &:first-child
    width 40%

td
  text-align center
  line-height 1

  > .button
    min-width 0
    width 100%

.feature-heading
  text-align left
  font-weight 500

@media only screen and (max-width: $mediumMax)
  .feature-comparison
    padding 0

    h2
      padding 0 1ch

@media only screen and (max-width: $smallMax)
  .feature-comparison
    border none

  th
    font-size (14/18)rem

    &:first-child
      width 25%

  // Replace text with attribute content
  [data-mobile-text]
    font-size 0
    color transparent

    &::before
      content attr(data-mobile-text)
      font-size 1rem
      color $textColor
</style>
