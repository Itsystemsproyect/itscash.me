const express = require("express");
const path = require('path');



// Inicialización
const app = express();


// Init Middleware

app.use(express.json({ extended: false }));

// Importar rutas
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin");
const verifyRoutes = require('./routes/verify');
const rewardsRoutes = require('./routes/rewards');

// Rutas
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use('/api/verify', verifyRoutes);
app.use('/api/rewards', rewardsRoutes);

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
