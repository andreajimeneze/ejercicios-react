import './App.css'
import reactLogo from './assets/react.svg'
import { Boton } from './componentes/Boton.jsx'
import { Contador } from './componentes/Contador.jsx'
import { useState } from 'react'

function App() {

  const [ numClicks, setNumClicks ] = useState(0)


  const manejarClick = () => {
    setNumClicks(numClicks + 1)
  }

  const reiniciarContador = () => {
    setNumClicks(0)
  }
  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo' src= {reactLogo} alt="Logo freeCodeCamp" />
      </div>
      <div className='contenedor-principal'>
        <Contador
          numClicks= {numClicks}
        />
        <Boton
        texto = 'Click'
        isButtonClick =  { true }
        manejarclick = { manejarClick }
        />
        <Boton
        texto = 'Reiniciar'
        isButtonClick =  { false }
        manejarclick = { reiniciarContador }
        />
      </div>
    </div>
  )
}

export default App
