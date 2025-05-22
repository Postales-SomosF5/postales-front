<script setup>

import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'
</script>

<template>
    <div id="app">
    <Navbar />
    <router-view />
  </div>
   <Footer />
   <Navbar />
</template>

<style scoped>

</style>
