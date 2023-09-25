import "./paginacion.css";
import { useAppDispatch } from "../../redux/store";
import {
  disminuirPagina,
  incrementarPagina,
} from "../../redux/slices/paginacionSlice";

export interface IPaginacion {
  paginaState: number;
}

/**
 * @author Sebastián Alejo Markoja
 * @description Componente que contiene los botones para paginar.
 * @param {IPaginacion} paginaState es el estado de la pagina, en que número se encuentra.
 * @returns un TSX element
 */

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
