import React from 'react'
import './Contato.css'

function Contato() {
  return (
    <div className='container-contato'>
      <h2 className='contato-titulo'>Contacte-nos</h2>
      <img className='contato-img' src="/images/farmarcia-cartoes.png" alt="" />
      <label className='contato-text'>Endereço de E-mail: contato@farmarcia.com.br
      Número: (11) 98765-4321
      www.farmarcia.com.br
      Instagram: @farmarcia
      Facebook: Farmárcia Oficial
      LinkedIn: Márcia Maria Mirenda</label>
      
    </div>
  )
}

export default Contato
