"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importando a biblioteca Express:
const express_1 = __importDefault(require("express"));
// Importar o arquivo com as credenciais do banco de dados:
const data_source_1 = require("../data-source");
// Criando aplicacao Express:
const router = express_1.default.Router();
// Inicializar a conexao com o banco de dados:
data_source_1.AppDataSource.initialize()
    .then(() => {
    console.log("Conexao com o banco de dados realizazda com sucesso!");
})
    .catch(() => {
    console.log("Erro na conexao com o banco de dados!");
});
// Criar a rota GET principal:
router.get("/", (req, res) => {
    res.send("Bem-vindo Celke!!!");
});
// Exportar a instrucao que esta dentro da constante router:
exports.default = router;
