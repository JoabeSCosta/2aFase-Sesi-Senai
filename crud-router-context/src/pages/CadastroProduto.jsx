import React, { useState, useContext, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { GlobalContext } from '../contexts/GlobalContext';
import './CadastroProduto.css';

function CadastroProduto() {
    const [inputNome, setInputNome] = useState("");
    const [inputPreco, setInputPreco] = useState("");
    const { produtos, setProdutos } = useContext(GlobalContext);

    useEffect(() => {
        console.log(produtos)
    }, [produtos]);
    // useEffect (() => {
    //     localStorage.setItem("produtos", JSON.stringify(produtos));
    // }, [produtos]);
    
    function CadastrarProduto() {
        let produto = {
            id: Date.now(),
            nome: inputNome,
            preco: inputPreco
        };
        setProdutos([...produtos, produto]);

    }

    return (
        <div>
            <Navbar />
            <h1>Cadastro de Produtos</h1>
            <div className="input-container">
                <label htmlFor="">Nome do Produto: </label>
                <input 
                    type="text" 
                    value={inputNome}
                    onChange={(e) => setInputNome(e.target.value)}
                />
            </div>
            <div className="input-container">
                <label htmlFor="">Preço do Produto: </label>
                <input 
                    type="text" 
                    value={inputPreco}
                    onChange={(e) => setInputPreco(e.target.value)}
                />
            </div>
            <button onClick={CadastrarProduto}>Cadastrar</button> 
            <div className="produtos">
            {produtos.map((p) => (
                <div key={p.id} className='produto-container'>
                    <p>{p.nome}</p>
                    <p>R${p.preco}</p>
                    <p>{p.id}</p>
                </div>
            ))}
            </div>

            
        </div>
    );
}

export default CadastroProduto;