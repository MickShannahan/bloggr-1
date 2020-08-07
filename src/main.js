import { Auth0Plugin } from '@bcwdev/auth0-vue'
import { createApp } from 'vue'
import App from './App.vue'
import { AppState } from './AppState'
import { audience, clientId, domain } from './AuthConfig'
import router from './router'

App.AppState = AppState

createApp(App)
  .use(router)
  .use(Auth0Plugin, {
    domain,
    clientId,
    audience,
    onRedirectCallback: appState => {
      router.push(
        appState && appState.targetUrl
          ? appState.targetUrl
          : window.location.pathname
      )
    }
  })
  .mount('#app')
