import { useEffect } from "react";
import { useAppSelector } from "../../redux/store";
import "./grilla-personajes.css";
import TarjetaPersonaje from "./tarjeta-personaje.componente";
import { IFavorito } from "../../redux/slices/favoritosSlice";

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
  const favoritosState = useAppSelector(
    (state) => state.favoritos.listaFavoritos
  );

  //comentario/ borrar
  useEffect(() => {
    console.log(favoritosState);
  }, [favoritosState]);


  const esFavorito = ({nombre,imagen}:IFavorito):boolean => {
      const favoritoIndex = favoritosState.findIndex(
        (item) => item.nombre === nombre
      );
      if (favoritoIndex !== -1) {
        return true;
      } else {
        return false;
      }
  }

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
            esFavorito={esFavorito({nombre: personaje.name, imagen: personaje.image})}
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
