import { reactive } from 'vue'

export const AppState = reactive({
  $auth: {},
  user: {},
  profile: {}
})

// NOTE Getters are used for repeated computeds
export const Getters = {}
