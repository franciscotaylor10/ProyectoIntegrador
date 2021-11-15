const db = require("../database/models")

const controller = {
    showDetalleUsuario: (req,res)=>{
        db.Post.findAll()
    }
}
module.exports = controller