import "./paginacion.css";
import { useAppDispatch } from "../../redux/store";
import { incrementar, reducir } from "../../redux/slices/paginacionSlice";
import { IPaginacion } from "./paginacion.interface";

/**
 * Componente que contiene los botones para paginar
 *
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 *
 *
 * @returns un JSX element
 */
const Paginacion = ({ valorPagina }: IPaginacion) => {
  const dispatch = useAppDispatch();

  return (
    <div className="paginacion">
      <button onClick={() => dispatch(incrementar())} className={"primary"}>
        Anterior
      </button>
      <button onClick={() => dispatch(reducir())} className={"primary"}>
        Siguiente
      </button>
    </div>
  );
};

export default Paginacion;
