const db = require("../database/models")
// const { post } = require("../routes/users");

const controller = {
  showLogin: function (req, res) {
    res.render("login");
  },
  showRegister: function (req, res) {
    res.render("registracion");
  },
  showDetalleUsuario: function (req, res) {
    
    
   db.User.findByPk(req.params.id,{
    include:[{
      association: "posts"
  
    },
    {
      association: "followers"
    },
    {
      association: "following"
    }
    ]
  })

   .then(user=>{
    res.render("detalleUsuario",{user:user});
   })
    
  },
  showEditarPerfil: function (req, res) {
    res.render("editarPerfil");
  },
};

module.exports = controller;