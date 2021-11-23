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
    db.Post.create({...req.body,users_id:req.session.user.id, fecha:Date.now()})
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
  },{
    association: "likes"
  }],
  order: [["comments","id","desc"]]
})
.then(post=>{
  let likeado = false
  if(req.session.user){
    post.likes.forEach(like => {
      if (req.session.user.id == like.users_id) {
          likeado = true
      }
  });
  }
  res.render("detallePost", { post: post, likeado:likeado});
})
        
  },
  showEditar: function (req, res) {
    if(!req.session.user){
      res.redirect("/")
    }
    db.Post.findByPk(req.params.id)
    .then(post=>{
      if(post.users_id == req.session.user.id){
        res.render("editarPost",{
          post: post,
          error: null
        }); 
      }else{
        res.redirect("/")  
      }
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
      db.Post.update({
        descripcion:req.body.descripcion
      },{
        where:{
          id: req.body.id
        }
      })
      .then(post=>{
        res.redirect("/")
      })
    }else if(req.file && !req.body.descripcion){
      req.body.imagen = (req.file.destination + req.file.filename).replace("public", "")
      db.Post.update({
        imagen: req.body.imagen
      },{
        where:{
          id: req.body.id
        }
      })
    .then(post=>{
      res.redirect("/")
    })
    }else{
      req.body.imagen = (req.file.destination + req.file.filename).replace("public", "")
      db.Post.update({
        descripcion: req.body.descripcion,
        imagen: req.body.imagen

      },{
        where:{
          id: req.body.id
        }
      })
    .then(post=>{
      res.redirect("/")
    })
    }
  },
  comentario: function(req, res){
if(!req.session.user){
  res.redirect("/users/login")
}
db.Comment.create({
  post_id: req.body.post_id,
  users_id: req.session.user.id,
  comentario: req.body.comentario
})
.then(comentario=>{
    res.redirect("/posts/detallePost/"+comentario.post_id)
})
  },
  like: function(req, res){
    if(!req.session.user){
      res.redirect("/users/login")
    }
  db.Like.create({
    post_id: req.params.id,
    users_id: req.session.user.id
  })
  .then(()=>{
    res.redirect("/posts/detallePost/"+req.params.id)
  })
  },
  dislike: function(req, res){
    db.Like.destroy({
      where:{
        post_id: req.params.id,
        users_id: req.session.user.id
      }
    })
    .then(()=>{
      res.redirect("/posts/detallePost/"+req.params.id)
    })
    },

};

module.exports = controller;
