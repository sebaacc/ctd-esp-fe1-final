import { useAppSelector } from "../../redux/store";
import "./grilla-personajes.css";
import TarjetaPersonaje from "./tarjeta-personaje.componente";
import { esFavorito } from "../../funciones/esFavorito";

export interface IPersonaje {
  id?: number;
  name: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
  origin?: {
    name: string,
    url: string
  };
  location?: {
    name: string,
    url: string
  };
  image: string;
  episode?: string[];
  url?: string;
  created?: string;
}

export interface IGrillaPersonajes {
  dataPersonajes: IPersonaje[];
}

/**
 * @description Grilla de personajes para la pagina de inicio. Se encuentran las funciones necesarias para mostrar y paginar los personajes
 * @param {IGrillaPersonajes} dataPersonajes
 * @returns la grilla de Personajes
 */

const GrillaPersonajes = ({ dataPersonajes }: IGrillaPersonajes) => {
  const { isError, isLoading } = useAppSelector((state) => state.personajes);
  const favoritosState = useAppSelector((state) => state.favoritos.listaFavoritos);

  return (
    <div className="grilla-personajes">
      {isLoading ? (
        <p>Cargando, espere por favor...</p>
      ) : (
        dataPersonajes?.map((personaje) => (
          <TarjetaPersonaje
            key={personaje.id}
            id={personaje.id}
            nombre={personaje.name}
            imagen={personaje.image}
            esFavorito={esFavorito(personaje.id, favoritosState)}
          />
        ))
      )}
      {isError && (
        <h3>No se han encontrado resultados, por favor vuelva a intentarlo</h3>
      )}
    </div>
  );
};

export default GrillaPersonajes;
