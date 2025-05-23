<template>
  <div class="admin-dashboard">
    <h2>Panel de Administración</h2>

    <form @submit.prevent>
      <label for="centro">Centro:</label>
      <select id="centro" v-model="selectedCentro" @change="resetSector">
        <option disabled value="">-- Selecciona un centro --</option>
        <option v-for="centro in centros" :key="centro" :value="centro">{{ centro }}</option>
      </select>

      <label for="sector">Sector:</label>
      <select id="sector" v-model="selectedSector" :disabled="!selectedCentro">
        <option disabled value="">-- Selecciona un sector --</option>
        <option v-for="sector in sectoresFiltrados" :key="sector" :value="sector">{{ sector }}</option>
      </select>
    </form>

    <div v-if="usuariosFiltrados.length" class="tabla-usuarios">
      <h3>Usuarios - {{ selectedCentro }} / {{ selectedSector }}</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Dedicación</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="usuario in usuariosFiltrados" :key="usuario.id">
            <td>{{ usuario.nombre }}</td>
            <td>{{ usuario.apellido }}</td>
            <td>{{ usuario.dedicacion }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p v-else class="info">Selecciona centro y sector para mostrar usuarios.</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Centros disponibles
const centros = [
  'Boluetabarri', 'Montaño', 'Belategi', 'Tolosa', 'Sarrikue',
  'Markina', 'Errenteria', 'Intervención Social Bizkaia',
  'EPA Gipuzkoa', 'EPA Bizkaia'
]

// Sectores por centro
const sectoresPorCentro = {
  Boluetabarri: ['Modo - Comercio', 'Informática', 'Climatización - Fontanería', 'Madera', 'Hostalería', 'Administración', 'Complementaria'],
  Montaño: ['Hostalería', 'Construcción - Electricidad'],
  Belategi: ['Metal'],
  // Otros centros con sectores vacíos
  Tolosa: [], Sarrikue: [], Markina: [], Errenteria: [],
  'Intervención Social Bizkaia': [], 'EPA Gipuzkoa': [], 'EPA Bizkaia': []
}

// Usuarios de ejemplo
const usuarios = ref([
  { id: 1, nombre: 'Ane', apellido: 'Gómez', dedicacion: 'Estudio', centro: 'Boluetabarri', sector: 'Hostalería' },
  { id: 2, nombre: 'Iker', apellido: 'Martínez', dedicacion: 'Trabajo', centro: 'Boluetabarri', sector: 'Informática' },
  { id: 3, nombre: 'Lorea', apellido: 'Ruiz', dedicacion: 'Estudio', centro: 'Montaño', sector: 'Hostalería' },
  { id: 4, nombre: 'Jon', apellido: 'Sánchez', dedicacion: 'Trabajo', centro: 'Belategi', sector: 'Metal' }
])

// Estado del formulario
const selectedCentro = ref('')
const selectedSector = ref('')

// Sectores según centro seleccionado
const sectoresFiltrados = computed(() => {
  return selectedCentro.value ? sectoresPorCentro[selectedCentro.value] || [] : []
})

// Lista de usuarios filtrados
const usuariosFiltrados = computed(() => {
  if (!selectedCentro.value || !selectedSector.value) return []
  return usuarios.value.filter(u => u.centro === selectedCentro.value && u.sector === selectedSector.value)
})

const resetSector = () => {
  selectedSector.value = ''
}
</script>

<style scoped>
.admin-dashboard {
  max-width: 900px;
  margin: 40px auto;
  padding: 40px;
  background: #f9fafb;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h2, h3 {
  color: rgb(0, 141, 12);
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 30px;
}

label {
  font-weight: 600;
   color:;
  margin-right: 8px;
}

select {
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  background: #fff;
  color: #111827;
  font-size: 1rem;
  transition: border-color 0.2s ease;
}

select:focus {
  border-color: rgb(0, 141, 12);
  outline: none;
}

.tabla-usuarios {
  overflow-x: auto;
  border-radius: 10px;
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  padding: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 14px 12px;
  text-align: left;
  font-size: 15px;
}

th {
  background-color: #eef2ff;
  color:  rgb(0, 141, 12);
  font-weight: 600;
}

tr:nth-child(even) {
  background-color: #f9fafb;
}

tr:hover {
  background-color: #e0e7ff;
}

.info {
  color: #6b7280;
  font-style: italic;
  margin-top: 20px;
}
</style>

