import './../stylesheets/Boton.css'
// eslint-disable-next-line react/prop-types
export function Boton({ texto, isButtonClick, manejarclick }) {
    return (
        <button className= { isButtonClick ? 'btn-click' : 'btn-reiniciar' } onClick={manejarclick}>
            {texto}
        </button>
    )
}