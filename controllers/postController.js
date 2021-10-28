const db = require("../database/models")

const controller = {
  showAgregarPost: function (req, res) {
    res.render("agregarPost");
  },
  showDetallePost: function (req, res) {
    // res.render("social/detallePost", {posts: posts.list , comments: comments.list});
db.Post.findByPk(req.params.id)
.then(post=>{
  res.render("detallePost", { post: post});
})
        
  },
};

module.exports = controller;
