const express = require("express");
const json = require("express");
const morgan = require("morgan");

// Inicialización
const app = express();

// middleware
app.use(express.json({ extended: false }));
app.use(morgan("dev"));
app.use(json());

// Importar rutas
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

// Rutas
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}!`);
});
