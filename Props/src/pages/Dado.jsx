import "./Dado.css"
import Titulo from '../components/Titulo'
import { useState } from 'react'
import { FaDiceD6  } from "react-icons/fa";
import { FaDiceOne, FaDiceTwo, FaDiceThree, FaDiceFour, FaDiceFive, FaDiceSix} from "react-icons/fa";


function Dado() {
  const dados= [<FaDiceOne />, <FaDiceTwo />,<FaDiceThree />,<FaDiceFour />,<FaDiceFive />,<FaDiceSix />,]
  const [numero, setNumero] = useState(FaDiceD6)

    function jogarDado(){
        let n = Math.floor(Math.random()*6)
        
        setNumero(dados[n])
    }
  return (
    <div className='container-dado'>
      <Titulo texto={"Dado"} emoji={"🎲"}/>
      <div className="dado-sorteado">
      {numero}
      </div>
      <button className='rodar' onClick={jogarDado}>Rodar</button>
    </div>
  )
}


export default Dado
