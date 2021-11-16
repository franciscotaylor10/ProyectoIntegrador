var express = require("express");
var router = express.Router();
var controller = require("../controllers/postController");
var multer = require("multer")
const upload = multer({dest:"public/images/posts"})

/* GET users listing. */
router.get("/agregarPost", controller.showAgregarPost);
router.get("/detallePost/:id", controller.showDetallePost);
router.get("/editar", controller.showEditar);
router.post("/agregar", upload.single("imagen"), controller.agregar);

module.exports = router;