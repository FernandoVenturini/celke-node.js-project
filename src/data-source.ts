import "reflect-metadata";
import { DataSource} from "typeorm";

// IMportar a biblioteca variaveis de ambiente:
import dotenv from 'dotenv';

// Carregar variaveis do arquivo .env:
dotenv.config();

// Criando variavel referente a constante DB_DIALECT do arquivo .env:
const dialect = process.env.DB_DIALECT ?? "mysql";

export const AppDataSource = new DataSource({
    type: dialect as "mysql" 
    | "mariadb" | "postgres" | "oracle" | "mongodb",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: false,
    logging: true,
    entities: [],
    subscribers: [],
    migrations: [__dirname + "/migrations/*.js"],
})