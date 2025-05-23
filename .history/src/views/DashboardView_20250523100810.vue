<template>
  <div class="dashboard-container">
    <UserFormView />
    <MatchData :match="datosMatch" />
  </div>
</template>

<script setup>
import UserFormView from '@/components/UserFormView.vue'
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
  align-items: flex-start;
  gap: 40px;
  padding: 60px 20px;
  background-color: #f2f2f2;
  min-height: 100vh;
}
</style>
