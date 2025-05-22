<template>
  <header class="navbar">
    <div class="logo">
      <img :src="logo" alt="src/assets/logo_header_transparent.png" />
    </div>
    <nav class="menu">
      <a href="#">Home</a>
      <button class="registro-btn" @click="openRegister">Registro</button>
      <button class="login-btn" @click="openLogin">Login</button>
    </nav>

    <!-- Login Modal -->
    <div v-if="showLogin" class="modal" @click.self="closeModals">
      <div class="modal-content">
        <span class="close" @click="closeModals">&times;</span>
        <h2>Login Form</h2>

        <!-- FORM TAG ADDED -->
        <form @submit.prevent="submitLogin">
          <label for="login-email">Email</label>
          <input id="login-email" type="email" placeholder="Email" v-model="loginForm.email" required />

          <label for="login-password">Password</label>
          <input id="login-password" type="password" placeholder="Password" v-model="loginForm.password" required />

          <button type="submit" class="login-btn">Login</button>
        </form>

        <p class="switch-text">
          ¿No tienes cuenta?
          <a href="#" @click.prevent="switchToRegister">Registro</a>
        </p>
      </div>
    </div>
  </header>
</template>


<script setup>
import { ref } from 'vue'

const logo = 'src/assets/logo_header_transparent.png'
const showLogin = ref(false)
const loginForm = ref({
  email: '',
  password: ''
})

function openLogin() {
  showLogin.value = true
}

function closeModals() {
  showLogin.value = false
}

function submitLogin() {
  alert('Login enviado')
  closeModals()
}
</script>


<style scoped>
.navbar {
position: fixed;
top: 0;
left: 0;
width: 100%;
z-index: 1000;
display: flex;
justify-content: space-between;
align-items: center;
background-color: #0f4d03;
padding: 15px 30px;
color: white;
}

.logo {
  width: 150px;    
  height: auto;    
  cursor: pointer;
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
}

.menu {
display: flex;
align-items: center;
gap: 15px;
padding-right: 40px;
}

.menu a {
color: white;
text-decoration: none;
font-size: 16px;
}

.registro-btn,
.login-btn {
padding: 8px 14px;
border-radius: 6px;
cursor: pointer;
border: 2px solid transparent;
transition: all 0.3s ease;
font-weight: 600;
}

.registro-btn {
background-color: #337442;
color: white;
border-color: #28a745;
}

.registro-btn:hover {
background-color: transparent;
color: #fd7e14;
border-color: #fd7e14;
}

.login-btn {
background-color: #fd7e14;
color: white;
border-color: #fd7e14;
}

.login-btn:hover {
background-color: transparent;
color: #337442;
border-color: #28a745;
}

/* Modal Base */
.modal {
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.5);
display: flex;
justify-content: center;
align-items: center;
z-index: 2000;
}

.modal-content {
background: white;
padding: 40px 30px; 
border-radius: 12px;
width: 400px; 
text-align: left; 
position: relative;
animation: fadeIn 0.3s ease-in-out;
}

.modal-content label {
margin-top: 20px;
font-size: 15px;
font-weight: 600;
color: #333;
}

.modal-content input,
.modal-content select {
width: 100%;
padding: 10px;
margin: 10px 0;
border-radius: 6px;
border: 1px solid #ccc;
transition: border-color 0.3s ease, box-shadow 0.3s ease;
background-color: white;
}

.modal-content input:hover,
.modal-content select:hover {
border-color: #28a745;
}

.modal-content input:focus,
.modal-content select:focus {
border-color: #fd7e14;
box-shadow: 0 0 5px #fd7e14;
outline: none;
}

.logo img {
height: 40px;
}

/* Close Button */
.close {
position: absolute;
top: 10px;
right: 15px;
font-size: 26px;
font-weight: bold;
cursor: pointer;
color: #333;
user-select: none;
}

.switch-text {
margin-top: 25px;
font-size: 14px;
color: #555;
text-align: center;
}

.switch-text a {
color: #fd7e14;
cursor: pointer;
text-decoration: underline;
margin-left: 5px;
transition: color 0.3s ease;
}

.switch-text a:hover {
color: #337442;
}

/* Animation */
@keyframes fadeIn {
from {
opacity: 0;
transform: scale(0.95);
}
to {
opacity: 1;
transform: scale(1);
}
}
</style>

