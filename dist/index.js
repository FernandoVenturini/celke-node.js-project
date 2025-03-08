"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importando a biblioteca Express:
const express_1 = __importDefault(require("express"));
// Importar a biblioteca variaveis de ambiente:
const dotenv_1 = __importDefault(require("dotenv"));
// Carregar variaveis do arquivo .env:
dotenv_1.default.config();
// Criando aplicacao Express:
const app = (0, express_1.default)();
// Incluir os Controllers
const login_1 = __importDefault(require("./controllers/login"));
// Criar as rotas:
app.use("/", login_1.default);
// Iniciando o servidor na porta definida na variavel de ambiente:
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}: http://localhost:${process.env.PORT}`);
});
