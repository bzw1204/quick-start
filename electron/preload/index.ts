import { platform } from 'node:os'
import { electronAPI } from '@electron-toolkit/preload'
import { contextBridge } from 'electron'
import { domReady, useLoading } from './loading'

const { appendLoading, removeLoading } = useLoading()
const loading = {
  start: () => appendLoading(),
  end: () => removeLoading()
}
const api: IApi = {
  platform: {
    isMacOS: platform() === 'darwin'
  }
}
const store: IRendererStore = {
  get: async(key, defaultValue?: any) => {
    return await electronAPI.ipcRenderer.invoke('store:get', key, defaultValue)
  },
  set: async(key, value) => {
    return await electronAPI.ipcRenderer.invoke('store:set', key, value)
  },
  remove: async(key) => {
    return await electronAPI.ipcRenderer.invoke('store:remove', key)
  },
  reset: async(key, value) => {
    return await electronAPI.ipcRenderer.invoke('store:reset', key, value)
  }
}
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('ipc', electronAPI.ipcRenderer)
    contextBridge.exposeInMainWorld('$loading', loading)
    contextBridge.exposeInMainWorld('$store', store)
    contextBridge.exposeInMainWorld('$api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  window.ipc = electronAPI.ipcRenderer
  window.$loading = loading
  window.$store = store
  window.$api = api
}

domReady().then(appendLoading)
