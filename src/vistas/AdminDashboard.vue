<!-- src/views/AdminDashboard.vue -->
<template>
  <div class="admin-dashboard p-6">
    <HeaderAdmin :centroNombre="centro" :sectorNombre="sector" />

    <section class="my-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="bg-blue-100 p-4 rounded-xl shadow">
        <p class="text-sm">Usuarios totales</p>
        <h2 class="text-xl font-bold">{{ totalUsuarios }}</h2>
      </div>
      <div class="bg-green-100 p-4 rounded-xl shadow">
        <p class="text-sm">Matches realizados</p>
        <h2 class="text-xl font-bold">{{ totalMatches }}</h2>
      </div>
      <div class="bg-red-100 p-4 rounded-xl shadow">
        <p class="text-sm">Plazos próximos</p>
        <h2 class="text-xl font-bold">{{ plazosPendientes }}</h2>
      </div>
    </section>

    <section class="my-6">
      <h2 class="text-lg font-semibold mb-2">Gestión de Matches</h2>
      <MatchTool :usuarios="usuarios" @onMatch="handleNewMatch" />
    </section>

    <AlertPanel :plazos="plazos" />
  </div>
</template>

<script setup>
import HeaderAdmin from '@/components/admin/HeaderAdmin.vue'
import MatchTool from '@/components/admin/MatchTool.vue'
import AlertPanel from '@/components/admin/AlertPanel.vue'

// Datos ficticios por ahora
const centro = 'CEIP San Martín'
const sector = 'Sector Norte'
const totalUsuarios = 20
const totalMatches = 8
const plazosPendientes = 3

// Simulación de usuarios para el MatchTool
const usuarios = [
  { id: 1, name: 'Aicha', tipo: 'necesita_apoyo', intereses: ['lectura', 'música'], edad: 10 },
  { id: 2, name: 'Iker', tipo: 'nativo', intereses: ['deporte', 'música'], edad: 11 },
  // ...
]

const plazos = [
  { titulo: 'Entrega informe', fecha: '2025-06-01' },
  { titulo: 'Inicio ronda 2', fecha: '2025-06-15' }
]

function handleNewMatch(match) {
  console.log('Nuevo match registrado:', match)
}
</script>

<style scoped>
.admin-dashboard {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
