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
// @desc        Obtener el conteo de todos los referidos antes de realizar un pago de recompenza
// @access      ruta privada

router.get("/", [auth, isAdmin], async (req, res) => {
    try {
        
       const usuario = await sequelize.query(`select e1.id, e1.username, e1.email, e1.wallet_address, e2.count from usuario e1, (select e1.referido_por, count('e2.username')
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

// @route       PUT api/rewards/:id
// @desc        Actualizar fecha de pago de recompenza de usuario
// @access      ruta privada

router.put("/:id", [auth, isAdmin], async (req, res) => {    
    const id  = req.params.id;
    
    try {
        const user = await Usuario.findByPk(id);
        
        if (!user) return res.status(404).json({ msg: 'Usuario no encontrado' });
        const userFields = {};
        const now = Sequelize.literal('CURRENT_TIMESTAMP');
        userFields.modificado_en = now;
        userFields.fecha_pago = now;        

        await Usuario.update(userFields, { where: { id: id } })
        return res.status(200).json({msg: 'Fecha de pago actualizada exitosamente'});

    } catch (error) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

module.exports = router;