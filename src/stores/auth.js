import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useApi } from '@/composables/useApi.js'

// defineStore crea un "almacén" como cajón de datos global
export const useAuthStore = defineStore('auth', () => {

  const user = ref(null)
  const token = ref(null)
  const isAuthenticated = ref(false)

  // Cargar el estado del usuario desde sessionStorage
  const storedUser = sessionStorage.getItem('user');
  const storedToken = sessionStorage.getItem('token');
  if (storedUser) {
    try {
      const parsedUser = JSON.parse(storedUser);
      if (parsedUser && parsedUser.rol_id) { // Asegurar que rol_id esté presente
        user.value = parsedUser;
        isAuthenticated.value = true;
      } else {
        console.error('El usuario almacenado no tiene un rol válido:', parsedUser);
      }
    } catch (error) {
      console.error('Error al parsear el usuario almacenado:', error);
    }
  }
  if (storedToken) {
    token.value = storedToken;
  }

  // Función para login
  async function login(email, password) {
    try {
      const { postData } = useApi();

      const response = await postData('/api/auth/login', { email, contrasena: password }); // Cambiar a POST para el login
      console.log('Datos de usuario:', response.data); // Agregar un console.log para inspeccionar los datos
      const userData = {
        ...response.data,
        rol_id: response.data.rol, // Mapear "rol" a "rol_id"
      };

      if (userData) {
        user.value = userData;
        isAuthenticated.value = true;
        sessionStorage.setItem('user', JSON.stringify(userData));
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error de login:', error);
      return false;
    }
  }

  // Función para registro
  async function register(name, email, password) {
    try {
      const { postData } = useApi();

      // Realizar el registro en el backend
      const response = await postData('/api/auth/register', { name, email, password });
      console.log('Respuesta del registro:', response.data);

      // Verificar si el token está presente en la respuesta
      const token = response.data.token;
      if (!token) {
        throw new Error('Token faltante en la respuesta del servidor.');
      }

      // Guardar usuario y token en el estado y en sessionStorage
      const userData = {
        ...response.data,
        rol_id: response.data.rol, // Mapear "rol" a "rol_id"
      };
      user.value = userData;
      token.value = token;
      isAuthenticated.value = true;
      sessionStorage.setItem('user', JSON.stringify(userData));
      sessionStorage.setItem('token', token);

      return true;
    } catch (error) {
      console.error('Error de registro:', error);
      return false;
    }
  }

  // Función para actualizar perfil
  async function updateProfile(updatedUser) {
    try {
      const { putData } = useApi();
      const response = await putData(`/api/usuarios/${updatedUser.id}`, updatedUser); // Ajustar al endpoint correcto
      user.value = response.data;
      sessionStorage.setItem('user', JSON.stringify(response.data));
      return true;
    } catch (error) {
      console.error('Error al actualizar el perfil:', error);
      return false;
    }
  }

  // Función para guardar datos de autenticación
  function setAuthData(userData, authToken) {
    if (!userData || !authToken) {
      console.error('Datos de autenticación inválidos:', { userData, authToken });
      return;
    }
    console.log('Guardando datos de autenticación:', { userData, authToken });
    user.value = userData;
    token.value = authToken;
    isAuthenticated.value = true;
    sessionStorage.setItem('user', JSON.stringify(userData));
    sessionStorage.setItem('token', authToken);
    sessionStorage.setItem('authToken', authToken); // Para compatibilidad con el resto del frontend
    console.log('Datos guardados en sessionStorage:', {
      user: sessionStorage.getItem('user'),
      token: sessionStorage.getItem('token'),
      authToken: sessionStorage.getItem('authToken'),
    });
  }

  // Función para limpiar datos de autenticación
  function clearAuthData() {
    user.value = null;
    token.value = null;
    isAuthenticated.value = false;

    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
  }

  function logout() {
    user.value = null
    token.value = null
    isAuthenticated.value = false
    sessionStorage.removeItem('user')
    sessionStorage.removeItem('token')
  }

  // Exponemos lo que queremos que otros usen
  return { user, token, isAuthenticated, login, register, updateProfile, logout, setAuthData, clearAuthData }
})