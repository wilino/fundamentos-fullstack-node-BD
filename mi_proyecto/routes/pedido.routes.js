const express = require("express");
const router = express.Router();
const pedidoController = require("../controllers/pedido.controller");

// Definir las rutas de pedidos
router.get("/", pedidoController.obtenerPedidos);
router.get("/:id", pedidoController.obtenerPedidoPorId);
router.post("/", pedidoController.crearPedido);
router.put("/:id", pedidoController.actualizarPedido);
router.delete("/:id", pedidoController.eliminarPedido);

module.exports = router;