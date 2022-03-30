import { createPinia } from 'pinia'
import { App } from 'vue'

export const useAppPlugins = (app: App<Element>) => {
  const store = createPinia()

  app.use(store)
}
