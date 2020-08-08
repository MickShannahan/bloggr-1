<template>
  <div class="about text-center">
    <div class="hasProfile" v-if="profile.id">
      <h1>Welcome {{ profile.name }}</h1>
      <img class="rounded" :src="profile.picture" alt />
      <p>{{ profile.email }}</p>
    </div>
    <div v-else>Welcome {{user.name}}</div>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { computed } from 'vue'
export default {
  name: 'Profile',
  setup() {
    return {
      user: computed(() => AppState.user),
      profile: computed(() => AppState.profile)
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
