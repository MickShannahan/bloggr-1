<template>
  <div id="app">
    <navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import { api } from './services/AxiosService'
import { profileService } from './services/ProfileService'

export default {
  name: 'App',
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
