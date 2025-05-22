// src/services/userApi.js

const API_URL = 'http://localhost:3000/usuarios'; // Cambia según tu backend

export async function obtenerUsuarios() {
  const res = await fetch(API_URL);
  return await res.json();
}

export async function crearUsuario(usuario) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(usuario)
  });
  return await res.json();
}

export async function actualizarUsuario(id, datos) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datos)
  });
  return await res.json();
}

export async function eliminarUsuario(id) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  });
  return res.ok;
}
