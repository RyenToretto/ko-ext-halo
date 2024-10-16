<template>
  <div class="m-4">
    <div>
      <button @click="$router.back">
        返回
      </button>

      <h1>{{ displayName }}</h1>
    </div>

    <change-log></change-log>
  </div>
</template>

<script setup lang="ts">
const displayName = __DISPLAY_NAME__
</script>

<style scoped></style>
