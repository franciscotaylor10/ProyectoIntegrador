

const db = require('../database/models');
const post = require('../database/models/post');
const op = db.Sequelize.Op

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
     console.log(posts) 
      res.render("index", {posts:posts}); //renderizame la vista index y mandame esta info. 
    })
    
    .catch (error=> {
      console.error(error);
      // expected output: ReferenceError: nonExistentFunction is not defined
      // Note - error messages will vary depending on browser
    })
    
  },
  showResultadoBusqueda: function (req, res) {
    db.Post.findAll({
      where:{
      descripcion:{
        [op.like]:"%"+req.query.search+"%"
      }
      },
      include:[{
        association:"user"
      }]
    })
    .then(results=>{
      
      res.render("resultadoBusqueda",{
        posts:results
      });
    })
  },
  
};

module.exports = controller;