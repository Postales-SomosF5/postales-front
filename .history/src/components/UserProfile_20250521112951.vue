<template>
  <div class="user-panel">
    <h1>Bienvenida, {{ user.name }}</h1>

    <!-- Aquí se usa el componente -->
    <UserProfile :user="user" />

    <MatchDetails :match="match" />
  </div>
</template>

<script setup>
// 👇 Importas los componentes normalmente
import UserProfile from '@/components/UserProfile.vue'
import MatchDetails from '@/components/MatchDetails.vue'

import { ref, onMounted } from 'vue'

// Simulación de datos
const user = ref({
  name: 'Silvia',
  edad: 28,
  intereses: ['lectura', 'viajes']
})

const match = ref({
  name: 'María',
  edad: 32,
  pais: 'Colombia',
  intereses: ['escribir cuentos', 'historia']
})
</script>
