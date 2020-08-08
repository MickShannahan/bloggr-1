import { $auth, initializeAuth } from '@bcwdev/auth0-vue'
import { reactive } from 'vue'
import { AppState } from './AppState'
import router from './router'
import { api } from './services/AxiosService'
import { profileService } from './services/ProfileService'

const domain = 'codeworksclassroom.auth0.com'
const clientId = 'pOXw2OGv1LsYi7LEBmDF04RLkXQvldml'
const audience = 'https://codeworksclassroom.com'

const AuthService = initializeAuth({
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

AuthService.on(AuthService.AUTH_EVENTS.AUTHENTICATED, async () => {
  api.defaults.headers.authorization = $auth().bearer
  AppState.user = AuthService.user
  await profileService.getProfile()
})
AuthService.on(AuthService.AUTH_EVENTS.LOADED, () => {
  AppState.$auth = reactive(AuthService)
})
