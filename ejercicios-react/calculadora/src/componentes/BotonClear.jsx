import '../stylesheets/BotonClear.css'

export const BotonClear = (props) => (
    <div className='btn-clear' onClick={props.manejarClear}>
        {props.children}
    </div>
)