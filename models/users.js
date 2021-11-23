const Sequelize = require("sequelize");
const sequelize = require("../config/db");

const Usuario = sequelize.define(
  "usuarios",

  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: Sequelize.TEXT,
      allowNull: false,
    },

    email: {
      type: Sequelize.TEXT,
      unique: true,
      allowNull: false,
    },
    password: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    imagen: {
      type: Sequelize.TEXT,
    },
    telefono: {
      type: Sequelize.TEXT,
    },
    empresa: {
      type: Sequelize.TEXT,
    },
    instagram_link: {
      type: Sequelize.TEXT,
    },
    facebook_link: {
      type: Sequelize.TEXT,
    },
    twitter_link: {
      type: Sequelize.TEXT,
    },
    wallet_address: {
      type: Sequelize.TEXT,
    },
    rol: {
      type: Sequelize.TEXT,
      default: "user",
    },
    validado: {
      type: Sequelize.BOOLEAN,
      default: false
    },
    referido: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    referido_por: {
      type: Sequelize.TEXT
    },
    creado_en: {
      type: Sequelize.DATE,
      default: Sequelize.NOW,
      
    },
    modificado_en: {
      type: Sequelize.DATE,
      default: Sequelize.NOW,
      
    },
    fecha_pago: {
      type: Sequelize.DATE,
      defaultValue: sequelize.literal('to_timestamp(0)'),
      
    }
  },

  {
    timestamps: false,
    tableName: "usuario",
  }
);

module.exports = Usuario;
