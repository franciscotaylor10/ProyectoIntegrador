var express = require("express");
var router = express.Router();
var controller = require("../controllers/usersController");

/* GET users listing. */
router.get("/register", controller.showRegister);
router.get("/detalleUsuario/:username", controller.showDetalleUsuario);
router.get("/editarPerfil", controller.showEditarPerfil);
router.get("/miPerfil", controller.showMiPerfil);
router.get("/login", controller.showLogin);

module.exports = router;
