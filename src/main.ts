import { createApp } from 'vue'

import { useAppPlugins } from './setup/use-app-plugins'
import { useAppInitialize } from './setup/use-app-initialize'
import App from './App.vue'

const app = createApp(App)

useAppPlugins(app)
useAppInitialize(app)

app.mount('#app')
