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
  }else{
    db.User.findOne({where:{email: req.body.email}})
    .then(user=>{
      if(user){
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
    res.render("login");
  },
  showRegister: function (req, res) {
    res.render("registracion");
  },
  crearUsuario: function (req, res) {
    if(req.file){
      req.body.imagen = (req.file.destination+req.file.filename).replace("public","")
    }
    const errors = validateUser(req);
    if (errors.length > 0) {
      return res.render('registracion', { errors });
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

      .then(user => {
        res.render("detalleUsuario", {
          user: user
        });
      })

  },
  showEditarPerfil: function (req, res) {
    res.render("editarPerfil");
  },
};

module.exports = controller;