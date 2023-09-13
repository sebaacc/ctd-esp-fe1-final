import { useRef } from "react";
import "./filtros.css";
import { useAppDispatch } from "../../redux/store";
import { getPersonajes } from "../../redux/thunk";

const Filtros = () => {
  const ref = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();

  const filterByName = () => {
    if (!ref.current) return;

    if (ref.current?.value.trim() === "") {
      ref.current.value = "";
      return;
    }

    const name = ref.current.value;
    console.log(name);
    dispatch(() => dispatch(getPersonajes({ dato: name, parametro: "name" })));
  };
  return (
    <div className="filtros">
      <label htmlFor="nombre">Filtrar por nombre:</label>
      <input
        type="text"
        ref={ref}
        placeholder="Rick, Morty, Beth, Alien, ...etc"
        name="nombre"
        onChange={filterByName}
      />
    </div>
  );
};

export default Filtros;
