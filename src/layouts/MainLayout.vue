<template>
  <div class="layout-col">
    <NavbarComp />
    <main class="main-content">
      <router-view />
    </main>
    <FooterComp />
  </div>
</template>

<script setup>
import NavbarComp from '@/components/NavbarComp.vue'
import FooterComp from '@/components/FooterComp.vue'
</script>

<style scoped>
.layout-col {
  display: flex;
  flex-direction: column;
  min-height: 75vh;
}
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  background:radial-gradient(circle,rgb(179, 255, 211) 20%, rgb(163, 243, 189) 51%, rgb(255, 211, 124) 100%);

}
</style>
