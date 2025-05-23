<template>
  <div class="dashboard">
    <UserFormView />

    <div class="datos-contacto">
      <h2>Datos de otra persona</h2>
      <p><strong>Nombre:</strong> Laura</p>
      <p><strong>Apellido:</strong> Gómez</p>
      <p><strong>Dedicación:</strong> Estudio</p>
      <p><strong>Centro:</strong> Boluetabarri / Informática</p>
      <p><strong>Grupo lingüístico:</strong> No</p>
    </div>
  </div>
</template>

<script setup>
import UserFormView from '@/components/UserFormView.vue'
</script>

<style scoped>
.dashboard {
  display: flex;
  justify-content: center;
  gap: 40px;
  padding: 40px;
}

.datos-contacto {
  background-color: white;
  padding: 30px;
  border-radius: 12px;
  width: 400px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
