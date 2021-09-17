const posts = require("../modules/posts");
const users = require("../modules/users");
const comments = require("../modules/comments");

const controller = {
  showAgregarPost: function (req, res) {
    res.render("social/agregarPost");
  },
  showDetallePost: function (req, res) {
    // res.render("social/detallePost", {posts: posts.list , comments: comments.list});
    for (let i = 0; i < posts.list.length; i++) {
      const element = posts.list[i];
      if (element.id == req.params.id) {
        res.render("social/detallePost", { posts: element });
      }
    }
    // falta agregar si hay algun error
  },
};

module.exports = controller;
