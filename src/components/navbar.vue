<template>
  <header class="navbar">
    <div class="logo">
      <img :src="logo" alt="Logo" />
    </div>
    <nav class="menu">
      <a href="#">Home</a>
      <button class="registro-btn" @click="openRegister">Registro</button>
      <button class="login-btn" @click="openLogin">Login</button>
    </nav>

    <!-- Register Modal -->
    <div v-if="showRegister" class="modal" @click.self="closeModals">
      <div class="modal-content">
        <span class="close" @click="closeModals">&times;</span>
        <h2>Registro Form</h2>

        <label for="nombre">Nombre</label>
        <input id="nombre" type="text" placeholder="Nombre" v-model="registerForm.nombre" />

        <label for="apellido">Apellido</label>
        <input id="apellido" type="text" placeholder="Apellido" v-model="registerForm.apellido" />

        <label for="dedicacion">¿A qué te dedicas en Peñascal Kooperatiba?</label>
        <select id="dedicacion" v-model="registerForm.dedicacion">
          <option disabled value="">Selecciona una opción</option>
          <option>Estudio</option>
          <option>Trabajo</option>
        </select>

        <label for="centro">¿En qué centro formativo sueles estar?</label>
        <select id="centro" v-model="registerForm.centro">
          <option disabled value="">Selecciona un centro</option>
          <option>Boluetabarri / Modo - Comercio</option>
          <option>Boluetabarri / Informática</option>
          <option>Boluetabarri / Climatización - Fontanería</option>
          <option>Boluetabarri / Madera</option>
          <option>Boluetabarri / Hostalería</option>
          <option>Boluetabarri / Administración</option>
          <option>Boluetabarri / Complementaria</option>
          <option>Montaño / Hostalería</option>
          <option>Montaño / Construcción - Electricidad</option>
          <option>Belategi / Metal</option>
          <option>Tolosa</option>
          <option>Sarrikue</option>
          <option>Markina</option>
          <option>Errenteria</option>
          <option>Intervención Social Bizkaia</option>
          <option>EPA Gipuzkoa</option>
          <option>EPA Bizkaia</option>
        </select>

        <label for="linguistico">¿Perteneces a un grupo de refuerzo lingüístico?</label>
        <select id="linguistico" v-model="registerForm.linguistico">
          <option disabled value="">Selecciona una opción</option>
          <option>Sí</option>
          <option>No</option>
        </select>

        <button class="registro-btn" @click="submitRegister">Registrar</button>

        <p class="switch-text">
          ¿Ya tienes cuenta?
          <a href="#" @click.prevent="switchToLogin">Login</a>
        </p>
      </div>
    </div>

    <!-- Login Modal -->
    <div v-if="showLogin" class="modal" @click.self="closeModals">
      <div class="modal-content">
        <span class="close" @click="closeModals">&times;</span>
        <h2>Login Form</h2>

        <label for="login-email">Email</label>
        <input id="login-email" type="email" placeholder="Email" v-model="loginForm.email" />

        <label for="login-password">Password</label>
        <input id="login-password" type="password" placeholder="Password" v-model="loginForm.password" />

        <button class="login-btn" @click="submitLogin">Login</button>

        <p class="switch-text">
          ¿No tienes cuenta?
          <a href="#" @click.prevent="switchToRegister">Registro</a>
        </p>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      logo: 'https://your-logo-url.com/logo.png',  // Apni logo ki url yahan lagao
      showRegister: false,
      showLogin: false,
      registerForm: {
        nombre: '',
        apellido: '',
        dedicacion: '',
        centro: '',
        linguistico: ''
      },
      loginForm: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
    openRegister() {
      this.showRegister = true;
      this.showLogin = false;
      this.resetForms();
    },
    openLogin() {
      this.showLogin = true;
      this.showRegister = false;
      this.resetForms();
    },
    closeModals() {
      this.showLogin = false;
      this.showRegister = false;
      this.resetForms();
    },
    switchToLogin() {
      this.showRegister = false;
      this.showLogin = true;
      this.resetForms();
    },
    switchToRegister() {
      this.showLogin = false;
      this.showRegister = true;
      this.resetForms();
    },
    resetForms() {
      this.registerForm = {
        nombre: '',
        apellido: '',
        dedicacion: '',
        centro: '',
        linguistico: ''
      };
      this.loginForm = {
        email: '',
        password: ''
      };
    },
    submitRegister() {
      // Yahan validation ya API call add kar sakte hain
      console.log('Registro data:', this.registerForm);
      alert('Registro enviado');
      this.closeModals();
    },
    submitLogin() {
      // Yahan validation ya API call add kar sakte hain
      console.log('Login data:', this.loginForm);
      alert('Login enviado');
      this.closeModals();
    }
  }
};
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
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.3s;
}

.logo:hover {
  color: #fd7e14;
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
