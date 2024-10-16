<template>
  <div class="change-log">
    <!-- eslint-disable vue/no-v-html -->
    <div v-html="marked(changelog)"></div>
    <!--eslint-enable-->
  </div>
</template>

<script setup lang="ts">
import { marked } from 'marked'

const changelog = __CHANGELOG__
</script>

<style lang="scss" scoped>
.change-log {
  box-sizing: border-box;
}
</style>
