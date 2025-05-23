<template>
  <div class="dashboard-container">
    <div class="card">
      <UserFormView />
    </div>
    <div class="card">
      <MatchData />
    </div>
  </div>
</template>

<script setup>
import UserFormView from '@/views/UserFormView.vue'
import MatchData from '@/components/MatchData.vue'
</script>

<style scoped>
.dashboard-container {
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 30px;
  padding: 40px 20px;
  background-color: #f2f2f2;
  min-height: 100vh;
}

.card {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 420px;
  padding: 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  /* No height fijo ni min-height */
}
</style>