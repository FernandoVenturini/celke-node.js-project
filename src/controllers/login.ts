// Importando a biblioteca Express:
import express, { Request, Response } from 'express';

// Criando aplicacao Express:
const router = express.Router();

// Criar a rota GET principal:
router.get("/", (req:Request, res:Response) => {
    res.send("Bem-vindo Celke!!!");
});

// Exportar a instrucao que esta dentro da constante router:
export default router;