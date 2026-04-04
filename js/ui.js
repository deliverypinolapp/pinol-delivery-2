// ui.js - manejo de interfaz

const UI = {
  mostrarLogin: function() {
    this._show("login");
  },

  mostrarRegistro: function() {
    this._show("registro");
  },

  mostrarPanel: function(user) {
    this._hideAll();
    const panel = document.getElementById("panel");
    panel.classList.remove("hidden");
    panel.style.animation = "fadeIn 0.4s ease";
    document.getElementById("userText").innerText = "Usuario: " + user;
  },

  volverLogin: function() {
    this._show("login");
  },

  logout: function() {
    Storage.clearSesion();
    location.reload();
  },

  mostrarMensaje: function(texto, id) {
    document.getElementById(id).innerText = texto;
  },

  _hideAll: function() {
    document.getElementById("login").classList.add("hidden");
    document.getElementById("registro").classList.add("hidden");
    document.getElementById("panel").classList.add("hidden");
  },

  _show: function(id) {
    this._hideAll();
    document.getElementById(id).classList.remove("hidden");
  }
};
