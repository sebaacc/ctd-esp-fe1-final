import { useAppSelector } from "../../redux/store";
import "./grilla-personajes.css";
import TarjetaPersonaje from "./tarjeta-personaje.componente";

/**
 * Grilla de personajes para la pagina de inicio
 *
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 *
 *
 * @returns un TSX element
 */

export interface IPersonaje {
  id?: number;
  name: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
  origin?: {};
  location?: {};
  image: string;
  episode?: [];
  url: string;
  created: string;
}

export interface IGrillaPersonajes {
  dataPersonajes: IPersonaje[];
}


const GrillaPersonajes = ({ dataPersonajes }: IGrillaPersonajes) => {
  const { isError, isLoading } = useAppSelector((state) => state.personajes);

  return (
    <div className="grilla-personajes">
      {isLoading ? (
        <p>Cargando, espere por favor...</p>
      ) : (
        dataPersonajes?.map((personaje) => (
          <TarjetaPersonaje
            key={personaje.id}
            nombre={personaje.name}
            imagen={personaje.image}
            esFavorito={false}
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
