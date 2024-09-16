import { useState } from 'react'
import './App.css'
import ArCondicionado from './pages/ArCondicionado'
import Porquinho from './pages/Porquinho'
import Comerciante from './pages/Comerciante'

function App() {
  const [pagina, setPagina] = useState()
  return (
    <>
      <div>
        <nav>
        <button onClick={() => setPagina(<Comerciante/>)}>5.23</button>
        <button onClick={() => setPagina(<Porquinho/>)}>5.25</button>
          <button onClick={() => setPagina(<ArCondicionado/>)}>5.27</button>
        </nav>
      { pagina }
      </div>
    </>
  )
}

export default App
