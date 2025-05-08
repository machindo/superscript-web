<template>
  <div class="pseudo-editor--wrapper narrow-container">
    <div class="pseudo-editor">
      <div class="pseudo-editor--titlebar">
        <div class="pseudo-editor--titlebar--buttons"></div>
        <div class="pseudo-editor--bar-tabs">
          <div class="pseudo-editor--bar-tab active">
            <svg class="pseudo-editor--bar-tab--graphic pseudo-editor--bar-tab--graphic-left" viewBox="0 0 16 30" width="16" height="30">
              <path class="pseudo-editor--bar-tab--background" d="M0,30 C2,30 4,29 5,25 L10,5 C11,2 11,0 15,0 L 16,0 15,30 Z"></path>
            </svg>
            <svg class="pseudo-editor--bar-tab--graphic pseudo-editor--bar-tab--graphic-right" viewBox="0 0 16 30" width="16" height="30">
              <path class="pseudo-editor--bar-tab--background" d="M 15 30 C 13 30 11 29 10 25 L 5 5 C 4 2 4 0 0 0 V 30 Z"></path>
            </svg>
            <span class="pseudo-editor--bar-tab--title">Skylin</span>
            <button class="pseudo-editor--bar-tab--button">
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path d="M18.3,5.71L18.3,5.71c-0.39-0.39-1.02-0.39-1.41,0L12,10.59L7.11,5.7c-0.39-0.39-1.02-0.39-1.41,0l0,0
                  c-0.39,0.39-0.39,1.02,0,1.41L10.59,12L5.7,16.89c-0.39,0.39-0.39,1.02,0,1.41h0c0.39,0.39,1.02,0.39,1.41,0L12,13.41l4.89,4.89
                  c0.39,0.39,1.02,0.39,1.41,0l0,0c0.39-0.39,0.39-1.02,0-1.41L13.41,12l4.89-4.89C18.68,6.73,18.68,6.09,18.3,5.71z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="pseudo-editor--tab-view">
        <div ref="editorContent" class="pseudo-editor--content">
          <div ref="editorText" class="pseudo-editor--pages" :class="{ 'show-word-count': showWordCount, 'letterer-mode': lettererMode }">
            <template v-for="(line, index) of typedLines" :key="index"><component :is="line" /></template>
          </div>
        </div>
        <div class="page-outline">
          <div ref="links" class="page-link exists" :class="{ current: currentPage === 0 }"><span class="page-link--text">Title</span></div>
          <div ref="links" class="page-link" :class="{ current: currentPage === 1 }"><span class="page-link--text">1</span></div>
          <div ref="links" class="page-link" :class="{ current: currentPage === 2 }"><span class="page-link--text">2</span></div>
          <div ref="links" class="page-link" :class="{ current: currentPage === 3 }"><span class="page-link--text">3</span></div>
          <div ref="links" class="page-link" :class="{ current: currentPage === 4 }"><span class="page-link--text">4</span></div>
        </div>
        <div class="scrollbar">
          <div ref="scrollbarThumb" class="scrollbar-thumb"></div>
          <div class="scrollbar-marker scrollbar-marker--cursor scrollbar-marker--current-cursor" style="top: 0%; height: 0%;"></div>
        </div>
      </div>
      <img v-show="exportWindow" class="export-window" src="/images/export-window.png">
    </div>
  </div>
</template>
<script setup lang="tsx">
import scrollIntoView from 'scroll-into-view-if-needed'
import type { FunctionalComponent } from 'vue'

import { skylinExample as lines } from './skylin-script'

interface TypistOptions {
  letterDelay: number
  returnDelay: number
  scrollIntoView: boolean
}

const actionIndex = ref(0)
const editorContent = ref<HTMLElement>()
const editorText = ref<HTMLDivElement>()
const pageLinks = useTemplateRef<HTMLElement[]>('links')
const scrollbarThumb = ref<HTMLElement>()
const currentPage = ref(0)
const showWordCount = ref(false)
const lettererMode = ref(false)
const exportWindow = ref(false)
const typedLines = ref<FunctionalComponent[]>([])
const typistOptions = {
  letterDelay: 10,
  returnDelay: 1000,
  scrollIntoView: true
} as const

onMounted(() => {
  nextTick(() => typeLines(5))
})

