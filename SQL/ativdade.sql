CREATE TABLE IF NOT EXISTS Cliente (
    cliente_id INTEGER PRIMARY KEY,
    cliente_nome TEXT NOT NULL,
    cliente_idade INTEGER,
    cliente_cidade VARCHAR
);

CREATE TABLE Produto (
	produto_id INTEGER PRIMARY KEY,
	produto_desc TEXT NOT NULL,
	produto_categoria VARCHAR,
	produto_valor NUMBER
);

CREATE TABLE Pedido (
	pedido_id INTEGER PRIMARY KEY,
	cliente_id INTEGER REFERENCES Cliente(cliente_id),
  	produto_id INTEGER REFERENCES Produto(produto_id),
	pedido_date DATE
);