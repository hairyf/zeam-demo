import { createApp } from 'vue'
import App from './App.vue'
import { useAppPlugins } from './setup/use-app-plugins'

const app = createApp(App)

useAppPlugins(app)

app.mount('#app')
