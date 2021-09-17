const posts = require('../modules/posts');
const users = require('../modules/users');
const comments = require('../modules/comments');

const controller = {
  showIndex: function (req, res) {
    res.render("social/index", {posts: posts.list, comments: comments.list});
  },
  showResultadoBusqueda: function (req, res) {
    res.render("social/resultadoBusqueda");
  },
};

module.exports = controller;