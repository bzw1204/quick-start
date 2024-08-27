<script setup lang="ts">
import MxMenus from './components/MxMenus.vue'
import MxHeader from '@/layouts/components/MxHeader.vue'
</script>

<template>
  <n-layout :native-scrollbar="false" class="wh-full overflow-hidden">
    <n-layout-header>
      <MxHeader />
    </n-layout-header>
    <n-layout :native-scrollbar="false" has-sider>
      <n-layout-sider :native-scrollbar="false" class="h-content" content-class="px-10">
        <MxMenus />
      </n-layout-sider>
      <n-layout-content class="h-content">
        <RouterView />
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>
