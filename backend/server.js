const express = require('express');
const session = require('express-session');
const cors = require('cors');
const db = require('./db');

const app = express();

app.use(express.json());
app.use(cors());
app.use(session({
    secret: 'cdt_secret',
    resave: false,
    saveUninitialized: true
}));

// LOGIN
app.post('/login', (req, res) => {
    const { usuario, senha } = req.body;

    db.query(
        "SELECT * FROM usuarios WHERE usuario=? AND senha=?",
        [usuario, senha],
        (err, result) => {
            if (result.length > 0) {
                req.session.usuario = result[0];
                res.json({ sucesso: true, nivel: result[0].nivel });
            } else {
                res.json({ sucesso: false });
            }
        }
    );
});

// CADASTRAR PESSOA
app.post('/pessoas', (req, res) => {
    db.query("INSERT INTO pessoas SET ?", req.body);
    res.json({ sucesso: true });
});

// LISTAR PESSOAS
app.get('/pessoas', (req, res) => {
    db.query("SELECT * FROM pessoas", (err, result) => {
        res.json(result);
    });
});

// USUÁRIOS
app.get('/usuarios', (req, res) => {
    db.query("SELECT * FROM usuarios", (err, result) => {
        res.json(result);
    });
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});