import { createApp } from 'vue'
import App from './App.vue'
import { AppState } from './AppState'
import './AuthConfig'
import router from './router'

createApp(App, {
  AppState
})
  .use(router)
  .mount('#app')
