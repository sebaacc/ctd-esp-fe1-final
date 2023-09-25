import "./Detalle.css";
import BotonFavorito from "../componentes/botones/boton-favorito.componente";
import TarjetaEpisodio from "../componentes/episodios/tarjeta-episodio.componente";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { esFavorito } from "../funciones/esFavorito";
import { IFavorito, handleFavorito } from "../redux/slices/favoritosSlice";

export interface IEpisodio {
  nombre: string;
  numeroDeEpisodio: string;
  fechaDeLanzamiento: Date;
}

/**
 * @description Esta es la pagina de detalle. Aqui se puede mostrar la vista sobre el personaje seleccionado junto con la lista de episodios en los que aparece
 * EL TRABAJO SOBRE ESTE ARCHIVO ES OPCIONAL Y NO ES REQUISITO DE APROBACION
 *
 * @example Uso: ``` <PaginaDetalle /> ```
 *
 * @returns la pagina de detalle
 */
const PaginaDetalle = () => {
  const episodio: IEpisodio = {
    nombre: "Sebastián",
    numeroDeEpisodio: "469",
    fechaDeLanzamiento: new Date(),
  };

  const { personajeID } = useAppSelector((state) => state.personajeID);
  const favoritosState = useAppSelector(
    (state) => state.favoritos.listaFavoritos
  );
  const dispatch = useAppDispatch();

  const favorito: IFavorito = {
    nombre: personajeID.name,
    imagen: personajeID.image,
  };

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
            esFavorito={esFavorito(personajeID.name, favoritosState)}
            onClick={clickFavorito}
          />
        </div>
      </div>
      <h4>Lista de episodios donde apareció el personaje</h4>
      <div className={"episodios-grilla"}>
        <TarjetaEpisodio
          nombre={episodio.nombre}
          numeroDeEpisodio={episodio.numeroDeEpisodio}
          fechaDeLanzamiento={episodio.fechaDeLanzamiento}
        />
        <TarjetaEpisodio
          nombre={episodio.nombre}
          numeroDeEpisodio={episodio.numeroDeEpisodio}
          fechaDeLanzamiento={episodio.fechaDeLanzamiento}
        />
        <TarjetaEpisodio
          nombre={episodio.nombre}
          numeroDeEpisodio={episodio.numeroDeEpisodio}
          fechaDeLanzamiento={episodio.fechaDeLanzamiento}
        />
      </div>
    </div>
  );
};

export default PaginaDetalle;
