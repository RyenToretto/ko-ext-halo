<template>
  <div class="popup">
    <h1>{{ displayName }}</h1>

    <p>Version: {{ version }}</p>

    <p>{{ accountStore.currentAccountInfo.accountName }} (ID: {{ accountStore.currentAccountInfo.accountId }})</p>

    <p>{{ accountStore.currentAccountInfo.groupName }} (ID: {{ accountStore.currentAccountInfo.groupId }})</p>

    <p>{{ accountStore.glbFreshCount.freshCount }} ({{ accountStore.glbFreshCount.lastFreshTime }})</p>

    <el-button @click="pageTo">
      插件设置
    </el-button>

    <el-button @click="accountStore.checkIsLogin">
      检查是否登录
    </el-button>

    <el-button @click="$router.push('/common/aboutus')">关于我们</el-button>
  </div>
</template>

<script setup lang="ts">
import { ElButton } from 'element-plus'
import { useAccountStore } from '@/store/useAccountStore'

const version = __VERSION__
const displayName = __DISPLAY_NAME__

const accountStore = useAccountStore()

const pageTo = () => {
  chrome.runtime.openOptionsPage()
}
</script>

<style scoped>
.btn {
  @apply px-4 py-2 rounded-md bg-blue-500 text-white;
}

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
