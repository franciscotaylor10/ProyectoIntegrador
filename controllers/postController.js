const posts = require("../modules/posts");
const users = require("../modules/users");
const comments = require("../modules/comments");

const controller = {
  showAgregarPost: function (req, res) {
    res.render("agregarPost");
  },
  showDetallePost: function (req, res) {
    // res.render("social/detallePost", {posts: posts.list , comments: comments.list});
    for (let i = 0; i < posts.lista.length; i++) {
      const element = posts.lista[i];
      if (element.id == req.params.id) {
        res.render("detallePost", { post: element, usuarios:users.lista,comentarios:comments.lista});
      }
    }
    // falta agregar si hay algun error
  },
};

module.exports = controller;
