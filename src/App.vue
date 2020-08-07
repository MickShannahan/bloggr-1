<template>
  <div id="app">
    <navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import { onAuth } from '@bcwdev/auth0-vue'
import { api } from './services/AxiosService'
import { profileService } from './services/ProfileService'

export default {
  name: 'App',
  async beforeCreate() {
    try {
      await onAuth()
      if (this.$auth.bearer) {
        api.defaults.headers.authorization = this.$auth.bearer
        await profileService.getProfile()
      }
    } catch (err) {
      console.error(err)
      this.$router.push({ name: 'home' })
    }
  },
  components: {
    Navbar
  }
}
</script>
<style lang="scss">
@import "./assets/_variables.scss";
@import "bootstrap";
@import "./assets/_overrides.scss";
</style>
