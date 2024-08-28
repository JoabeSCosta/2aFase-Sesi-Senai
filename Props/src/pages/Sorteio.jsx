import Titulo from '../components/Titulo'
import './Sorteio.css'

function Sorteio() {
    function Sortear() {
      let numeroAleatorio = Math.floor(Math.random() * 100) +1;
      alert(numeroAleatorio)
    }
  return (
    <div className='sorteio-container'>
      <Titulo texto={"Sorteio"} emoji={"🎲"}/>
      <button className='sorteio-botao' onClick={Sortear}>Sortear Número</button>
    </div>
  )
}

export default Sorteio
