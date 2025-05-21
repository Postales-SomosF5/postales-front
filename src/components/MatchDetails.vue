<!-- src/components/MatchDetails.vue -->
<template>
  <section class="match-details" v-if="match">
    <h2>Tu compañero/a de cartas</h2>
    <ul>
      <li><strong>Nombre:</strong> {{ match.name }}</li>
      <li><strong>Edad:</strong> {{ match.edad }}</li>
      <li><strong>País:</strong> {{ match.pais }}</li>
      <li><strong>Intereses:</strong> {{ match.intereses.join(', ') }}</li>
    </ul>
  </section>
</template>

<script setup>
const props = defineProps({
  match: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.match-details {
  background-color: #e3ffe3;
  padding: 1rem;
  border-radius: 10px;
}
</style>
