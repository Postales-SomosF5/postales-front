<template>
  <div class="dashboard-container">
    <UserFormView />
    <MatchData :match="datosMatch" />
  </div>
</template>

<script setup>
import UserFormView from '@/views/UserFormView.vue'
import MatchData from '@/components/MatchData.vue'

const datosMatch = {
  nombre: 'Ane',
  apellido: 'Gómez',
  dedicacion: 'Estudio',
  centro: 'Boluetabarri / Hostalería',
  linguistico: 'Sí',
}
</script>

<style scoped>
.dashboard-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 60px 20px;
  background-color: #f2f2f2;
  min-height: 100vh;
}

.dashboard-container > * {
  max-width: 500px;
  width: 100%;
}
</style>
