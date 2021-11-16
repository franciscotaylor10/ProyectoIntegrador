var express = require("express");
var router = express.Router();
var controller = require("../controllers/userController")
var multer = require("multer")
const upload = multer({dest:"public/images/users"})

/* GET users listing. */
router.get("/register", controller.showRegister);
router.get("/detalleUsuario/:id", controller.showDetalleUsuario);
router.get("/editarPerfil", controller.showEditarPerfil);
router.get("/login", controller.showLogin);
router.post("/register",upload.single("imagen"),controller.crearUsuario);
router.post("/login", controller.logIn);
router.post("/logout",controller.logout)

module.exports = router;
