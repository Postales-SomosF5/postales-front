<template>
  <div class="match-box">
    <h2>Datos de tu  amigo postal</h2>

    <div class="campo">
      <label>Nombre:</label>
      <p>{{ match.nombre }}</p>
    </div>

    <div class="campo">
      <label>Apellido:</label>
      <p>{{ match.apellido }}</p>
    </div>

    <div class="campo">
      <label>Dedicación:</label>
      <p>{{ match.dedicacion }}</p>
    </div>

    <div class="campo">
      <label>Centro:</label>
      <p>{{ match.centro }}</p>
    </div>

    <div class="campo">
      <label>Grupo lingüístico:</label>
      <p>{{ match.linguistico }}</p>
    </div>
  </div>
</template>

<script setup>
import matchImage from '@/assets/img/posta'
defineProps({
  match: {
    type: Object,
    required: true,
  }
})
</script>

<style scoped>
.match-box {
  background: white;
  padding: 40px 30px;
  border-radius: 12px;
  text-align: left;
}

.campo {
  margin-bottom: 15px;
}

.campo label {
  font-weight: bold;
  color: #333;
  margin-right: 10px;
}
</style>
