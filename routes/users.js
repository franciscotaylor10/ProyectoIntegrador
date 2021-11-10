var express = require("express");
var router = express.Router();
var controller = require("../controllers/userController")

/* GET users listing. */
router.get("/register", controller.showRegister);
router.get("/detalleUsuario/:id", controller.showDetalleUsuario);
router.get("/editarPerfil", controller.showEditarPerfil);
router.get("/login", controller.showLogin);

module.exports = router;
