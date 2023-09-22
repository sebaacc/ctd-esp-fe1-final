import "./paginacion.css";
import { useAppDispatch } from "../../redux/store";
import {
  disminuirPagina,
  incrementarPagina,
} from "../../redux/slices/paginacionSlice";


/**
 * Componente que contiene los botones para paginar
 *
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 *
 *
 * @returns un JSX element
 */

export interface IPaginacion {
  paginaState: number
}

const Paginacion = ({ paginaState }: IPaginacion) => {
  const dispatch = useAppDispatch();

  return (
    <div className="paginacion">
      <button
        disabled={paginaState <= 1 ? true : false}
        onClick={() => dispatch(disminuirPagina())}
        className={"primary"}
      >
        Anterior
      </button>
      <button
        onClick={() => dispatch(incrementarPagina())}
        className={"primary"}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Paginacion;
