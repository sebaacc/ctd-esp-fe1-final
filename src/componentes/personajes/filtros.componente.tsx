import "./filtros.css";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { getPersonajes } from "../../redux/thunk";
import { setFiltro } from "../../redux/slices/filtroSlice";

const Filtros = () => {
  const dispatch = useAppDispatch();
  const filtroState = useAppSelector((state) => state.filtro.filtroValor);

  /**
   * @description Funciona para actualizar el estado del input buscador a medida que el usuario escribe. Si el input vuelve a estar vacío, se vuelve a renderizar la grilla de personajes llamando el reducer "getPersonajes".
   * @param {React.ChangeEvent<HTMLInputElement>} e Recibe el valor del input buscador actual.
   * @returns {void}
   */
  const filtro = (e: React.ChangeEvent<HTMLInputElement>) => {
    const estadoActual: string = e.target.value;

    dispatch(setFiltro(e.target.value));
    if (estadoActual !== " ") {
      dispatch(getPersonajes({ dato: estadoActual, parametro: "name" }));
    }
  };

  return (
    <div className="filtros">
      <label htmlFor="nombre">Filtrar por nombre:</label>
      <input
        type="text"
        placeholder="Rick, Morty, Beth, Alien, ...etc"
        name="nombre"
        onChange={filtro}
        value={filtroState}
      />
    </div>
  );
};

export default Filtros;
