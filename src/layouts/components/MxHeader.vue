<script setup lang="ts" name="MxHeader">
import SystemControl from './SystemControl.vue'

const isMac = window.$api.platform.isMacOS
</script>

<template>
  <n-flex justify="space-between" align="flex-start" class="box-border h-40 backdrop-blur-50 drag">
    <n-flex :wrap="false" class="self-center pl-10 no-drag" :class="{ 'pl-80': isMac }">
      <div v-if="!isMac" class="i-local-logo text-28" />
      <n-input size="small" class="w-100" placeholder="请输入主机名或主机地址" />
      <div class="i-carbon-terminal text-28" />
    </n-flex>
    <SystemControl />
  </n-flex>
</template>
