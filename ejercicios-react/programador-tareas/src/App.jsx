import './App.css'
import  reactLogo  from '../src/assets/react.svg'
import { ListaTareas } from './componentes/ListaTareas.jsx'

function App() {
  
  return (
    <div className='App'>
      <div className='react-logo-contenedor'>
        <img className='react-logo' 
        src={reactLogo} 
        alt="Logo React" />
      </div>
      <div className='tareas-principal'>
        <h1>Mis Tareas</h1>
        <ListaTareas />
        {/* <Tarea 
        texto= 'Aprender React' /> */}
      </div>
    </div>
  )
}

export default App
