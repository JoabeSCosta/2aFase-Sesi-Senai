import React from 'react'
import './Body.css'

function Body() {
  return (
    <div className='container-body'>
    <label className='body-sobre1'>Sobre Nós</label>    
    <img className='body-imgPlaca' src="/images/farmarcia.png" alt="" />
    <label className='body-sobre2'>
    Transformando Desafios em Oportunidades: Conheça a Farmárcia
    Bem-vindo à Farmárcia, onde a inovação encontra a tradição para oferecer a melhor experiência em saúde e    bem-estar. Nossa história é uma jornada de resiliência e transformação, refletida em cada aspecto do nosso     negócio.</label>

    <label className='body-historia1'>Nossa História</label>
    <img className='body-imgPlaca' src="/images/farmarcia-placa.png" alt="" />
    <label className='body-historia2'>
    A Farmárcia foi reinventada por Márcia Maria Mirenda, uma empreendedora apaixonada e visionária com uma     formação em administração e uma paixão por design e tecnologia. Com 32 anos e uma carreira marcada por  desafios e conquistas, Márcia trouxe uma nova vida para o legado da farmácia de seu tio Mário, que sempre foi    um pilar na comunidade local.</label>

    </div>
  )
}

export default Body
