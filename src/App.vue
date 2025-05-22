<script setup>
import Footer from './components/Footer.vue'
import Navbar from './components/NavbarComponent.vue'
import UserformView from './vistas/UserformView.vue';

</script>

<template>
  <Navbar />
 <UserformView v-if="showRegister" />

  <Footer />
</template>

<style scoped>
/* Add styles here */
</style>
