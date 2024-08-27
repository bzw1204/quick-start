<script setup lang="ts">
import type { SmileSpinStatus } from 'smile-spin'
import MxSmileSpin from '@/components/MxSmileSpin/index.vue'
// const content = ref(`
// <script setup lang="ts">
// const content=  ref('hello')
// <\/script>
// <template>
// <h1>Hello World</h1>
//   <RouterLink to="/terminal">
//     终端
//   </RouterLink>
//   <MxEditor :model-value="content" filepath="D:\\Front\\box-client\\src\\renderer\\src\\App.vue" />
// </template>
// `)
const status = ref<SmileSpinStatus>('loading')
const toggle = () => status.value = status.value === 'loading' ? 'error' : 'loading'
const open = () => window.ipc.send('window:open')
</script>

<template>
  <n-flex vertical justify="center" align="center" class="wh-full self-center">
    <n-button size="small" type="success" @click="open">
      新窗口
    </n-button>
    <!-- <RouterLink to="/terminal">
    终端
  </RouterLink>
  <MxEditor :model-value="content" filepath="D:\Front\box-client\src\renderer\src\App.vue" /> -->
    <n-button @click="toggle">
      切换
    </n-button>
    <MxSmileSpin :status />
  </n-flex>
</template>
