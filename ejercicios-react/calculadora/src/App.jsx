import './App.css'
import reactLogo from './assets/react.svg'
import { Boton } from './componentes/Boton.jsx'
import { Pantalla } from './componentes/Pantalla.jsx'
import { BotonClear } from './componentes/BotonClear.jsx'
import { useState } from 'react'
import { evaluate } from 'mathjs'

function App() {
  const [input, setInput] = useState('')

  const addInput = valor => {
    setInput(input + valor)
  }

  const calcularResultado = () => {
    if(input) { 
    setInput(evaluate(input))
    } else {
      alert('Por favor ingrese valores para realizar cálculos')
    }
  }

  return (
    <div className='App'>
      <div className='react-logo-contenedor'>
        <img className='react-logo' src={reactLogo} alt="Logo React" />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input} />
        <div className='fila'>
          <Boton manejarClick={addInput}>1</Boton>
          <Boton manejarClick={addInput}>2</Boton>
          <Boton manejarClick={addInput}>3</Boton>
          <Boton manejarClick={addInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={addInput}>4</Boton>
          <Boton manejarClick={addInput}>5</Boton>
          <Boton manejarClick={addInput}>6</Boton>
          <Boton manejarClick={addInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={addInput}>7</Boton>
          <Boton manejarClick={addInput}>8</Boton>
          <Boton manejarClick={addInput}>9</Boton>
          <Boton manejarClick={addInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={addInput}>0</Boton>
          <Boton manejarClick={addInput}>.</Boton>
          <Boton manejarClick={addInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>Clear</BotonClear>
        </div>
      </div>
    </div>
  )
}
import { kldivergence } from 'mathjs'

export default App
