<template>
  <div class="dashboard-container">
    <div class="card">
      <UserFormView />
    </div>
    <div class="card">
      <MatchData :match="datosMatch" />
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
  align-items: stretch;
  gap: 40px;
  padding: 60px 20px;
  background-color: #f2f2f2;
}

.card {
  max-height: 80vh;     
  overflow-y: auto;      /* si el contenido es más alto, aparecerá scroll vertical dentro de la card */
  /* otras propiedades que ya tienes */
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgb(0 0 0 / 0.1);
  padding: 30px;
  width: 400px;
  display: flex;
  flex-direction: column; /* importante para que se acomode verticalmente */
}
</style>
