const posts = require("../data/posts");
const users = require("../data/users");
const comments = require("../data/comments");
// const { post } = require("../routes/users");

const controller = {
  showLogin: function (req, res) {
    res.render("login");
  },
  showRegister: function (req, res) {
    res.render("registracion");
  },
  showDetalleUsuario: function (req, res) {
    // res.render("detalleUsuario");
    for (let i = 0; i < users.lista.length; i++) {
      const element = users.lista[i];
      if (element.id == req.params.id) {
        res.render("detalleUsuario", { usuario: element, posts:posts.lista});
      }
    }
  },
  showEditarPerfil: function (req, res) {
    res.render("editarPerfil");
  },
  showMiPerfil: function (req, res) {
    res.render("miPerfil",{usuario:users.lista[0]});
  },
};

module.exports = controller;