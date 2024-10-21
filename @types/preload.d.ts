declare module 'preload' {
  interface IRendererStore {
    get: <K extends keyof XSchema>(key: K) => Promise<Required<XSchema>[K]>
    get: <K extends keyof XSchema>(key: K, defaultValue: Required<XSchema>[K],) => Promise<Required<XSchema>[K]>
    get: <K extends keyof string, V = unknown>(key: K, defaultValue?: V,) => Promise<V>
    get: (key: string, defaultValue?: unknown) => Promise<unknown>
    set: <K extends keyof XSchema>(key: K, value: XSchema[K],) => Promise<boolean>
    remove: <K extends keyof XSchema>(key: K) => Promise<boolean>
    reset: <K extends keyof XSchema>(key: K, value?: XSchema[K],) => Promise<boolean>
  }
  interface IApi {
    platform: {
      isMacOS: boolean
    }
  }
}
