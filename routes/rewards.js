const Router = require("express");
const Usuario = require("../models/users");
const auth = require("../middleware/auth");
const isAdmin = require("../middleware/isAdmin");
const sequelize = require("../config/db");
const Sequelize = require("sequelize");
const { QueryTypes } = require('sequelize');
const { json } = require("body-parser");

const router = Router();

// @route       GET api/rewards
// @desc        Obtener todos los usuarios
// @access      ruta privada

router.get("/", [auth, isAdmin], async (req, res) => {
    try {
        
       const usuario = await sequelize.query(`select e1.username, e1.wallet_address, e2.count from usuario e1, (select e1.referido_por, count('e2.username')
       from usuario e1, usuario e2
       where e1.referido_por = e2.referido and e1.creado_en > e2.fecha_pago group by e1.referido_por) e2
       where e1.referido = e2.referido_por;`, { type: QueryTypes.SELECT })   
       

        if (usuario) {
            return res.status(200).json({data:usuario})
        }
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;