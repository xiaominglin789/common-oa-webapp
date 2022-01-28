import { ConfigProvider, Button } from 'vant'

const components = [ConfigProvider, Button]

const useVantUI = (app: any) => {
  components.forEach((child) => {
    app.component(child.name, child)
  })
}

export default useVantUI
