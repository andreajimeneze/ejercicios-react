import React from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import { Boton } from './componentes/Boton.jsx'
import { Contador } from './componentes/Contador.jsx'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      numClicks: 0
    }
    this.manejarClick = this.manejarClick.bind(this);
    this.reiniciarContador = this.reiniciarContador.bind(this);
  }

  manejarClick() {
    this.setState(({ numClicks }) => ({numClicks: numClicks + 1}))
  }

  reiniciarContador() {
    this.setState({numClicks: 0})
  }

  render() {
    return (
      <div className='App'>
        <div className='freecodecamp-logo-contenedor'>
          <img className='freecodecamp-logo' src= {reactLogo} alt="Logo freeCodeCamp" />
        </div>
        <div className='contenedor-principal'>
          <Contador
            numClicks= {this.state.numClicks}
          />
          <Boton
          texto = 'Click'
          isButtonClick =  { true }
          manejarclick = { this.manejarClick }
          />
          <Boton
          texto = 'Reiniciar'
          isButtonClick =  { false }
          manejarclick = { this.reiniciarContador }
          />
        </div>
      </div>
    )
  }
}
// function App() {

//   const [ numClicks, setNumClicks ] = useState(0)


//   const manejarClick = () => {
//     setNumClicks(numClicks + 1)
//   }

//   const reiniciarContador = () => {
//     setNumClicks( { numClicks: 0 })
//   }
//   return (
//     <div className='App'>
//       <div className='freecodecamp-logo-contenedor'>
//         <img className='freecodecamp-logo' src= {reactLogo} alt="Logo freeCodeCamp" />
//       </div>
//       <div className='contenedor-principal'>
//         <Contador
//           numClicks= {this.state.numClicks}
//         />
//         <Boton
//         texto = 'Click'
//         isButtonClick =  { true }
//         manejarclick = { this.setState.manejarClick }
//         />
//         <Boton
//         texto = 'Reiniciar'
//         isButtonClick =  { false }
//         manejarclick = { this.setState.reiniciarContador }
//         />
//       </div>
//     </div>
//   )
// }

export default App
