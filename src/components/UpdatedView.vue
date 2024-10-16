<template>
  <div class="updated-view">
    <div>
      <h1>🎉 版本更新！</h1>
      <p>{{ displayName }} {{ version }}. 🎉</p>
    </div>

    <change-log></change-log>
  </div>
</template>

<script setup lang="ts">
const displayName = __DISPLAY_NAME__
const version = __VERSION__
</script>

<style lang="scss" scoped>
.updated-view {
  box-sizing: border-box;
}
</style>
