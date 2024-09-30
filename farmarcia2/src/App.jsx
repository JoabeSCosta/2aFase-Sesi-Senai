import './App.css'
import { useState } from 'react'

function App() {
 const [fila, setFila] = useState([])
 const [proximaSenha, setproximaSenha] = useState(1)

 function gerarSenha() {
   const senha = {
      numero: proximaSenha,
      tipo: 'normal'


   }
    setproximaSenha(proximaSenha + 1)
    setFila([...fila, senha])

  }

  function atenderCliente() {
    if(fila.length) {
      alert(`Senha atendida: ${fila[0].numero}`)
      setFila(fila.slice(1))
    }
    else {
      alert('Não há senhas na fila')
    }
  }

  return (
    <>
    <button onClick={atenderCliente}>Atender</button>
    <button onClick={gerarSenha}>Senha Normal</button>
    {fila.map( (senha) => (
      <div key={senha.numero}>
        <p>{senha.numero}</p>
        <p>{senha.tipo}</p>
      </div>
    ) )}
    </>
  )
}

export default App
