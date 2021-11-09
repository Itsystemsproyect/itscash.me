const Usuario = require("../models/users");

module.exports = function isVerified() {
  return async function (req, res, next) {
    const user = await Usuario.findOne({ where: { id: req.user.id } });
    if (!user) {
      return res
        .status(403)
        .send({ error: { status: 403, message: "Cuenta no verificada" } });
    }
    next();
  };
};


