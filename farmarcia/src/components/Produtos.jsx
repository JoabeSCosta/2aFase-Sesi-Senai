import React from 'react'
import './Produtos.css'

function Produtos() {
  return (
    <div className='container-produtos'>
      <h2 className='produtos-text'>Produtos a venda</h2>
      <div className='container-imagens'>
      <img className='produtos-produto1' src="/images/farmarcia-camisetas.png" alt="" />
      <img className='produtos-produto2' src="/images/farmarcia-camiseta.png" alt="" />
      </div>
      <label className='produtos-desc'>Camisetas "Farmárcia" – Onde Estilo e Inovação se Encontram
Descubra as novas camisetas da Farmárcia, um símbolo de estilo moderno e resiliência. Cada peça é cuidadosamente desenhada para refletir a identidade única da Márcia, combinando conforto e elegância com uma pitada de inovação.</label>
    </div>
  )
}

export default Produtos
