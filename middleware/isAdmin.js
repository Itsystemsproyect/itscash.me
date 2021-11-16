const Usuario = require("../models/users");
module.exports = async function isAdmin (req, res, next) {
  try {
    let user = await Usuario.findByPk(req.user.id)
    if (user.rol === 'admin') {      
      next()
    } else {
      res.status(401).json({msg: 'El usuario no tiene permisos para acceder a esta ruta'})
    }
  } catch (error) {
    console.log(error)
  }  

} 
