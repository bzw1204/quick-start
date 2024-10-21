interface Window {
  $loadingBar?: import('naive-ui').LoadingBarProviderInst
  $dialog?: import('naive-ui').DialogProviderInst
  $message?: import('naive-ui').MessageProviderInst
  $notification?: import('naive-ui').NotificationProviderInst
  $modal?: import('naive-ui').ModalProviderInst
  $loading: {
    start: () => void
    end: () => void
  }
  $spin?: {
    start: () => void
    end: () => void
  }
  ipc: import('@electron-toolkit/preload').IpcRenderer
  $store: import('preload').IRendererStore
  $api: import('preload').IApi
}
