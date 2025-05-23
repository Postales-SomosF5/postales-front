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
  align-items: flex-start;  /* alinea arriba para que no quede raro verticalmente */
  gap: 40px;
  padding: 60px 20px;
  background-color: #f2f2f2;
  min-height: 100vh;
}

.dashboard-container > * {
  flex: 1;       /* ambos componentes crecen igual */
  min-width: 300px; /* para que no se hagan muy estrechos en pantallas pequeñas */
  max-width: 500px; /* opcional, para no pasarse */
}

</style>
