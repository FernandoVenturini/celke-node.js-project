"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importando a biblioteca Express:
const express_1 = __importDefault(require("express"));
// Criando aplicacao Express:
const router = express_1.default.Router();
// Criar a rota GET principal:
router.get("/", (req, res) => {
    res.send("Bem-vindo Celke!!!");
});
// Exportar a instrucao que esta dentro da constante router:
exports.default = router;
