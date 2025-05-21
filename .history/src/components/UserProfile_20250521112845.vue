<!-- src/components/UserProfile.vue -->
<template>
  <section class="user-profile">
    <h2>Tus datos</h2>
    <ul>
      <li><strong>Nombre:</strong> {{ user.name }}</li>
      <li><strong>Edad:</strong> {{ user.edad }}</li>
      <li><strong>Intereses:</strong> {{ user.intereses.join(', ') }}</li>
    </ul>
  </section>
</template>

<script setup>
import UserProfile from '@/components/UserProfile.vue'
import MatchDetails from '@/components/MatchDetails.vue'
const props = defineProps({
  user: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.user-profile {
  background-color: #f3f3f3;
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 2rem;
}
</style>
