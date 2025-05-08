<template>
  <div class="default-layout">
    <div class="header-and-main">
      <PageHeader></PageHeader>
      <slot />
    </div>
    <PageFooter></PageFooter>
  </div>
</template>
<script setup lang="ts">
import PageFooter from '../components/PageFooter.vue'
import PageHeader from '../components/PageHeader.vue'
</script>
<style lang="stylus" scoped>
@import '../assets/css/vars'

.default-layout
  display flex
  flex-direction column
  min-height 100vh

.header-and-main
  flex 1 0 auto
</style>
