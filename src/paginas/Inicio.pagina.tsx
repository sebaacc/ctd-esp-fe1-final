import Filtros from "../componentes/personajes/filtros.componente";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useAppSelector, useAppDispatch } from "../redux/store";
import { getPersonajes } from "../redux/thunk";
import { useEffect } from "react";
import { clearFiltro } from "../redux/slices/filtroSlice";

/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 *
 * Uso:
 * ``` <PaginaInicio/> ```
 *
 * @returns la pagina de inicio
 */

const PaginaInicio = () => {
  const dispatch = useAppDispatch();
  const { listaPersonajes } = useAppSelector((state) => state.personajes);
  const { value: paginaState } = useAppSelector((state) => state.paginas);

  useEffect(() => {
    dispatch(getPersonajes({ dato: paginaState, parametro: "page" }));
  }, [paginaState]);

  const limpiar = () => {
    dispatch(clearFiltro());
    dispatch(getPersonajes({ dato: paginaState, parametro: "page" }));
  }

  return (
    <div className="container">
      <div className="actions">
        <h3>Catálogo de Personajes</h3>
        <button className="danger" onClick={limpiar}>Limpiar Filtros</button>
      </div>
      <Filtros />
      <Paginacion paginaState={paginaState} />
      <GrillaPersonajes dataPersonajes={listaPersonajes} />
      <Paginacion paginaState={paginaState} />
    </div>
  );
};

export default PaginaInicio;
