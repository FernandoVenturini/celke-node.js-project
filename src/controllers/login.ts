// Importando a biblioteca Express:
import express, { Request, Response } from 'express';
// Importar o arquivo com as credenciais do banco de dados:
import { AppDataSource } from '../data-source';

// Criando aplicacao Express:
const router = express.Router();

// Inicializar a conexao com o banco de dados:
AppDataSource.initialize()
    .then(() => {
        console.log("Conexao com o banco de dados realizazda com sucesso!");
    })
    .catch(() => {
        console.log("Erro na conexao com o banco de dados!");
    })

// Criar a rota GET principal:
router.get("/", (req:Request, res:Response) => {
    res.send("Bem-vindo ao time Celke!");
});

// Exportar a instrucao que esta dentro da constante router:
export default router;