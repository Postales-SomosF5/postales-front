<template>
  <div class="modal" @click.self="$emit('close')">
    <div class="modal-content">
      <span class="close" @click="$emit('close')">&times;</span>
      <h2>Registro Form</h2>

      <label for="nombre">Nombre</label>
      <input id="nombre" type="text" placeholder="Nombre" v-model="form.nombre" />

      <label for="apellido">Apellido</label>
      <input id="apellido" type="text" placeholder="Apellido" v-model="form.apellido" />

      <label for="dedicacion">¿A qué te dedicas en Peñascal Kooperatiba?</label>
      <select id="dedicacion" v-model="form.dedicacion">
        <option disabled value="">Selecciona una opción</option>
        <option>Estudio</option>
        <option>Trabajo</option>
      </select>

      <label for="centro">¿En qué centro formativo sueles estar?</label>
      <select id="centro" v-model="form.centro">
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
      <select id="linguistico" v-model="form.linguistico">
        <option disabled value="">Selecciona una opción</option>
        <option>Sí</option>
        <option>No</option>
      </select>

      <button class="registro-btn" @click="submit">Registrar</button>

      <p class="switch-text">
        ¿Ya tienes cuenta?
        <a href="#" @click.prevent="$emit('switch-to-login')">Login</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserForm',
  data() {
    return {
      form: {
        nombre: '',
        apellido: '',
        dedicacion: '',
        centro: '',
        linguistico: ''
      }
    };
  },
  methods: {
    submit() {
      console.log('Registro data:', this.form);
      alert('Registro enviado');
      this.$emit('close');
    }
  }
};
</script>

<style scoped>
/* Same modal styles here as in your original code... */
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
