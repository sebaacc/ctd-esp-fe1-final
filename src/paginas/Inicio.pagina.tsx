import Filtros from "../componentes/personajes/filtros.componente";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useAppSelector, useAppDispatch } from "../redux/store";
import { getPersonajes } from "../redux/thunk";
import { useEffect } from "react";
import { clearFiltro } from "../redux/slices/filtroSlice";

/**
 * @author Sebastián Alejo Markoja
 * @description Esta es la pagina principal. Aquí se ve el panel de filtros junto con la grilla de personajes.
 * @exampe Uso: <PaginaInicio/>
 * @returns La pagina de inicio
 */
const PaginaInicio = () => {
  const dispatch = useAppDispatch();
  const { listaPersonajes } = useAppSelector((state) => state.personajes);
  const { value: paginaState } = useAppSelector((state) => state.paginas);

  useEffect(() => {
    dispatch(getPersonajes({ dato: paginaState, parametro: "page" }));
  }, [paginaState]);

  /**
   * @author Sebastián Alejo Markoja
   * @description Sirve para limpiar/vaciar el filtro buscador de la página de inicio. Activa el reducer "clearFiltro" que limpia el estado de "filtroState" y luego activa el reducer "getPersonajes" para volver a consumir la api mostrando los resultados iniciales.
   * @returns {void}
   */
  const limpiar = () => {
    dispatch(clearFiltro());
    dispatch(getPersonajes({ dato: paginaState, parametro: "page" }));
  };

  return (
    <div className="container">
      <div className="actions">
        <h3>Catálogo de Personajes</h3>
        <button className="danger" onClick={limpiar}>
          Limpiar Filtros
        </button>
      </div>
      <Filtros />
      <Paginacion paginaState={paginaState} />
      <GrillaPersonajes dataPersonajes={listaPersonajes} />
      <Paginacion paginaState={paginaState} />
    </div>
  );
};

export default PaginaInicio;
