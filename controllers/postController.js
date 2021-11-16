const db = require("../database/models");
const post = require("../database/models/post");

const controller = {
  showAgregarPost: function (req, res) {
    if(!req.session.user){
      res.redirect("/")
    }
    res.render("agregarPost");
  },
  agregar:function (req, res) {
    if(!req.body.descripcion){
      res.render("agregarPost",{error:"La descripción es requerida"}); 
    }
    if(!req.file){
      res.render("agregarPost",{error:"La imagen es requerida"});   
    }
    req.body.imagen = (req.file.destination + req.file.filename).replace("public", "")
    db.Post.create({...req.body,users_id:req.session.user.id})
    .then(post=>{
      res.redirect("/posts/detallePost/"+post.id)
    })
  },

   showDetallePost: function (req, res) {
    // res.render("social/detallePost", {posts: posts.list , comments: comments.list});
db.Post.findByPk(req.params.id,{
  include:[{
    association: "user"

  },{
    association: "comments",
    include:[{
      association: "user"
    }]
  }]
})
.then(post=>{
  res.render("detallePost", { post: post});
})
        
  },
  showEditar: function (req, res) {
    if(!req.session.user){
      res.redirect("/")
    }
    res.render("editarPost");
  },
};

module.exports = controller;
