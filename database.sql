CREATE DATABASE cdt_sistema;
USE cdt_sistema;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(50) UNIQUE NOT NULL,
    senha VARCHAR(100) NOT NULL,
    nivel INT NOT NULL
);

CREATE TABLE pessoas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    cpf VARCHAR(20),
    rg VARCHAR(20),
    endereco VARCHAR(150),
    bairro VARCHAR(100),
    cidade VARCHAR(100),
    estado VARCHAR(50),
    pais VARCHAR(50),
    cep VARCHAR(20),
    estado_civil VARCHAR(50),
    data_nascimento DATE,
    sexo VARCHAR(20),
    altura DECIMAL(4,2),
    escolaridade VARCHAR(100),
    profissao VARCHAR(100),
    empresa VARCHAR(100),
    cargo VARCHAR(100),
    renda DECIMAL(10,2),
    deficiencia VARCHAR(10),
    qual_deficiencia TEXT,
    observacoes TEXT,
    imagem TEXT
);

INSERT INTO usuarios (usuario, senha, nivel)
VALUES ('admin', '1234', 4);