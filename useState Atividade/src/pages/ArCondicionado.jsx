import React, { useState } from 'react'
import "./ArCondicionado.css"


function ArCondicionado() {
    const [inputCelsius, setInputCelsius] = useState()
    const [fahrenheit, setFahrenheit] = useState()

    function mudouInpt(event) {
      setInputCelsius(event.target.value)
      
    }
    
    function converterCparaF() {
      let f =inputCelsius * 1.8 + 32
      setFahrenheit("Temperatura em Fahrenheit: " + f)
    }

    function converterFparaC() {
      
    }
  return (
    <div>
      <label htmlFor="ArCondicionado"> Digite a temperatura em graus Celsius</label>
      <input type="text" className='inptArCond' 
      value={inputCelsius}
      onChange={mudouInpt}
      />
      <p>{fahrenheit}</p>

      <button onClick={converterCparaF}>Converter</button>
    </div>
  )
}

export default ArCondicionado
