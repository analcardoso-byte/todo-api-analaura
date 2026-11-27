const express = require("express");
const router = express.Router();
const tarefaController = require("../controllers/tarefaController");
const validarId = require("../middlewares/validarId");

router.get("/", tarefaController.listar);
router.get("/:id", validarId, tarefaController.buscarPorId);
router.post("/", tarefaController.criar);
router.put("/:id", validarId, tarefaController.atualizar);
router.patch("/:id", validarId, tarefaController.atualizarParcial);
router.delete("/:id", validarId, tarefaController.deletar);

module.exports = router;

