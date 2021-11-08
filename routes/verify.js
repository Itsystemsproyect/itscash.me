const express = require("express");
const jwt = require('jsonwebtoken');
const config = require("config");
const auth = require("../middleware/auth");
const router = express.Router();
const Usuario = require("../models/users");

// @route       GET api/veryfy
// @desc        Verificar cuenta de correo usuario
// @access      ruta privada

router.get('/', (req, res) => {
    const token = req.query.id;
    const id = '';
    try {
        jwt.verify(token, config.get("jwt_secret_mail"), async (e, decoded) => {
            if (e) {
                console.log(e)
                return res.status(403)
            } else {
                id = decoded.id
            }

            await Usuario.update({'validado': true}, { where: { id: id } })
            return res.status(200).json({msg: 'Usuario validado exitosamente'})
        })
    } catch (error) {
        console.error(err.message);
        return res.status(500).send('Server Error');
    }
})





module.exports = router;

