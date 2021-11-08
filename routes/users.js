const Router = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../middleware/auth");
const { body, validationResult } = require("express-validator");
const Usuario = require("../models/users");
const send = require('../utils/accountVerification');

const router = Router();

// @route       POST api/user
// @desc        Register a user
// @access      Public

router.post(
  "/",
  [
    body("username", "Por favor ingresar un nombre").not().isEmpty(),
    body("email", "Por favor ingresar un email válido").isEmail(),
    body(
      "password",
      "Por favor ingresar una contraseña con 7 o más caracteres"
    ).isLength({ min: 7 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errores: errors.array() });
    }
    let { username, email, password } = req.body;

    try {
      const user = await Usuario.findOne({
        where: {
          email: email,
        },
      });
      if (user) {
        return res.status(400).json({ msg: "El usuario ya existe" });
      }

      const salt = await bcrypt.genSalt(10);
      password = await bcrypt.hash(password, salt);

      const newUser = await Usuario.create({
        username: username,
        email: email,
        password: password,
      })

      // Enviar email de confirmación
      send(newUser);
            

      const payload = {
        user: {
          id: newUser.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),

        (err, token) => {
          if (err) throw err;          
          
          return res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      return res.status(500).send("Server Error");
    }
  }
);


// @route       PUT api/user
// @desc        Update a user
// @access      Private

router.put('/:id', auth, async (req, res) => {
  const {username, telefono, empresa, instagram_link, facebook_link, twitter_link, wallet_address} = req.body;
  
  // Construir un objeto de usuario
  const userFields = {};
  if (username) userFields.username = username;
  if (telefono) userFields.telefono = telefono;
  if (empresa) userFields.empresa = empresa;
  if (instagram_link) userFields.instagram_link = instagram_link;
  if (facebook_link) userFields.facebook_link = facebook_link;
  if (twitter_link) userFields.twitter_link = twitter_link;
  if (wallet_address) userFields.wallet_address = wallet_address;

  

  try {
    let user = await Usuario.findOne({
      where: {
        id: req.params.id,
      },
    });
    
    if (!user) return res.status(404).json({ msg: 'Usuario no encontrado' });


    // Asegurar que un usuario no pueda editar otros usuarios
    if (user.id.toString() !== req.params.id.toString()) {
      return res.status(401).json({ msg: 'No autorizado' });      
    }

    user = await Usuario.update(userFields, { where: { id: req.params.id } })
    return res.status(200).json({msg: 'Usuario actualizado exitosamente'})

    
  } catch (error) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }

})



module.exports = router;

