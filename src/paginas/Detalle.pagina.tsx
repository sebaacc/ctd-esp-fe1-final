import "./Detalle.css";
import BotonFavorito from "../componentes/botones/boton-favorito.componente";
import TarjetaEpisodio, {
  IEpisodio,
  episodio,
} from "../componentes/episodios/tarjeta-episodio.componente";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { esFavorito } from "../funciones/esFavorito";
import { IFavorito, handleFavorito } from "../redux/slices/favoritosSlice";
import { IPersonaje } from "../componentes/personajes/grilla-personajes.componente";
import { useEffect } from "react";
import { getEpisodiosPorIds } from "../redux/thunk";

/**
 * @description Esta es la pagina de detalle. Aqui se puede mostrar la vista sobre el personaje seleccionado junto con la lista de episodios en los que aparece
 * EL TRABAJO SOBRE ESTE ARCHIVO ES OPCIONAL Y NO ES REQUISITO DE APROBACION
 *
 * @example Uso: ``` <PaginaDetalle /> ```
 *
 * @returns la pagina de detalle
 */
const PaginaDetalle = () => {
  const { personajeID } = useAppSelector((state) => state.personajeID);
  const favoritosState = useAppSelector(
    (state) => state.favoritos.listaFavoritos
  );
  const episodiosState = useAppSelector(
    (state) => state.listaEpisodios.listaEpisodios
  );
  const { isError, isLoading } = useAppSelector(
    (state) => state.listaEpisodios
  );
  const dispatch = useAppDispatch();

  const favorito: IFavorito = {
    id: personajeID.id,
    nombre: personajeID.name,
    imagen: personajeID.image,
  };

  /**
   * @author Sebastián Alejo Markoja
   * @description Esta función toma un objeto de personaje como parámetro y recorre el array de URLs en la propiedad "episode". Divide cada URL en partes utilizando "/" como separador y obtiene el último elemento, que contiene el id del episodio. Luego, convierte ese ID en un número y lo agrega a un array llamado "episodeIds". Finalmente, devuelve el array de IDs extraídos.
   * @param personaje
   * @returns {number[]}
   */
  function extraerEpisodiosID(
    personaje:
      | IPersonaje
      | {
          episode: string[];
        }
  ): number[] {
    const episodeIds: number[] = [];
    if (personaje.episode && Array.isArray(personaje.episode)) {
      for (const episodeUrl of personaje.episode) {
        const partes = episodeUrl.split("/");
        const idString = partes[partes.length - 1];

        const id = parseInt(idString, 10);
        if (!isNaN(id)) {
          episodeIds.push(id);
        }
      }
    }

    return episodeIds;
  }

  const episodeIds = extraerEpisodiosID(personajeID);

  useEffect(() => {
    dispatch(getEpisodiosPorIds(episodeIds));
  }, [personajeID]);
  /**
   * @author Sebastián Alejo Markoja
   * @description Se usa para agregar o eliminar un personaje de la lista de favoritos, cuando se hace click en el botón/elemento donde se ha colocado la función. Activa el reducer "handleFavorito" que pasa por parámetros el objeto de tipo IFavorito con el nombre y la imagen del personaje, para agregarlo o quitarlo de la lista.
   * @returns {void}
   */
  const clickFavorito = () => {
    dispatch(handleFavorito(favorito));
  };

  return (
    <div className="container">
      <h3>{personajeID.name}</h3>
      <div className={"detalle"}>
        <div className={"detalle-header"}>
          <img src={personajeID.image} alt={personajeID.name} />
          <div className={"detalle-header-texto"}>
            <p>{personajeID.name}</p>
            <p>Planeta: {personajeID.origin && personajeID.origin.name}</p>
            <p>Genero: {personajeID.gender}</p>
          </div>
          <BotonFavorito
            esFavorito={esFavorito(personajeID.id, favoritosState)}
            onClick={clickFavorito}
          />
        </div>
      </div>
      <h4>Lista de episodios donde apareció el personaje</h4>
      <div className={"episodios-grilla"}>
        {isLoading ? (
          <p>Cargando, espere por favor...</p>
        ) : episodiosState.length > 0 ? (
          episodiosState?.map((episodio) => (
            <TarjetaEpisodio
              nombre={episodio.name}
              numeroDeEpisodio={episodio.episode}
              fechaDeLanzamiento={episodio.air_date}
            />
          ))
        ) : (
          <h4>
            No se ha encontrado registro de las apariciones de este personaje en episodios. 
          </h4>
        )}
      </div>
    </div>
  );
};

export default PaginaDetalle;
