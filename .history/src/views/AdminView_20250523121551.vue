<template>
  <div class="admin-dashboard">
    <h2>Panel de administración</h2>
    <form @submit.prevent>
      <label for="centro">Selecciona Centro</label>
      <select id="centro" v-model="selectedCentro" @change="filtrarSectores">
        <option disabled value="">Selecciona un centro</option>
        <option v-for="c in centros" :key="c" :value="c">{{ c }}</option>
      </select>

      <label for="sector">Selecciona Sector</label>
      <select id="sector" v-model="selectedSector" :disabled="!selectedCentro">
        <option disabled value="">Selecciona un sector</option>
        <option v-for="s in sectoresFiltrados" :key="s" :value="s">{{ s }}</option>
      </select>
    </form>

    <div v-if="usuariosFiltrados.length > 0" class="usuarios-list">
      <h3>Usuarios en {{ selectedCentro }} - {{ selectedSector }}</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Dedicación</th>
            <th>Grupo Lingüístico</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="usuario in usuariosFiltrados" :key="usuario.id">
            <td>{{ usuario.nombre }}</td>
            <td>{{ usuario.apellido }}</td>
            <td>{{ usuario.dedicacion }}</td>
            <td>{{ usuario.linguistico }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p v-else>Selecciona centro y sector para ver usuarios</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const centros = [
  'Boluetabarri',
  'Montaño',
  'Belategi',
  'Tolosa',
  'Sarrikue',
  'Markina',
  'Errenteria',
  'Intervención Social Bizkaia',
  'EPA Gipuzkoa',
  'EPA Bizkaia'
]

// Sectores mapeados por centro
const sectoresPorCentro = {
  Boluetabarri: ['Modo - Comercio', 'Informática', 'Climatización - Fontanería', 'Madera', 'Hostalería', 'Administración', 'Complementaria'],
  Montaño: ['Hostalería', 'Construcción - Electricidad'],
  Belategi: ['Metal'],
  // Otros centros sin sectores o sectores generales
  Tolosa: [],
  Sarrikue: [],
  Markina: [],
  Errenteria: [],
  'Intervención Social Bizkaia': [],
  'EPA Gipuzkoa': [],
  'EPA Bizkaia': []
}

const usuarios = ref([
  // Ejemplo de usuarios con centro y sector
  { id: 1, nombre: 'Ane', apellido: 'Gómez', dedicacion: 'Estudio', centro: 'Boluetabarri', sector: 'Hostalería', linguistico: 'Sí' },
  { id: 2, nombre: 'Iker', apellido: 'Martínez', dedicacion: 'Trabajo', centro: 'Boluetabarri', sector: 'Informática', linguistico: 'No' },
  { id: 3, nombre: 'Lorea', apellido: 'Ruiz', dedicacion: 'Estudio', centro: 'Montaño', sector: 'Hostalería', linguistico: 'Sí' },
  { id: 4, nombre: 'Jon', apellido: 'Sánchez', dedicacion: 'Trabajo', centro: 'Belategi', sector: 'Metal', linguistico: 'No' },
  // Más usuarios...
])

const selectedCentro = ref('')
const selectedSector = ref('')

const sectoresFiltrados = computed(() => {
  return selectedCentro.value ? sectoresPorCentro[selectedCentro.value] || [] : []
})

const usuariosFiltrados = computed(() => {
  if (!selectedCentro.value || !selectedSector.value) return []
  return usuarios.value.filter(
    u => u.centro === selectedCentro.value && u.sector === selectedSector.value
  )
})

const filtrarSectores = () => {
  selectedSector.value = ''
}
</script>

<style scoped>
.admin-dashboard {
  max-width: 800px;
  margin: 0 auto;
  padding: 30px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgb(0 0 0 / 0.1);
}

form {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  flex-wrap: wrap;
  align-items: center;
}

label {
  font-weight: bold;
  margin-right: 10px;
