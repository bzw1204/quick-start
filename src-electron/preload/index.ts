import type { IApi, IRendererStore } from 'preload'
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
  get: (key, defaultValue) => window.ipc.invoke('store:get', key, defaultValue),
  set: (key, value) => window.ipc.invoke('store:set', key, value),
  delete: key => window.ipc.invoke('store:delete', key),
  reset: (key, value) => window.ipc.invoke('store:reset', key, value)
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
