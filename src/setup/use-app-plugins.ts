import { createPinia } from 'pinia'
import { App } from 'vue'
import router from '@/router'
import piniaPluginPersist from 'pinia-plugin-persist'

import 'virtual:windi.css'

export const useAppPlugins = (app: App<Element>) => {
  const store = createPinia()
  /** 数据持久化 */
  store.use(piniaPluginPersist)

  app.use(store)
  app.use(router)
}
