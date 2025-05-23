<template>
  <div class="admin-dashboard">
    <h1>Panel de Administración</h1>

    <form @submit.prevent="filtrarMatchs" class="filter-form">
      <div class="form-group">
        <label for="centro">¿En qué centro formativo sueles estar?</label>
        <select id="centro" v-model="centroSeleccionado" required>
          <option disabled value="">Selecciona un centro</option>
          <option>Boluetabarri / Modo - Comercio</option>
          <option>Boluetabarri / Informática</option>
          <option>Boluetabarri / Climatización - Fontanería</option>
          <option>Boluetabarri / Madera</option>
          <option>Boluetabarri / Hostalería</option>
          <option>Boluetabarri / Administración</option>
          <option>Boluetabarri / Complementaria</option>
          <option>Montaño / Hostalería</option>
          <option>Montaño / Construcción - Electricidad</option>
          <option>Belategi / Metal</option>
          <option>Tolosa</option>
          <option>Sarrikue</option>
          <option>Markina</option>
          <option>Errenteria</option>
          <option>Intervención Social Bizkaia</option>
          <option>EPA Gipuzkoa</option>
          <option>EPA Bizkaia</option>
        </select>
      </div>

      <div class="form-group">
        <label for="refuerzo">¿Participa en refuerzo lingüístico?</label>
        <select id="refuerzo" v-model="refuerzoSeleccionado" required>
          <option disabled value="">Selecciona opción</option>
          <option value="Sí">Sí</option>
          <option value="No">No</option>
        </select>
      </div>

      <button type="submit">Filtrar Matchs</button>
    </form>

    <div v-if="matchsFiltrados.length">
      <h2>Matchs en {{ centroSeleccionado }} - Refuerzo lingüístico: {{ refuerzoSeleccionado }}</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Dedicación</th>
            <th>Centro</th>
            <th>Refuerzo Lingüístico</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="match in matchsFiltrados" :key="match.id">
            <td>{{ match.nombre }}</td>
            <td>{{ match.apellido }}</td>
            <td>{{ match.dedicacion }}</td>
            <td>{{ match.centro }}</td>
            <td>{{ match.linguistico }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-else>
      <p>No hay matchs para este centro y filtro lingüístico seleccionados.</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Variables reactivas para filtros
const centroSeleccionado = ref('')
const refuerzoSeleccionado = ref('')

// Ejemplo de matchs
const matchs = ref([
  { id: 1, nombre: 'Ane', apellido: 'Gómez', dedicacion: 'Estudio', centro: 'Boluetabarri / Hostalería', linguistico: 'Sí' },
  { id: 2, nombre: 'Jon', apellido: 'Martínez', dedicacion: 'Trabajo', centro: 'Boluetabarri / Informática', linguistico: 'No' },
  { id: 3, nombre: 'Miren', apellido: 'López', dedicacion: 'Estudio', centro: 'Montaño / Construcción - Electricidad', linguistico: 'Sí' },
  { id: 4, nombre: 'Leire', apellido: 'Sánchez', dedicacion: 'Estudio', centro: 'Boluetabarri / Madera', linguistico: 'No' },
  { id: 5, nombre: 'Iker', apellido: 'Garcia', dedicacion: 'Trabajo', centro: 'Belategi / Metal', linguistico: 'Sí' },
  // ...más matchs
])

const matchsFiltrados = ref([])

const filtrarMatchs = () => {
  matchsFiltrados.value = matchs.value.filter(
    m => m.centro === centroSeleccionado.value && m.linguistico === refuerzoSeleccionado.value
  )
}
</script>

<style scoped>
.admin-dashboard {
  max-width: 900px;
  margin: 40px auto;
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgb(0 0 0 / 0.1);
}

.filter-form {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  margin-bottom: 30px;
}

.form-group {
  flex: 1 1 250px;
  display: flex;
  flex-direction: column;
}

label {
  font-weight: bold;
  margin-bottom: 6px;
}

select {
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 16px;
}

button {
  background-color: #fd7e14;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  align-self: flex-end;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #e95f00;
}

table {
  width: 100%;
  border-collapse: collapse;
}

thead th {
  background-color: #fd7e14;
  color: white;
  padding: 10px;
  text-align: left;
}

tbody td {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}
</style>