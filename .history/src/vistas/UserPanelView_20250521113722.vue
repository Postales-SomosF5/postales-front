<!-- src/views/UserPanelView.vue -->
<template>
  <section class="user-panel">
    <h1>Panel de Usuario</h1>

    <!-- Aquí se importará el formulario más adelante -->
    <UserForm 
      v-if="user" 
      :initialUser="user" 
      @update="user = $event" 
      @delete="user = {}" 
    />

    <!-- Datos del match -->
    <div v-if="match" class="match-info">
      <h2>Tu pareja de cartas</h2>
      <p><strong>Nombre:</strong> {{ match.name }}</p>
      <p><strong>Idioma:</strong> {{ match.language }}</p>
      <p><strong>Intereses:</strong> {{ match.interests.join(', ') }}</p>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
// import UserForm from '@/components/UserForm.vue' //

// Datos simulados
const user = ref({
  name: 'Silvia',
  edad: 28,
  intereses: ['lectura', 'viajes']
})

const match = ref({
  name: 'Lucía',
  language: 'Árabe',
  interests: ['cine', 'idiomas']
})
</script>

<style scoped>
.user-panel {
  max-width: 700px;
  margin: 0 auto;
  padding: 2rem;
  background: #fefefe;
  border-radius: 12px;
}

.match-info {
  margin-top: 2rem;
  padding: 1rem;
  background-color: #e6f7ec;
  border-left: 5px solid #0f4d03;
}
</style>
