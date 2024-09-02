import { useState } from 'react'
import './Sorteio.css'
import Titulo from '../components/Titulo'


function Sorteio() {
  const [numero, setNumero] = useState(0)
  // const [dado, setDado] = useState()

    function sortear(){
        let n = Math.floor(Math.random()*100)
        setNumero(n)
    }
    function aumentar() {
      setNumero(numero + 1)
    }
    function diminuir() {
      setNumero(numero - 1)
    }
  return (
    <div className='sorteio-container'>
      <Titulo texto={"Sorteio"} emoji={"🎲"}/>
      <button className="aumentar" onClick={aumentar}>+</button>
      <div className="numero">
        {numero}
      </div>
      <button className="diminuir" onClick={diminuir}>-</button>
      <button className='sorteio-botao' onClick={sortear}>Sortear número</button>
    </div>
  )
}

export default Sorteio