const scroll=() => {
  if (editorContent.value && scrollbarThumb.value) {
    const scrollPercent =
      editorContent.value.scrollTop /
      editorContent.value.scrollHeight

    scrollbarThumb.value.style.top = `calc(${scrollPercent * 50}% + 2px)`

    currentPage.value = 0

    for (let i = 4; i > 0; i--) {
      const heading = document.getElementById(
        `pageHeading${i}`
      ) as HTMLElement

      const pageLink = pageLinks.value?.[i]

      if (pageLink && heading && !pageLink.classList.contains('exists')) {
        pageLink.classList.add('exists')
      } else if (pageLink && !heading && pageLink.classList.contains('exists')) {
        pageLink.classList.remove('exists')
      }

      if (heading && heading.offsetTop < editorContent.value.scrollTop) {
        currentPage.value = i
        break
      }
    }
  }
}

const scrollTo = (line: number) => {
  if (editorText.value?.children[line]) {
    scrollIntoView(editorText.value.children[line] as HTMLElement, {
      behavior: 'smooth',
      block: 'start',
      boundary: editorContent.value,
      scrollMode: 'always'
    })
  }
}

const toggleWordCount = (value?: boolean) => {
  showWordCount.value = value !== undefined ? value : !showWordCount.value
}

const toggleLettererMode = (value?: boolean) => {
  lettererMode.value = value !== undefined ? value : !lettererMode.value
}

const toggleExportWindow = (value?: boolean) => {
  exportWindow.value = value !== undefined ? value : !exportWindow.value
}

const clear = () => {
  typedLines.value.length = 0
}

const wait = (ms: number): Promise<void> => {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}

const typeLines = async(start: number, end?: number) => {
  ++actionIndex.value
  clear()

  const linesToType = lines.slice(0, start + 1)
  let nextTag: (Function | string) | undefined

  for (const line of linesToType) {
    if (line.output) {
      typedLines.value = [...typedLines.value, line.output]
    } else {
      const Tag = typeof nextTag === 'string' ? nextTag : 'p'
      typedLines.value = [...typedLines.value, () => <Tag>{line.input}</Tag>]
    }

    nextTag = line.nextTag
  }

  if (end) {
    typeTo(end)
  }
}

const typeTo=async(end: number) => {
  if (end <= typedLines.value.length) {
    return
  }

  const _actionIndex = ++actionIndex.value
  const _lines = lines.slice(typedLines.value.length - 1, end)

  let LineTag = 'p'

  for (const line of _lines) {
    if (_actionIndex !== _actionIndex) return

    let lineText = ''

    if (typistOptions.scrollIntoView && editorText.value && editorContent.value) {
      getCurrentInstance()?.proxy?.$forceUpdate()

      editorContent.value.scrollTop =
        editorText.value.offsetHeight -
        editorContent.value.offsetHeight
    }

    if (typeof line.input === 'string') {
      // type each letter
      for (const letter of line.input) {
        lineText += letter

        typedLines.value = [...typedLines.value.slice(0, -1), () => <LineTag>{lineText}</LineTag>] 

        getCurrentInstance()?.proxy?.$forceUpdate()

        await wait(typistOptions.letterDelay)
        if (actionIndex !== actionIndex) return
      }
    }

    // Ready next line tag
    LineTag = line.nextTag ? line.nextTag : 'p'

    if (line.output) {
      await wait(typistOptions.returnDelay / 2)
      if (actionIndex !== actionIndex) return

      typedLines.value = [...typedLines.value.slice(0, -1), line.output, () => <LineTag />]

      await wait(typistOptions.returnDelay / 2)
    } else {
      typedLines.value = [...typedLines.value, () => <LineTag />]
    }

    scroll()
  }
}

defineExpose({
  typeLines,
  scrollTo,
  toggleWordCount,
  toggleLettererMode,
  toggleExportWindow,
})
</script>
<style lang="stylus" scoped>
@import '../../assets/css/vars'

@keyframes blink
  0%
    opacity 1
  45%
    opacity 1
  55%
    opacity 0
  100%
    opacity 0

.pseudo-editor--wrapper
  position relative

.pseudo-editor
  height 100%

.pseudo-editor--content
  height 100%

.pseudo-editor--pages
  padding-bottom 200px
  white-space pre-wrap

  > :last-child::after
    content ' '
    display inline-block
    position absolute
    height 1em * 1.2
    width 1px
    background-color $brandSecondaryColor
    animation blink .5s alternate infinite
    margin-left 0
    font-size 1em

.export-window
  position absolute
  top 0
  left 1%
  width 98%
  border-left solid 1px #aaa
  border-right solid 1px #aaa
  border-bottom solid 1px #aaa
  box-shadow 0 5px 15px rgba(black .2)
  z-index 1

@media only screen and (max-width: 500px)
  .pseudo-editor--pages
    padding 2ch 2ch 100px
    font-size 12px
</style>
