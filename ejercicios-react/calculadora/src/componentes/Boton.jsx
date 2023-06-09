import '../stylesheets/Boton.css'

export function Boton(props) {

    const isOperator = valor => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=')
    }

    return (
        <button className= {`btn-contenedor ${isOperator(props.children) ? 'operator': ''}`.trimEnd()} onClick={() => props.manejarClick(props.children)}>
            {props.children}
        </button>
    )
}