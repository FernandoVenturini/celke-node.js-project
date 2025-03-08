"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importando a biblioteca Express:
const express_1 = __importDefault(require("express"));
// Criando aplicacao Express:
const app = (0, express_1.default)();
// Incluir os Controllers
// Criar a rota GET principal:
app.get("/", (req, res) => {
    res.send("Bem-vindo Celke!");
});
// Iniciando o servidor:
app.listen(8080, () => {
    console.log('Server is running on port 8080: http://localhost:8080');
});
