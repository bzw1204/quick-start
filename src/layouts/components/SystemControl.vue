<script setup lang="ts">
import '@electron-uikit/titlebar/renderer'

const isMacOS = ref(window.$api.platform.isMacOS)
</script>

<template>
  <title-bar v-if="!isMacOS" overlay class="system-controls" />
</template>

<style lang="scss" scoped>
.system-controls {
  position: relative;
  width: 102px;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
  --tb-control-height: 28px;
  --tb-control-symbol-color: rgb(255, 255, 255);
  --tb-control-hover-color: #ffffff1c;
  --tb-control-close-symbol-color: rgb(255, 255, 255);
}
</style>
