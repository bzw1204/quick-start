<script setup lang="ts">
import type { GlobalThemeOverrides } from 'naive-ui'
import { darkTheme } from 'naive-ui'
import { NaiveProviderContent } from '@/components'

const themeOverrides: GlobalThemeOverrides = {
  common: {
    // bodyColor: '#FFFFFF00',
    primaryColor: 'rgb(46, 89, 92)',
    primaryColorHover: '#4098fc',
    primaryColorPressed: '#4098fc',
    primaryColorSuppl: '#4098fc',
    infoColor: '#2080f0',
    infoColorHover: '#4098fc',
    infoColorPressed: '#1060c9',
    infoColorSuppl: '#4098fc',
    errorColor: '#D03050FF',
    errorColorHover: '#CF3F5CFF'
  },
  Layout: {
    // color: `var(--color-2)`,
    // peers: {},
    // headerColor: '#252a3800',
    // siderColor: '#252a3800'
  },
  DataTable: {
    thColor: '#FFFFFF00',
    tdColor: '#FFFFFF00'
  },
  Dropdown: {
    boxShadow: 'none'
  },
  Dialog: {
    closeMargin: '16px 16px 0 0',
    padding: '16px'
  },
  Tree: {
    nodeHeight: '40px'
  }
}
</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides" :theme="darkTheme" class="select-none">
    <NaiveProviderContent>
      <router-view />
    </NaiveProviderContent>
  </n-config-provider>
</template>
