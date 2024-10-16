<template>
  <div class="media-picker-view">
    <p>{{ accountStore.currentAccountInfo.accountName }} (ID: {{ accountStore.currentAccountInfo.accountId }})</p>

    <p>{{ accountStore.currentAccountInfo.groupName }} (ID: {{ accountStore.currentAccountInfo.groupId }})</p>

    <p class="underline">
      {{ accountStore.glbFreshCount.freshCount }} ({{ accountStore.glbFreshCount.lastFreshTime }})
    </p>

    <div>
      <button @click="accountStore.freshAdd(1)">
        刷新 +1
      </button>

      <button @click="accountStore.freshSub(1)">
        刷新 -1
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAccountStore } from '@/store/useAccountStore'

const accountStore = useAccountStore()
</script>

<style lang="scss" scoped>
.media-picker-view {
  box-sizing: border-box;
  width: 320px;
  height: 480px;
  background-color: #f001;
  margin: 0 auto;
  @include baseCard();
  /* position: fixed;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  z-index: 999999;
   */
}
</style>
