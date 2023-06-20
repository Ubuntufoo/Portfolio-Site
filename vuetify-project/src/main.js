/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'


import VueFullPage from 'vue-fullpage.js'

const app = createApp(App)

registerPlugins(app)
app.use(VueFullPage)
app.mount('#app')
