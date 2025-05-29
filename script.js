const API_URL = 'https://proyectortp-production.up.railway.app/api/usuarios';

async function cargarUsuarios() {
  const res = await fetch(API_URL);
  const data = await res.json();
  const lista = document.getElementById('usuarios');
  lista.innerHTML = data.map(u => `<li>${u.nombre}</li>`).join('');
}

async function agregarUsuario() {
  const nombre = document.getElementById('nombre').value;
  await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nombre })
  });
  cargarUsuarios();
}

cargarUsuarios();
