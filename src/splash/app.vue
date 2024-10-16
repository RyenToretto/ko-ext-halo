<template>
  <component :is="ComponentToRender" />
</template>

<script setup lang="ts">
import { useUrlSearchParams } from '@vueuse/core'
import { computed, defineAsyncComponent, onMounted, ref } from 'vue'

const params = useUrlSearchParams('history')
const splashType = ref<'install' | 'update'>('install')

onMounted(() => {
  const type = params.type as string
  if (type === 'install' || type === 'update') {
    splashType.value = type
  }
  updateTitle()
})

function updateTitle() {
  if (splashType.value === 'install') {
    document.title = `${__DISPLAY_NAME__} | Installed!`
  } else if (splashType.value === 'update') {
    document.title = `${__DISPLAY_NAME__} | Updated!`
  } else {
    document.title = __DISPLAY_NAME__
  }
}

const InstallComponent = defineAsyncComponent(
  () => import('@/components/InstalledView.vue')
)
const UpdateComponent = defineAsyncComponent(
  () => import('@/components/UpdatedView.vue')
)

const ComponentToRender = computed(() => {
  if (splashType.value === 'update') {
    return UpdateComponent
  }
  return InstallComponent
})
</script>

<style lang="scss"></style>
