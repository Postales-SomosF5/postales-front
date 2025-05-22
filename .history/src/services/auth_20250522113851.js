// src/services/auth.js

const TOKEN_KEY = 'auth_token'

export function login(usuario, contraseña) {
  // Mock login: si coincide usuario/contraseña, guarda token
  if (usuario === 'admin' && contraseña === '1234') {
    const token = 'fake-jwt-token'
    localStorage.setItem(TOKEN_KEY, token)
    return { success: true, token }
  }
  return { success: false, message: 'Credenciales incorrectas' }
}

export function logout() {
  localStorage.removeItem(TOKEN_KEY)
}

export function getToken() {
  return localStorage.getItem(TOKEN_KEY)
}

export function isAuthenticated() {
  return !!getToken()
}
