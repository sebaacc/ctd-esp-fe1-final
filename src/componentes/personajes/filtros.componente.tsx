import "./filtros.css";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { getPersonajes } from "../../redux/thunk";
import { useRef } from "react";
import { setFiltro } from "../../redux/slices/filtroSlice";

const Filtros = () => {
  //const buscador = useRef<null | HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  // const filtro = () => {
  //   if (!buscador.current) return;
  //   if (buscador.current?.value.trim() === " ") {
  //     buscador.current.value = " ";
  //     return;
  //   }
  //   const nombre = buscador.current.value;
  //   dispatch(() =>
  //     dispatch(getPersonajes({ dato: nombre, parametro: "name" }))
  //   );
  // };
  const filtroState = useAppSelector((state) => state.filtro.filtroValor);
  const filtro = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFiltro(e.target.value));
    if (!filtroState) return;
    if (filtroState.trim() === " ") {
      setFiltro(" ");
      return;
    }
    dispatch(() =>
      dispatch(getPersonajes({ dato: filtroState, parametro: "name" }))
    );
  };
  return (
    <>
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
      {/*<div className="filtros">
      <label htmlFor="nombre">Filtrar por nombre:</label>
      <input
        type="text"
        ref={buscador}
        placeholder="Rick, Morty, Beth, Alien, ...etc"
        name="nombre"
        onChange={filtro}
      />
  </div>*/}
    </>
  );
};

export default Filtros;
