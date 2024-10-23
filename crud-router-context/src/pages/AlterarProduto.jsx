import React, { useContext, useState } from 'react';
import Navbar from '../components/Navbar';
import { GlobalContext } from '../contexts/GlobalContext';

function AlterarProduto() {
    const { produtoMagico, setProdutoMagico } = useContext(GlobalContext);
    const [inputProduto, setInputProduto] = useState("");

    
    return (
        <div>
            <Navbar />
            <h1>Alteração mágica</h1>
            <p>Produto atual: {produtoMagico}</p>
            <div className="input-container">
                <label htmlFor="">Produto Novo: </label>
                <input 
                    type="text" 
                    value={inputProduto}
                    onChange={(event) => setInputProduto(event.target.value)}
                />
            </div>
            <button onClick={() => setProdutoMagico(inputProduto)}>Alterar</button>
        </div>
    );
}

export default AlterarProduto;