const posts = require("../data/posts");
const users = require("../data/users");
const comments = require("../data/comments");
const db = require("../database/models");
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
    db.User.findByPk(req.params.id)
    .then(user=>{
      res.render("detalleUsuario", { user: user});
    })
    
  },
  showEditarPerfil: function (req, res) {
    res.render("editarPerfil");
  },
};

module.exports = controller;