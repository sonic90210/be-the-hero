// importar o módulo express para a variável express
const express = require ('express');

// importar rotas do arquivo routes.js
const routes = require('./routes');

// importar módulo cors
const cors = require('cors');

//importar módulo para teste e validação da info no backend
const { errors } = require('celebrate');

// variável que vai armazenar a minha aplicação
const app = express();

// informando cors
app.use(cors());

// informando ao corpo que usaremos json nas rotas post
app.use(express.json());

// informando as rotas
app.use(routes);

// usado nos testes do backend
app.use(errors());

//ouvir a porta 3333
module.exports = app;

/**
 * Rota / Recurso
 */
/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */
/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após o símbolo de ? e geralmente servem para filtros/paginação
 * Rote Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */
/**
 * SQL (Structured Query Language): MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */
/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */
