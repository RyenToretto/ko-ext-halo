<template>
  <div class="installed-view">
    <h1>🚀 {{ displayName }}</h1>

    <p>插件已安装! 🎉</p>
    <p>(Version: {{ version }})</p>
  </div>
</template>

<script setup lang="ts">
const displayName = __DISPLAY_NAME__
const version = __VERSION__
</script>

<style lang="scss" scoped>
.installed-view {
  box-sizing: border-box;
}
</style>
