<template>
  <div class="user-panel">
    <h1>Bienvenida, {{ user.name }}</h1>

    <UserProfile :user="user" />

    <MatchDetails :match="match" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import UserProfile from '@/components/UserProfile.vue'
import MatchDetails from '@/components/MatchDetails.vue'


const user = ref({
  name: 'Silvia',
  edad: 28,
  intereses: ['lectura', 'viajes'],
})

const match = ref({
  name: 'María',
  edad: 32,
  pais: 'Colombia',
  intereses: ['escribir cuentos', 'historia'],
})

onMounted(() => {
  // Aquí podrías cargar datos reales del usuario/match desde una API
})
</script>

<style scoped>
.user-panel {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}
</style>
