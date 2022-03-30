import { createApp } from 'vue'

import { useAppPlugins } from './setup/use-app-plugins'
import { useAppInitialize } from './setup/use-app-initialize'
import App from './App.vue'

const app = createApp(App)

useAppInitialize(app)
useAppPlugins(app)

app.mount('#app')
