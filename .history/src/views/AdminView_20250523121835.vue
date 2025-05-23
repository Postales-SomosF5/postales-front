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
  max-width: 800px;
  margin: 40px auto;
  padding: 30px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

form {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 30px;
}

label {
  font-weight: 600;
  margin-right: 5px;
}

select {
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #ccc;
}

.tabla-usuarios table {
  width: 100%;
  border-collapse: collapse;
}

.tabla-usuarios th,
.tabla-usuarios td {
  padding: 10px;
  border-bottom: 1px solid #ddd;
  text-align: left;
}

.tabla-usuarios th {
  background-color: #f5f5f5;
}

.info {
  font-style: italic;
  color: #777;
}
</style>

