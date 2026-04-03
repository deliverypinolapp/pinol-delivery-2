// app.js - inicialización

window.onload = function() {
  const sesion = Storage.getSesion();
  if (sesion) {
    UI.mostrarPanel(sesion);
  } else {
    UI.mostrarLogin();
  }
};

// Exponer funciones al HTML
function mostrarRegistro() { UI.mostrarRegistro(); }
function volverLogin() { UI.volverLogin(); }
function logout() { UI.logout(); }
