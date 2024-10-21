import { useState } from 'react'
import './Fila.css'

function Fila() {
 const [fila, setFila] = useState([])
 const [filaPreferencial, setFilaPreferencial] = useState([])
 const [proximaSenha, setproximaSenha] = useState(1)
 const [senhasAtendidas, setSenhasAtendidas] = useState([])

 function gerarSenha() {
     const senha = {
            numero: proximaSenha,
            tipo: 'normal'
     }
     setproximaSenha(proximaSenha + 1)
     setFila([...fila, senha])
 }

 function gerarSenhaPreferencial() {
     const senha = {
            numero: proximaSenha,
            tipo: 'preferencial'
     }
     setproximaSenha(proximaSenha + 1)
     setFilaPreferencial([...filaPreferencial, senha])
 }

 function atenderCliente() {
     if(filaPreferencial.length) {
            const senhaAtendida = filaPreferencial[0]
            setSenhasAtendidas([...senhasAtendidas, senhaAtendida])
            setFilaPreferencial(filaPreferencial.slice(1))
            return
     }

     if(fila.length) {
            const senhaAtendida = fila[0]
            setSenhasAtendidas([...senhasAtendidas, senhaAtendida])
            setFila(fila.slice(1))
            return
     }
 }

 return (
     <>
        <h2 className='body-sobre1'>Fila</h2>
     <div className='container-bttn'>
         <button className='bttn-fila' onClick={atenderCliente}>Atender</button>
         <button className='bttn-fila' onClick={gerarSenha}>Senha Normal</button>
         <button className='bttn-fila' onClick={gerarSenhaPreferencial}>Senha Preferencial</button>
     </div>
     <div className='container-fila'>
         <div className='fila-atendidas'>
             <h2>Senhas Atendidas</h2>
             {senhasAtendidas.map((senha) => (
                 <div key={senha.numero}>
                     <p>{senha.numero}</p>
                     <p>{senha.tipo}</p>
                 </div>
             ))}
         </div>
         <div className='fila-geradas'>
             <h2>Senhas Geradas</h2>
             <h3>Fila Preferencial</h3>
             {filaPreferencial.map((senha) => (
                 <div key={senha.numero}>
                     <p>{senha.numero}</p>
                     <p>{senha.tipo}</p>
                 </div>
             ))}
             <h3>Fila Normal</h3>
             {fila.map((senha) => (
                 <div key={senha.numero}>
                     <p>{senha.numero}</p>
                     <p>{senha.tipo}</p>
                 </div>
             ))}
         </div>
     </div>
     </>
 )
}
export default Fila;