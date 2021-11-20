const db = require("../database/models")
const bcrypt = require("bcryptjs")
// const { post } = require("../routes/users");
const validateUser = function (req) {
  const errors = [];
  if (!req.body.contra || req.body.contra.length < 3) {
    errors.push('LA CONSTRASEÑA DEBE TENER MÍNIMO 3 CARACTERES');
  }
  if (!req.body.email) {
    errors.push('EL EMAIL ES REQUERIDO');
  } else {
    db.User.findOne({
        where: {
          email: req.body.email
        }
      })
      .then(user => {
        if (user) {
          errors.push('EL EMAIL YA ESTÁ SIENDO UTILIZADO');
        }
      })
  }
  if (!req.body.nombre_de_usuario) {
    errors.push('EL NOMBRE DE USUARIO ES REQUERIDO');
  }
  if (!req.file) {
    errors.push('LA IMAGEN ES REQUERIDA');
  }
  if (!req.body.fecha) {
    errors.push('LA FECHA DE NACIMIENTO ES REQUERIDA');
  }
  if (!req.body.numero_telefono) {
    errors.push('EL NÚMERO DE TELÉFONO ES REQUERIDO');
  }

  return errors;
}

const controller = {
  showLogin: function (req, res) {
    if(req.session.user){
      res.redirect("/")
    }
    res.render("login", {
      error: null
    });
  },
  logIn: function (req, res) {
    if (!req.body.contra || req.body.contra.length < 3) {
      res.render("login", {
        error: 'LA CONSTRASEÑA DEBE TENER MÍNIMO 3 CARACTERES'
      });
    }
    if (!req.body.email) {
      res.render("login", {
        error: 'EL EMAIL ES REQUERIDO'
      });
    }
    db.User.findOne({
        where: {
          email: req.body.email
        }
      })
      .then(user => {
        if (!user) {
          res.render("login", {
            error: 'EL EMAIL NO ES CORRECTO'
          });
        }
        if (bcrypt.compareSync(req.body.contra, user.contra)) {
          req.session.user = user
          if (req.body.recordame) {
            //armar la Cookie: 
            res.cookie("user", user, {
              maxAge: 1000 * 60 * 60 * 24 * 30
            })
          }

          res.redirect("/")
        } else {
          res.render("login", {
            error: 'LA CONTRASEÑA NO ES CORRECTA'
          });
        }
      })
  },

  showRegister: function (req, res) {
    if(req.session.user){
      res.redirect("/")
    }
    res.render("registracion", {
      errors: null
    });
  },
  crearUsuario: function (req, res) {
    if (req.file) {
      req.body.imagen = (req.file.destination + req.file.filename).replace("public", "")
    }
    const errors = validateUser(req);
    if (errors.length > 0) {
      return res.render('registracion', {
        errors
      });
    }
    req.body.contra = bcrypt.hashSync(req.body.contra, 10);
    db.User.create(req.body)
      .then(post => {
        res.redirect('/users/login');
      }).catch(error => {
        return res.render(error);
      })
  },

  showDetalleUsuario: function (req, res) {


    db.User.findByPk(req.params.id, {
        include: [{
            association: "posts",
            order:[["createdAt","DESC"]],

          },
          {
            association: "followers"
          },
          {
            association: "following"
          }
        ]
      })

      .then(user => {
        let following = false
                if (req.session.user) {
                    if (req.session.user.id == user.id) {
                        req.session.user = user
                    }
                    user.followers.forEach(follow => {
                        if (req.session.user.id == follow.seguidor_id) {
                            following = true
                        }
                    });
                    console.log(following);
                    res.render('detalleUsuario', {
                        user: user,
                        following: following
                    })
                } else {
                    console.log(following);
                    res.render('detalleUsuario', {
                        user: user,
                        following: following
                    })
                }
      })

  },
  showEditarPerfil: function (req, res) {
    res.render("editarPerfil");
  },
 
logout: function (req,res){
  req.session.destroy()
  res.clearCookie("user")
  res.redirect("/")
},
follow: function (req,res){
db.Follower.create({
  seguidor_id: req.session.user.id,
  seguido_id: req.body.id
})
.then(respuesta=>{
  res.redirect("/users/detalleUsuario/"+req.body.id)
})
},
unfollow: function (req,res){
  db.Follower.destroy({
    where:{
      seguidor_id: req.session.user.id,
      seguido_id: req.body.id
    }
  })
  .then(respuesta=>{
    res.redirect("/users/detalleUsuario/"+req.body.id)
  })
}
};

module.exports = controller;