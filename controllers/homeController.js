const posts = require('../modules/posts');
const users = require('../modules/users');
const comments = require('../modules/comments');

const controller = {
  showIndex: function (req, res) {
    res.render("index", {posts: posts.lista, comments: comments.lista, usuarios:users.lista});
  },
  showResultadoBusqueda: function (req, res) {
    res.render("resultadoBusqueda");
  },
};

module.exports = controller;