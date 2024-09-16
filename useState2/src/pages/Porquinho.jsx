import React, { useState } from 'react'
import TemDinheiro from './components/TemDinheiro'
import FaltaDinheiro from './components/FaltaDinheiro'

function Porquinho() {
    const [inputPreco, setInputPreco] = useState('')
    const [input1real, setInput1real] = useState('')
    const [input50cents, setInput50cents] = useState('')
    const [input25cents, setInput25cents] = useState('')
    const [input10cents, setInput10cents] = useState('')
    const [input5cents, setInput5cents] = useState('')
    const [sobrou, setSobrou] = useState(false)
    const [faltou, setFaltou] = useState(false)
    function quebrarPorco(event) {
        let dinheiro = (input1real) + input50cents*0.5 + input25cents*0.25 + input10cents*0.10 + input5cents*0.05
        if (dinheiro >= inputPreco) {
            setSobrou(true)
            setFaltou(false)
        } else {
            setSobrou(false)
            setFaltou(true)
        }
    }
  return (
    <div>
      <h1>Exercício 5.25</h1>
      <p>5.25 - O porco: Faça um programa que leia o valor de um produto X e leia a quantidade de moedas de um cofrinho que contenha: ☠ N moedas de 1 real; ☠ N moedas de 50 centavos; ☠ N moedas de 25 centavos; ☠ N moedas de 10 centavos; ☠ N moedas de 5 centavos; O programa deverá verificar se o total de reais que contem no cofrinho é o bastante para compra o produto X.</p>

      <div className="input-container">
            <label htmlFor="inpPreco">Preço</label>
            <input type="number" id='inpPreco'
            value={inputPreco}
            onChange={(event) => setInputPreco(event.target.value) } 
            />
        </div>

      <div className="form-container">
        <div className="input-container">
            <label htmlFor="inp1real">R$1,00</label>
            <input type="number" id='inp1real'
            value={input1real}
            onChange={(event) => setInput1real(event.target.value) } 
            />
        </div>
        <div className="input-container">
            <label htmlFor="inp50cent">R$0,50</label>
            <input type="number" id='inp50cent' 
            value={input50cents}
            onChange={(event) => setInput50cents(event.target.value) } 
            />
        </div>
        <div className="input-container">
            <label htmlFor="inp25cent">R$0,25</label>
            <input type="number" id='inp25cent'
            value={input25cents}
            onChange={(event) => setInput25cents(event.target.value) } 
            />
        </div>
        <div className="input-container">
            <label htmlFor="inp10cent">R$0,10</label>
            <input type="number" id='inp10cent'
            value={input10cents}
            onChange={(event) => setInput10cents(event.target.value) } 
            />
        </div>
        <div className="input-container">
            <label htmlFor="inp05cent">R$0,05</label>
            <input type="number" id='inp05cent'
            value={input5cents}
            onChange={(event) => setInput5cents(event.target.value) } 
            />
        </div>
      </div>
        <button onClick={quebrarPorco}>Quebrar Porco</button>
        {sobrou && <TemDinheiro/>}
        {faltou && <FaltaDinheiro/>}
    </div>
  )
}

export default Porquinho
