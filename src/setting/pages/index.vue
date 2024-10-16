<template>
  <div class="setting">
    <p>{{ accountStore.currentAccountInfo.accountName }} (ID: {{ accountStore.currentAccountInfo.accountId }})</p>

    <p>{{ accountStore.currentAccountInfo.groupName }} (ID: {{ accountStore.currentAccountInfo.groupId }})</p>

    <p>{{ accountStore.glbFreshCount.freshCount }} ({{ accountStore.glbFreshCount.lastFreshTime }})</p>

    <el-button @click="$router.push('/common/aboutus')">关于我们</el-button>
  </div>
</template>

<script setup lang="ts">
import { ElButton } from 'element-plus'
import { useAccountStore } from '@/store/useAccountStore'

const accountStore = useAccountStore()
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
