import { NGlobalStyle } from 'naive-ui'

export function registerNaiveTools() {
  window.$loadingBar = useLoadingBar()
  window.$dialog = useDialog()
  window.$message = useMessage()
  window.$notification = useNotification()
}
export interface INaiveProviderProps {
  show: boolean
}
const NaiveProviderProps = {
  show: {
    type: Boolean,
    default: true
  }
} as const
export const NaiveProviderContent = defineComponent({
  name: 'NaiveProviderContent',
  props: NaiveProviderProps,
  setup() {
    registerNaiveTools()
  },
  render() {
    return this.$props.show ? h(NGlobalStyle) : null
  }
})
