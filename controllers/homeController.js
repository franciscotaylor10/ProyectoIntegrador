const posts = require('../data/posts');
const users = require('../data/users');
const comments = require('../data/comments');

const controller = {
  showIndex: function (req, res) {
    res.render("index", {posts: posts.lista, comments: comments.lista, usuarios:users.lista});
  },
  showResultadoBusqueda: function (req, res) {
    res.render("resultadoBusqueda");
  },
};

module.exports = controller;