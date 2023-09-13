import "./filtros.css";
import { useAppDispatch } from "../../redux/store";
import { getPersonajes } from "../../redux/thunk";
import { useRef } from "react";

const Filtros = () => {
  const buscador = useRef<null | HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const filtro = () => {
    if (!buscador.current) return;
    if (buscador.current?.value.trim() === " ") {
      buscador.current.value = " ";
      return;
    }
    const nombre = buscador.current.value;
    dispatch(() =>
      dispatch(getPersonajes({ dato: nombre, parametro: "name" }))
    );
  };
  return (
    <div className="filtros">
      <label htmlFor="nombre">Filtrar por nombre:</label>
      <input
        type="text"
        ref={buscador}
        placeholder="Rick, Morty, Beth, Alien, ...etc"
        name="nombre"
        onChange={filtro}
      />
    </div>
  );
};

export default Filtros;
