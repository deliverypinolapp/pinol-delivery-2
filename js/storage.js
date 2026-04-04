// storage.js - manejo de localStorage

const Storage = {
  getUsuarios: function() {
    return JSON.parse(localStorage.getItem("usuarios")) || [
      { user: "admin", pass: "1234" }
    ];
  },

  setUsuarios: function(users) {
    localStorage.setItem("usuarios", JSON.stringify(users));
  },

  setSesion: function(user) {
    localStorage.setItem("usuario", user);
  },

  getSesion: function() {
    return localStorage.getItem("usuario");
  },

  clearSesion: function() {
    localStorage.removeItem("usuario");
  }
};
