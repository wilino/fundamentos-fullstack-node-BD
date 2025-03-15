const express = require("express");
const app = express();
const clienteRoutes = require("./routes/cliente.routes");
const pedidoRoutes = require("./routes/pedido.routes");

// Middleware para parsear JSON
app.use(express.json());

// Definir rutas
app.use("/api/clientes", clienteRoutes);
app.use("/api/pedidos", pedidoRoutes);

// Exportar la aplicación para que `bin/www` maneje el servidor
module.exports = app;