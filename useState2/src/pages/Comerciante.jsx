import React, { useState } from 'react'
import "./Comerciante.css"
function Comerciante() {
    const [prdt, setPrdt] = useState ('')
    function vendaProduto(event) {
      if (prdt >= 20) {
        
      }
    }
  return (
    <div>
      <h1>Exercício 5.23</h1>
      <p>5.23 – Um comerciante comprou um produto e quer vendê-lo com lucro de 
45% se o valor da compra for menor que R$20,00; caso contrário, o lucro 
será de 30%. Faça um programa que entre com o valor do produto e mostre 
o valor de venda.</p>

    <div className="form-container">
        <div className="input-container">
            <label htmlFor="inptProduto">Produto para a Venda</label>
            <input type="number" id='inptProduto'
            value={prdt}
            onChange={(event) => setPrdt(event.target.value) }
            />
        </div>
    </div>
    </div>
  )
}

export default Comerciante
