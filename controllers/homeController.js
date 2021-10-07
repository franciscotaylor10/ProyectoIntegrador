const posts = require('../data/posts'); //borrar?
const users = require('../data/users'); //borrar?
const comments = require('../data/comments'); //borrar?

const db = require('../database/models');

const controller = {
  showIndex: function (req, res) {
    db.posts.findAll()
    .then((posts) =>{
      res.render("index", {posts, comments: comments.lista, usuarios: users.lista});
    })
    .catch((error) => {
      res.send(error)
    })
    
  },
  showResultadoBusqueda: function (req, res) {
    res.render("resultadoBusqueda");
  },
};

module.exports = controller;