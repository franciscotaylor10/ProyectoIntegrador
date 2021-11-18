const db = require("../database/models");
const post = require("../database/models/post");

const controller = {
  showAgregarPost: function (req, res) {
    if(!req.session.user){
      res.redirect("/")
    }
    res.render("agregarPost",{error:null});
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
    db.Post.findByPk(req.params.id)
    .then(post=>{
    res.render("editarPost",{
      post: post,
      error: null
    });  
    })
  },
  eliminar: function (req, res) {
    db.Post.destroy({
      where:{
        id:req.body.id
      }
    })
.then(()=>{
  res.redirect("/")
})
  },
  editarPost: function(req, res){
    db.Post.findByPk(req.params.id)
    .then(post=>{
    if(!req.body.descripcion && !req.file){
      res.render("editarPost",{error:"Edite algún campo",post:post}); 
    }
  })
    if(!req.file && req.body.descripcion){
      console.log("Llegue aca")
      db.Post.create({
        descripcion:req.body.descripcion
      },{
        where:{
          id: req.body.id
        }
      })
      .then(post=>{
        res.redirect("/posts/detallePost/"+post.id)
      })
    }else if(req.file && !req.body.descripcion){
      req.body.imagen = (req.file.destination + req.file.filename).replace("public", "")
      db.Post.create({
        imagen: req.body.imagen
      },{
        where:{
          id: req.body.id
        }
      })
    .then(post=>{
      res.redirect("/posts/detallePost/"+post.id)
    })
    }else{
      req.body.imagen = (req.file.destination + req.file.filename).replace("public", "")
      db.Post.create({
        descripcion: req.body.descripcion,
        imagen: req.body.imagen

      },{
        where:{
          id: req.body.id
        }
      })
    .then(post=>{
      res.redirect("/posts/detallePost/"+post.id)
    })
    }
    
  }
};

module.exports = controller;
