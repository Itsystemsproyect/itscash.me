const express = require("express");
//const bodyParser = require("body-parser");
//const cors = require("cors");
const json = require("express");
const morgan = require("morgan");

/*
var corsOptions = {
  origin: "http://localhost:3000"
};
*/

// Inicialización
const app = express();

//app.use(cors(corsOptions));

/*

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

*/


// Init Middleware

app.use(express.json({ extended: false }));

// Importar rutas
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin");

// Rutas
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("frontend/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}!`);
});
