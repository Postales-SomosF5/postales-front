<template>
  <div class="admin-dashboard">
    <h2>Usuarios del centro y sector seleccionados</h2>

    <div class="tabla-usuarios">
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Centro</th>
            <th>Refuerzo lingüístico</th>
            <th>Intereses</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="usuario in usuariosFiltrados" :key="usuario.id">
            <td>{{ usuario.nombre }}</td>
            <td>{{ usuario.apellido }}</td>
            <td>{{ usuario.centro }}</td>
            <td>{{ usuario.linguistico }}</td>
            <td>{{ usuario.intereses }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Simulación de usuarios (esto se cargaría desde una API real)
const usuarios = ref([
  {
    id: 1,
    nombre: 'Ane',
    apellido: 'García',
    centro: 'Boluetabarri / Modo - Comercio',
    linguistico: 'Sí',
    intereses: 'Moda, Ventas, Comunicación',
    sector: 'comercio',
  },
  {
    id: 2,
    nombre: 'Jon',
    apellido: 'Martínez',
    centro: 'Errenteria',
    linguistico: 'No',
    intereses: 'Construcción, Madera',
    sector: 'construccion',
  },
])

// Variables del admin (simuladas)
const centroAdmin = ref('Boluetabarri / Modo - Comercio')
const sectorAdmin = ref('comercio')

// Filtro por centro y sector
const usuariosFiltrados = computed(() =>
  usuarios.value.filter(
    (u) =>
      u.centro === centroAdmin.value &&
      u.sector === sectorAdmin.value
  )
)
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
  color: #1f2937;
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
   color:rgb(0, 141, 12);
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

