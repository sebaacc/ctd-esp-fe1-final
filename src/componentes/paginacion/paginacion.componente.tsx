import './paginacion.css';
import { useAppDispatch } from '../../store';
import { DECREMENT_PAGE, INCREMENT_PAGE } from '../../store/paginacion/slice';
import { IPaginacion } from './paginacion.interface';

/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns un JSX element 
 */
const Paginacion = ({pageValue} : IPaginacion) => {
    const dispatch = useAppDispatch()

    return <div className="paginacion">
        <button onClick={()=> dispatch(DECREMENT_PAGE())} className={"primary"}>Anterior</button>
         <button onClick={()=>dispatch(INCREMENT_PAGE())} className={"primary"}>Siguiente</button>
    </div>
}

export default Paginacion;