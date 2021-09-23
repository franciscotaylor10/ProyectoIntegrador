var express = require("express");
var router = express.Router();
var controller = require("../controllers/homeController");

/* GET home page. */
router.get("/", controller.showIndex);
router.get("/resultadoBusqueda", controller.showResultadoBusqueda);

module.exports = router;