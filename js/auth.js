// auth.js - lógica de autenticación

let usuarios = Storage.getUsuarios();

function login() {
  const user = document.getElementById("usuario").value;
  const pass = document.getElementById("clave").value;

  for (let i = 0; i < usuarios.length; i++) {
    if (user === usuarios[i].user && pass === usuarios[i].pass) {
      Storage.setSesion(user);
      UI.mostrarPanel(user);
      return;
    }
  }

  UI.mostrarMensaje("Datos incorrectos ❌", "mensaje");
}

function registrar() {
  const user = document.getElementById("nuevoUser").value;
  const pass = document.getElementById("nuevoPass").value;

  if (!user || !pass) {
    UI.mostrarMensaje("Completa todos los campos ⚠️", "mensajeRegistro");
    return;
  }

  usuarios.push({ user, pass });
  Storage.setUsuarios(usuarios);

  UI.mostrarMensaje("Usuario creado ✅", "mensajeRegistro");
}
