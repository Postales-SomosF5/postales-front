<template>
  <div class="dashboard-container">
    <div class="card">
    <UserFormView />
    <div class="card">
    <MatchData :match="datosMatch" />
  </div>  
</div>
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
  align-items: stretch; /* que ambas cards tengan igual altura */
  gap: 40px;
  padding: 60px 20px;
  background-color: #f2f2f2;
  min-height: 100vh;
}

.card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgb(0 0 0 / 0.1);
  padding: 30px;
  width: 400px;       /* mismo ancho fijo */
  display: flex;
  flex-direction: column;
  /* Para igualar la altura de ambas cards:
     ponemos min-height y forzamos que el contenido se adapte */
  min-height: 600px;
}
</style>
