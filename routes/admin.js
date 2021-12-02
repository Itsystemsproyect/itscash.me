const Router = require("express");
const Usuario = require("../models/users");
const auth = require("../middleware/auth");
const isAdmin = require("../middleware/isAdmin");

const router = Router();

// @route       GET api/admin
// @desc        Obtener todos los usuarios
// @access      ruta privada

router.get("/", [auth, isAdmin] , async (req, res) => {
  try {
    const usuarios = await Usuario.findAll({
      order: [['creado_en', 'DESC']],
    });
    if (usuarios) {      
      return res.status(200).json({ data: usuarios });
    }
  } catch (error) {
    console.log(error);    
  }
  
});

module.exports = router;


