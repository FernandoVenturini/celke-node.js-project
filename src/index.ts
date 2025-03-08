// Importando a biblioteca Express:
import express, { Request, Response } from 'express';

// Criando aplicacao Express:
const app = express();

// Incluir os Controllers


// Criar a rota GET principal:
app.get("/", (req:Request, res:Response) => {
    res.send("Bem-vindo Celke!");
});

// Iniciando o servidor:
app.listen(8080, () => {
    console.log('Server is running on port 8080: http://localhost:8080');
});