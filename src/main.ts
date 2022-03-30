import { createApp } from 'vue'
import App from './App.vue'
import { useAppPlugins } from './setup/use-app-plugins'
import { useAppInitialize } from './setup/use-app-initialize'

const app = createApp(App)

useAppInitialize(app)
useAppPlugins(app)

app.mount('#app')
