import type { ISettings } from 'settings'
import Store from 'electron-store'

const settings = new Store<ISettings>({
  name: 'settings',
  watch: true,
  defaults: {
    version: '0.0.1'
  },
  migrations: {
    '0.0.1': (store) => {
      store.set('version', '0.0.1')
    }
  }
})

export default settings
