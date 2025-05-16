// Importando a biblioteca Express:
import express from 'express';

// Importar a biblioteca variaveis de ambiente:
import dotenv from "dotenv";

// Carregar variaveis do arquivo .env:
dotenv.config();

// Criando aplicacao Express:
const app = express();

// Incluir os Controllers
import login from "./controllers/login";

// Criar as rotas:
app.use("/", login);

app.get('/', (req, res) => {
    res.send('Hello Celke!');
})

// Iniciando o servidor na porta definida na variavel de ambiente:
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}: http://localhost:${process.env.PORT}`);
});