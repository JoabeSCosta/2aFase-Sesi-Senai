// 5.25 - O porco: Faça um programa que leia o valor de um produto X e leia a quantidade de moedas de um cofrinho que contenha:  N moedas de 1 real;  N moedas de 50 centavos;  N moedas de 25 centavos;  N moedas de 10 centavos;  N moedas de 5 centavos; O programa deverá verificar se o total de reais que contem no cofrinho é o bastante para compra o produto X.
import React, { useState } from 'react'
import "./Porco.css"

function Porco() {
    const [resultado, setResultado] = useState()
    function rodar() {
        let preco = Number(prompt("Qual o valor do produto"))
        let moedas1 = Number(prompt("Quantas moedas de R$1,00?"))
        let moedas50 = Number(prompt("Quantas moedas de R$0,50?"))
        let moedas25 = Number(prompt("Quantas moedas de R$0,25?"))
        let moedas10 = Number(prompt("Quantas moedas de R$0,10?"))
        let moedas5 = Number(prompt("Quantas moedas de R$0,05?"))

        let compra = preco - (moedas1 + moedas50 + moedas25 + moedas10 + moedas5)
        if (compra <= 0) {
            setResultado("Compra realizada com sucesso!!!")
        } else {
            setResultado("Compra não realizada.")
        }
        
    }
  return (
    <div>
      <button onClick={rodar}>Exercício 5.25</button>
      {resultado}
    </div>
  )
}

export default Porco
