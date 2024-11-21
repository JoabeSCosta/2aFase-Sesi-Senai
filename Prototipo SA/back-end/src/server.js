const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = new Pool({

    user: 'postgres',
    host: 'localhost',
    database: 'CadastroUser',
    password: 'senai',
    port: 5432,

});

app.use(cors());
app.use(express.json());
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});