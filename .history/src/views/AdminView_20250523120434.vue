<template>
  <div class="admin-dashboard">
    <h1>Panel de Administración</h1>

    <form @submit.prevent="filtrarMatchs">
      <label for="centro">Selecciona Centro:</label>
      <select id="centro" v-model="centroSeleccionado" required>
        <option disabled value="">-- Selecciona Centro --</option>
        <option v-for="centro in centros" :key="centro" :value="centro">{{ centro }}</option>
      </select>

      <label for="sector">Selecciona Sector:</label>
      <select id="sector" v-model="sectorSeleccionado" required>
        <option disabled value="">-- Selecciona Sector --</option>
        <option v-for="sector in sectores" :key="sector" :value="sector">{{ sector }}</option>
      </select>

      <button type="submit">Filtrar Matchs</button>
    </form>

    <div v-if="matchsFiltrados.length">
      <h2>Matchs en {{ sectorSeleccionado }} - {{ centroSeleccionado }}</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Dedicación</th>
            <th>Centro</th>
            <th>Grupo Lingüístico</th>
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
      <p>No hay matchs para este centro y sector seleccionados.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Centros y sectores predefinidos (puedes traerlos desde API)
const centros = [
  'Boluetabarri / Hostalería',
  'Boluetabarri / Informática',
  'Montaño / Construcción - Electricidad',
  // ... otros centros
]

const sectores = ['Hostelería', 'Informática', 'Construcción', 'Comercio', 'Administración']

// Estado reactivo para los filtros
const centroSeleccionado = ref('')
const sectorSeleccionado = ref('')

// Ejemplo datos de matchs (normalmente vendrían de backend)
const matchs = ref([
  { id: 1, nombre: 'Ane', apellido: 'Gómez', dedicacion: 'Estudio', centro: 'Boluetabarri / Hostalería', linguistico: 'Sí', sector: 'Hostelería' },
  { id: 2, nombre: 'Jon', apellido: 'Martínez', dedicacion: 'Trabajo', centro: 'Boluetabarri / Informática', linguistico: 'No', sector: 'Informática' },
  { id: 3, nombre: 'Miren', apellido: 'López', dedicacion: 'Estudio', centro: 'Montaño / Construcción - Electricidad', linguistico: 'Sí', sector: 'Construcción' },
  // ... más matchs
])

// Estado para matchs filtrados
const matchsFiltrados = ref([])

const filtrarMatchs = () => {
  matchsFiltrados.value = matchs.value.filter(
    m => m.centro === centroSeleccionado.value && m.sector === sectorSeleccionado.value
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

form {
  display: flex;
  gap: 20px;
  align-items: center;
  margin-bottom: 30px;
}

form label {
  font-weight: bold;
}

form select {
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid #ccc;
  min-width: 200px;
}

button {
  background-color: #fd7e14;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
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
