const posts = require("../modules/posts");
const users = require("../modules/users");
const comments = require("../modules/comments");
// const { post } = require("../routes/users");

const controller = {
  showLogin: function (req, res) {
    res.render("social/login");
  },
  showRegister: function (req, res) {
    res.render("social/registracion");
  },
  showDetalleUsuario: function (req, res) {
    // res.render("social/detalleUsuario");
    var paramsUsername = req.params.username;
    var user;
    var post = [];

    for (let i = 0; i < users.list.length; i++) {
      const element = users.list[i];
      if (element.username == paramsUsername) {
        user = element;
      }
    }
    for (let i = 0; i < posts.list.length; i++) {
      const element = posts.list[i];
      if (element.username == paramsUsername) {
        post.push(element);
      }
    }
    if (user) {
      res.render("social/detalleUsuario", { user: user, posts: posts });
    } else {
      return "error";
    }
  },
  showEditarPerfil: function (req, res) {
    res.render("social/editarPerfil");
  },
  showMiPerfil: function (req, res) {
    res.render("social/miPerfil");
  },
};

module.exports = controller;