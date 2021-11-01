

const db = require('../database/models');

const controller = {
  showIndex: function (req, res) {
    db.Post.findAll({   //db esta siempre. La segunda parte es el nombre del modelo. La tercera poarte decimos que vamos a hacer con este modelo. 
      include:[{
        association:"user"
      },{
        association:"comments",
        include:[{
        association:"user"
        }]
      }]
    })
    .then((posts) =>{ //Usamos el .then para decirle que cuando me traiga la info haga lo siguiente. 
      res.render("index", {posts:posts}); //renderizame la vista index y mandame esta info. 
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