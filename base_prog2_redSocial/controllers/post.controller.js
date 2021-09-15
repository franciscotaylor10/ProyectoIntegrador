const Post = require('../models/Post')

exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create a Tutorial
    const post = new Post({
    
      titulo: 'tituloPost',
      texto: 'holaaa',
      comentarios:'',
      fecha:'',
      
    });
  
    // Save Tutorial in the database
    tutorial
      .save(tutorial)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
      });
    });
};