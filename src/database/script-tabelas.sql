

CREATE DATABASE igc;

USE igc;


CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

CREATE TABLE jogo (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(100),
	imagem VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);
CREATE TABLE tag (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100)
);

CREATE TABLE jogo_tag (
    fk_jogo INT,
    fk_tag INT,
    PRIMARY KEY (fk_jogo, fk_tag),
    FOREIGN KEY (fk_jogo) REFERENCES jogo(id),
    FOREIGN KEY (fk_tag) REFERENCES tag(id)
);