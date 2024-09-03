import React, { useState } from 'react'
import "./Ponderacoes.css"
import Titulo from '../components/Titulo'

function Ponderacoes() {
    const [ponderada, setPonderada] = useState()
    const [notaFinal, setNotaFinal] = useState()
    function media() {
        let nota1 = Number(prompt("Qual é a sua 1° nota?"))
        let peso1 = Number(prompt("Qual é o peso da sua 1° nota?"))
        let nota2 = Number(prompt("Qual é a sua 2° nota?"))
        let peso2 = Number(prompt("Qual é o peso da sua 2° nota?"))
        let nota3 = Number(prompt("Qual é a sua 3° nota?"))
        let peso3 = Number(prompt("Qual é o peso da sua 3° nota?"))
        let nota4 = Number(prompt("Qual é a sua 4° nota?"))
        let peso4 = Number(prompt("Qual é o peso da sua 4° nota?"))

        if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10 || nota4 < 0 || nota4 > 10) {
            alert("Notas inválidas. Por favor, insira notas entre 0 e 10.")
            return
        }
        if (peso1 <= 0 || peso2 <= 0 || peso3 <= 0 || peso4 <= 0) {
            alert("Pesos inválidos. Por favor, insira pesos maiores que 0.")
            return
        }

        let mediaPonderada = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3 + nota4 * peso4) / (peso1 + peso2 + peso3 + peso4)

        if (mediaPonderada >= 7) {
            setPonderada(" Aprovado")
        } else {
            setPonderada(" Reprovado")
        }
        setNotaFinal(mediaPonderada.toFixed(2))
    }
    return (
        <div className='container-poderacoes'>
            <Titulo texto={"Atividade 5.26"} emoji={"👨‍🎓"}/>
            <button className='poderacoes-bttn' onClick={media}>Exercicio 5.26</button>
            {ponderada} 
            <div className='notafinal'>
            Nota Ponderada: {notaFinal}   
            </div>
        </div>
    )
}

export default Ponderacoes