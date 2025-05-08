<template>
  <div class="docs-page">
    <div class="page-nav">
      <NuxtLink class="page-nav--link" :to="{ hash: '#intro' }">Introduction</NuxtLink>
      <NuxtLink class="page-nav--link" :to="{ hash: '#front-matter' }">Front matter</NuxtLink>
      <NuxtLink class="page-nav--link" :to="{ hash: '#page-headings' }">Page headings</NuxtLink>
      <NuxtLink class="page-nav--link" :to="{ hash: '#panel-headings' }">Panel headings</NuxtLink>
      <NuxtLink class="page-nav--link" :to="{ hash: '#automatic-numbering' }">Automatic numbering</NuxtLink>
      <NuxtLink class="page-nav--link" :to="{ hash: '#character-headings' }">Character headings</NuxtLink>
      <NuxtLink class="page-nav--link" :to="{ hash: '#dialog' }">Dialog</NuxtLink>
      <NuxtLink class="page-nav--link" :to="{ hash: '#panel-count' }">Panel count</NuxtLink>
      <NuxtLink class="page-nav--link" :to="{ hash: '#panel-description' }">Panel description</NuxtLink>
      <NuxtLink class="page-nav--link" :to="{ hash: '#lists' }">Lists</NuxtLink>
      <NuxtLink class="page-nav--link" :to="{ hash: '#supporting-sections' }">Supporting Sections</NuxtLink>
      <NuxtLink class="page-nav--link" :to="{ hash: '#spoken-word-count' }">Spoken word count</NuxtLink>
      <NuxtLink class="page-nav--link" :to="{ hash: '#characters-and-vocabulary' }">
        Character and vocabulary autocompletion
      </NuxtLink>
      <NuxtLink class="page-nav--link" :to="{ hash: '#bookmarks' }">Bookmarks</NuxtLink>
    </div>
    <div class="docs-content">
      <section class="docs-section" id="intro">
        <div class="docs-details">
          <div class="panel panel-heading">
            <h1>Learn</h1>
          </div>
          <p>
            This documentation is mostly complete. If you have questions that aren't answered here, please email us at
            <a href="mailto:support@superscript.app">support@superscript.app</a>.
          </p>

          <p>Get started by downloading an example script.</p>
          <ul>
            <li v-for="example of examples" :key="example.title">
              <a :href="`examples/${example.filename}`" rel="nofollow">{{ example.title
                }}</a> by
              {{ example.writer }}
              <small v-if="example.copyright">
                &copy; {{ example.copyright }}
              </small>
              <template v-if="example.linkHref && example.linkText">
                — <a :href="example.linkHref">{{ example.linkText }}</a>
              </template>
            </li>
          </ul>
          <small>These scripts are available for personal use only. No rights are given to share or sell any these
            scripts in
            either its original or altered form without the express permission of its owner.</small>
        </div>
        <div class="docs-example pseudo-editor--content"></div>
      </section>
      <section class="docs-section" id="front-matter">
        <div class="docs-details">
          <h2>Front matter</h2>
          <p>
            Everything above the first page of the document is front matter: metadata containing title,
            author, issue #, contact info, etc.
          </p>
          <ul>
            <li>The first line of the document is assumed to be the title of the script.</li>
            <li><code>Written by JP Silva</code> or simply <code>by JP Silva</code> is a shortcut for <code>writer: JP
          Silva</code></li>
            <li>Values can be entered right after the key or indented on the following lines.</li>
            <li>You can see what variables are available by pressing the <kbd>Ctrl</kbd> + <kbd>Space</kbd> keys on a
              blank
              line</li>
          </ul>

          All the variable keys that can be set in Front matter:
          <ul>
            <li>address</li>
            <li>characters (see <a href="#characters-and-vocabulary">Characters and vocabulary</a>)</li>
            <li>copyright</li>
            <li>draft</li>
            <li>email</li>
            <li>issue</li>
            <li>phone</li>
            <li>series</li>
            <li>title</li>
            <li>vocabulary (see <a href="#characters-and-vocabulary">Characters and vocabulary</a>)</li>
            <li>volume</li>
            <li>writer</li>
          </ul>
        </div>
        <div class="docs-example pseudo-editor--content">
          <div class="pseudo-editor--pages">
            <p class="title">Justin Wrote a Comic Book</p>
            <p>by JP Silva</p>
            <p>&nbsp;</p>
            <p>issue: 1</p>
            <p>draft: 2</p>
            <p>phone: 617-555-0100</p>
            <p>address:</p>
            <p>&nbsp;&nbsp;100 Food Court</p>
            <p class="last-line-of-page">&nbsp;&nbsp;Lexicon, MO 12345</p>
            <h1>PAGE 1</h1>
            <p>&hellip;</p>
          </div>
        </div>
      </section>
      <section class="docs-section" id="page-headings">
        <div class="docs-details">
          <h2>Page headings</h2>
          <p>Lines containing just <code>PAGE</code> or <code>PAGES</code>, followed by a number or a range of numbers,
            are treated as page headings. These headings are automatically set in bold, capital letters, and a page
            break
            is inserted above.</p>

          <p>When you print or export your script, page headings will be converted into words to follow
            convention. E.g, <code>PAGE 12</code> in Superscript will become <code>TWELVE</code> in PDF.</p>
        </div>
        <div class="docs-example pseudo-editor--content">
          <div class="pseudo-editor--pages">
            <h1 class="last-line-of-page">PAGE 1</h1>

            <h1 class="last-line-of-page">PAGE 2</h1>

            <h1>PAGES 3-4</h1>
          </div>
        </div>
      </section>
      <section class="docs-section" id="panel-headings">
        <div class="docs-details">
          <h2>Panel headings</h2>
          <p>Lines containing just <code>Panel</code> or <code>Panels</code>, followed by a number or a range of
            numbers,
            are treated as panel headings.</p>
        </div>
        <div class="docs-example pseudo-editor--content">
          <div class="pseudo-editor--pages">
            <h1>PAGE 1</h1>

            <h2>Panel 1</h2>

            <h2>Panels 2-5</h2>

            <h2 class="last-line-of-page">Panel 6</h2>


            <h1>PAGE 2</h1>

            <h2>Panel 1</h2>

            <h2>Panel 2</h2>
          </div>
        </div>
      </section>
      <section class="docs-section">
        <div class="docs-details" id="automatic-numbering">
          <h2>Automatic numbering</h2>
          <p>Page and panel headings are automatically numbered for your convenience. Adding or removing
            page or panel headings will automatically recalculate the heading numbers following them.</p>

          <ul>
            <li>Insert a page: <code>page</code> becomes "PAGE 1". The next <code>page</code> will become "PAGE 2" and
              so on.
            </li>
            <li>Insert a range of pages: <code>5 pages</code> becomes "PAGES 2-6".</li>
            <li><code>pages 5-9</code> will automatically be renumbered when you add or remove pages before it, keeping
              the
              same range between the numbers.</li>
          </ul>

          <p>Page and panel ranges are great for writing splash pages, panel sequences and for writing
            outlines early on in the script.</p>

          <p>The same shortcuts work for <code>panel</code> as well. Panel headings will begin with "1" at the start
            of each page.</p>

          <p class="pro-tip">
            Pro tip: for an even shorter shortcut, type an uppercase "P" and hit enter to create a page heading. Type a
            lowercase "p" and hit enter to create a panel heading.
          </p>

          <p class="pro-tip">
            An even proier tip: for whatever reason, you might want to specify a page or panel number and not allow it
            to be
            set automatically.
            Suppose you know what you want on page 5, but you haven't written pages 2-4 yet. Just add a period after the
            number. Type
            <code>PAGE 5.</code> and autonumbering will leave the page number alone and begin numbering pages again with
            the
            following heading (next would be "6").
            This period will not be exported or printed.
          </p>
        </div>
        <div class="docs-example pseudo-editor--content">
          <p>
            User input
          </p>
          <div class="pseudo-editor--pages">
            <p class="first-line-of-page">
              page

              panel
              panel
              4 panels
              panel

              2page

              panel
              panel
            </p>
          </div>
          <p>
            Becomes
          </p>
          <div class="pseudo-editor--pages">
            <h1>PAGE 1</h1>

            <h2>Panel 1</h2>
            <h2>Panel 2</h2>
            <h2>Panels 3-6</h2>
            <h2 class="last-line-of-page">Panel 7</h2>

            <h1>PAGES 2-3</h1>

            <h2>Panel 1</h2>
            <h2>Panel 2</h2>
          </div>
        </div>
      </section>
      <section class="docs-section" id="character-headings">
        <div class="docs-details">
          <h2>Character headings</h2>
          <p>
            Lines ending in a colon — <code>:</code> — are treated as character headings and automatically set in
            all-caps. Parenthesized — <code>(WHISPERING)</code> — or bracketed — <code>[WHISPERING]</code> — words may
            appear
            after the colon. Anything else after the colon will make the line treated as plain
            descriptive text.
          </p>
          <p>
            Character headings are automatically numbered when exporting or using letterer mode, restarting with number
            1
            for each page. Generally, each new word bubble should have its own character heading, even if the same
            character
            is speaking in two consecutive word bubbles.
          </p>
          <p class="pro-tip">
            Pro tip: type <code>:</code> and hit enter to reuse the previous character name. Type <code>::</code> to
            reuse
            the character name before that, and so on. Parentheticals are not duplicated from previous character
            headings,
            just the name. You may add a parenthetical while using the shortcut: <code>:: (shouting)</code>.
          </p>
        </div>
        <div class="docs-example pseudo-editor--content">
          <div class="pseudo-editor--pages">
            <p class="first-line-of-page">
              [CAPTION]:
              &nbsp;&nbsp;New York, 1954

              [SFX]:
              &nbsp;&nbsp;CRASH!

              MAN TRAPPED UNDER A FALLEN TELEPHONE POLE: (SHOUTING)
              &nbsp;&nbsp;Heeeellllp!!!

              HERO:
              &nbsp;&nbsp;Have no need to fear!

              HERO:
              &nbsp;&nbsp;For <b>I</b> am here.

              Hero's POV: a sign that reads "This is not a character heading".
            </p>
          </div>
        </div>
      </section>
      <section class="docs-section" id="dialog">
        <div class="docs-details">
          <h2>Dialog</h2>
          <p>Lines indented with two spaces or a tab are treated as dialog. This also includes titles,
            captions, sounds effect and narration.</p>
        </div>
        <div class="docs-example pseudo-editor--content">
          <div class="pseudo-editor--pages">
            <p class="first-line-of-page">
              HERO:
              &nbsp;&nbsp;Have no need to fear!
            </p>
          </div>
        </div>
      </section>
      <section class="docs-section" id="panel-count">
        <div class="docs-details">
          <h2>Panel count</h2>
          <p>
            A panel count is automatically inserted next to the page header when exporting and printing.
            This may be overridden by placing a parenthetical line following the page heading.
          </p>
        </div>
        <div class="docs-example pseudo-editor--content">
          <p>
            In Superscript:
          </p>
          <div class="pseudo-editor--pages">
            <h1>PAGE 1</h1>
            <p>&nbsp;</p>
            <h2>Panels 1-3</h2>
            <p>&hellip;<br><br></p>
            <h2>Panel 4</h2>
            <p>&hellip;</p>
            <p class="last-line-of-page"></p>
            <h1>PAGE 2</h1>
            <p>&hellip;</p>
            <p class="last-line-of-page"></p>
            <h1>PAGE 3</h1>
            <p>(1 small, centered panel)<br><br></p>
            <h2>Panel 1</h2>
            <p>&hellip;</p>
          </div>
          <p>
            When printed:
          </p>
          <div class="pseudo-editor--pages">
            <h1>PAGE 1<small> (4 panels)</small></h1>
            <p>&nbsp;</p>
            <h2>Panels 1-3</h2>
            <p>&hellip;<br><br></p>

            <h2>Panel 4</h2>
            <p class="last-line-of-page">&hellip;<br></p>

            <h1>PAGE 2<small> (splash)</small></h1>
            <p class="last-line-of-page">&hellip;<br></p>

            <h1>PAGE 3<small> (1 small, centered panel)</small></h1>
            <p>&nbsp;</p>
            <h2>Panel 1</h2>
            <p>&hellip;<br></p>
          </div>
        </div>
      </section>
      <section class="docs-section" id="panel-description">
        <div class="docs-details">
          <h2>Panel description</h2>
          <p>
            All other text is considered descriptive text and left unstyled.
            Typically, this kind of content is put after panel headings and before characters and dialog, but it could
            be placed anywhere in the script: just below the page heading, between dialog blocks, etc.
          </p>
        </div>
        <div class="docs-example pseudo-editor--content">
          <div class="pseudo-editor--pages">
            <p class="first-line-of-page">&nbsp;</p>
            <h2>Panel 1</h2>
            <p>With her cape flapping in the wind, she stands atop the skyscraper, surveying the rotting city below.</p>
          </div>
        </div>
      </section>
      <section class="docs-section" id="lists">
        <div class="docs-details">
          <h2>Lists</h2>
          <p>
            You can insert lists either by using the format toolbar in the View menu or with basic keystrokes.
            Begin a line with an asterisk (<code>*</code>) and a space to create a bulleted list item.
            Begin a line with a numeral, a dot and a space to create an ordered list item. Indent lines with
            the <kbd>Tab</kbd> key for nested lists. Outdent by pressing <kbd>Shift+Tab</kbd>.
          </p>
        </div>
        <div class="docs-example pseudo-editor--content">
          <p>
            User input
          </p>
          <div class="pseudo-editor--pages">
            <p>
              Character flaws
              * Greed
              * Pride
              * Anger
              * Lust
              * Envy
              * Gluttony
              * Sloth

              Outline
              1. Act I
              &nbsp;&nbsp;1. Roberto is a simple, blue-collar oil driller on Mars
              &nbsp;&nbsp;2. Roberto find way to make money quick
              2. Act II
              3. Act III
              4. Act IV
            </p>
          </div>
          <p>
            Becomes
          </p>
          <div class="pseudo-editor--pages">
            <p>Character flaws</p>
            <ul>
              <li>Greed</li>
              <li>Pride</li>
              <li>Anger</li>
              <li>Lust</li>
              <li>Envy</li>
              <li>Gluttony</li>
              <li>Sloth</li>
            </ul>
            <p><br><br>Outline</p>
            <ol>
              <li>Act I<ol>
                  <li>Roberto is a simple, blue-collar oil driller on Mars</li>
                  <li>Roberto find way to make money quick</li>
                </ol>
              </li>
              <li>Act II</li>
              <li>Act III</li>
              <li>Act IV</li>
            </ol>
          </div>
        </div>
      </section>
      <section class="docs-section" id="supporting-sections">
        <div class="docs-details">
          <h2>Supporting Sections</h2>
          <p>
            Use Markdown-style headings to add additional, non-script pages to your document to accompany the script.
            These can be used for outlines, summary, notes to the artist, act breaks, or anything else you find useful.
          </p>
          <p>
            Start a line with 1-6 hash marks (#) for different heading levels. (1 is the biggest. 6 is the smallest).
            A heading with 1 hash is used as a page heading, which begins the supporting page. Subheadings (2-6 hashes)
            are
            <strong>only</strong> allowed on these non-script pages. Likewise, panel headings,
            character headings and dialog are <strong>not</strong> allowed on non-script pages.
          </p>
          <p>
            The hash marks are removed when printing and exporting.
          </p>
        </div>
        <div class="docs-example pseudo-editor--content">
          <p>
            User input
          </p>
          <div class="pseudo-editor--pages">
            <p>
              # Notes
              ## Random ideas
              ## Inspiration
              ### Old movie references
              ### Comic references

              # Outline
            </p>
          </div>
          <p>
            Becomes
          </p>
          <div class="pseudo-editor--pages">
            <h1># Notes</h1>
            <h2>## Random ideas</h2>
            <h2>## Inspiration</h2>
            <h3 class="markdown-header-3">### Old movie references</h3>
            <h3 class="last-line-of-page markdown-header-3">### Comic references</h3>

            <h1># Outline</h1>
          </div>
        </div>
      </section>
      <section class="docs-section" id="spoken-word-count">
        <div class="docs-details">
          <h2>Spoken word count</h2>
          <p>
            All words in dialog sections are tallied and displayed on the corresponding character,
            panel and pages headings. To view the word count, select
            "Toggle Dialog View Count" from the "View" menu.
          </p>
          <p>
            You can show and set limits for word count per page and per bubble by clicking "Dialog Word
            Count Settings" in the "View menu".
          </p>
        </div>
        <div class="docs-example pseudo-editor--content">
          <div class="pseudo-editor--pages show-word-count">
            <h1 data-count="29">PAGE 1</h1>
            <p>&nbsp;</p>
            <h2 data-count="16">Panel 1</h2>
            <p>&nbsp;</p>
            <h3 data-count="8">BENEDICK:</h3>
            <blockquote>Lady Beatrice, have you wept all this while?</blockquote>
            <p>&nbsp;</p>
            <h3 data-count="8">BEATRICE:</h3>
            <blockquote>Yea, and I will weep a while longer.</blockquote>
            <p>&nbsp;</p>
            <h2 data-count="13">Panel 2</h2>
            <p>&nbsp;</p>
            <h3 data-count="5">BENEDICK:</h3>
            <blockquote>I will not desire that.</blockquote>
            <p>&nbsp;</p>
            <h3 data-count="8">BEATRICE:</h3>
            <blockquote>You have no reason, I do it freely.</blockquote>
          </div>
        </div>
      </section>
      <section class="docs-section" id="characters-and-vocabulary">
        <div class="docs-details">
          <h2>Character and vocabulary autocompletion</h2>
          <p>
            Setting the <code>characters</code> and/or <code>vocabulary</code> front matter variables will give all the
            entries special powers.
          </p>

          <p>You can add <code>klaatu</code> to the <code>vocabulary</code> variable and later, when you type
            <code>klaatu</code>, it won't be treated as a
            misspelled word. What's more: typing <code>kla</code> will make suggestions pop up to autocomplete the word.
          </p>

          <p>Not every script needs these, of course, but they should be immensely helpful for sci-fi and
            fantasy scripts, where spelling strange words the same way each time can be a challenge.</p>

          <p>You can see all available words by pressing down the <kbd>Ctrl</kbd> + <kbd>Space</kbd> keys anywhere in
            your
            script.</p>

          <p class="pro-tip">
            Pro tip: you can add any word or phrase in your script to either the character or vocabulary list
            by selecting it, right clicking and selecting "Add to character list" or "Add to vocabulary list".
          </p>
        </div>
        <div class="docs-example pseudo-editor--content">
          <div class="pseudo-editor--pages">
            <p>characters:
              &nbsp;&nbsp;Boba Fett, Chewbacca, Worf, Ezio Auditore da Firenze, Gandalf
              &nbsp;&nbsp;Mike Wazowski, Optimus Prime, Peter Venkman, Albus Dumbledore
              vocabulary: klaatu, barada, nikto
            </p>
          </div>
        </div>
      </section>
      <section class="docs-section" id="bookmarks">
        <div class="docs-details">
          <h2>Page Navigation</h2>
          <p>
            On the left side of the window, you'll find a list of numbered page links. Click on a page link to scroll
            directly
            to the top of that page. Hover over the page navigation to see the panel count and word count of each page
            at a glance (p = panel; w = word). Either double click or right click on a page link to toggle it as
            bookmark.
            Bookmarks are saved along with your script, so you can use them later.
          </p>
        </div>
        <div class="docs-example pseudo-editor--content"></div>
      </section>
    </div>
  </div>
</template>
<script setup lang="ts">
import examples from '../data/examples.json'

useSeoMeta({
  title: 'Superscript Documentation'
})
</script>
<style lang="stylus" scoped>
@import '../assets/css/vars'

.docs-page
  display flex

.nav-column
  padding-top 1em

.page-nav
  position sticky
  top 0
  flex 0 0 220px
  align-self flex-start
  padding 1ch

.page-nav--link
  display block
  margin 1ch
  border-radius 2px
  text-decoration none
  color $lightTextColor

  &:hover
  &.is-active
    color $brandColor

  &.is-active
    background $brandColor
    color $brandContrastColor
    box-shadow -5px 0 $brandColor, 5px 0 $brandColor

.docs-content
  flex 1

.docs-section
  display flex
  align-items flex-start

.docs-details
  position sticky
  top 0
  flex 1
  padding 0 2ch
  padding 1em 1em 3em

.pro-tip
  padding 1ch
  background $textColor
  color $pageBackground

.docs-example
  position sticky
  top 0
  padding 3em 1em

.pseudo-editor--content
  background $pageBackground

.pseudo-editor--pages
  margin 0
  padding 0

  h1::before
    background $pageBackground

@media only screen and (max-width: 1400px)
  .docs-section
    display block

  .docs-details
  .docs-example
    position static

  .pseudo-editor--content
    padding 1em

@media only screen and (max-width: 700px)
  .docs-page
    display block

  .page-nav
    position static
    margin-top 0
</style>
