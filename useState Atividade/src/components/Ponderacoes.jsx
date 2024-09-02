//5.26 - Ponderações(: Faça um programa que receba quatro notas, sendo que cada nota só poderá receber valores de 0 a 10, calcule e mostre a média ponderada, sabendo que o usuário irá entrar com o peso de cada nota, caso a media ponderada seja:  Media maior ou igual a 7 – ALUNO APROVADO  Media menor que 7 – ALUNO REPROVADO
import React, { useState } from 'react'
import "./Ponderacoes.css"

function Ponderacoes() {
    const [ponderada, setPonderada] = useState()
    function media() {
        let nota1 = Number(prompt("Qual é a sua 1° nota?"))
        let nota2 = Number(prompt("Qual é a sua 2° nota?"))    
        let nota3 = Number(prompt("Qual é a sua 3° nota?"))    
        let nota4 = Number(prompt("Qual é a sua 4° nota?"))
        
        let mediaPonderada = (nota1 + nota2 + nota3 + nota4) / 4 
        if (mediaPonderada >= 7) {
            setPonderada("Aprovado")
        }else{
            setPonderada("Reprovado")
        }   
    }
  return (
    <div>
      <button onClick={media}>Exercicio 5.26</button>
      {ponderada}
    </div>
  )
}

export default Ponderacoes
