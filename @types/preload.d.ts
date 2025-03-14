declare module 'preload' {
  import type { ISettings } from 'settings'

  interface IRendererStore<T = ISettings> {
    get: <K extends keyof T, V extends T[K]>(key: K, defaultValue?: V) => Promise<V>
    set: <K extends keyof T, V extends T[K]>(key: K, value: V) => Promise<boolean>
    delete: <K extends keyof T>(key: K) => Promise<boolean>
    reset: <K extends keyof T, V extends T[K]>(key: K, value?: V) => Promise<boolean>
  }
  interface IApi {
    platform: {
      isMacOS: boolean
    }
  }
}
