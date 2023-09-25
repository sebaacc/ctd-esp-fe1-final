import { Link } from "react-router-dom";
import { handleFavorito } from "../../redux/slices/favoritosSlice";
import { useAppDispatch } from "../../redux/store";
import { getPersonajeID } from "../../redux/thunk";
import BotonFavorito from "../botones/boton-favorito.componente";
import "./tarjeta-personaje.css";

export interface ITarjetaPersonaje {
  id: number | undefined;
  nombre: string;
  imagen: string;
  esFavorito: boolean;
}

/**
 * @author Sebastián Alejo Markoja
 * @description Tarjeta para cada personaje dentro de la grilla de personajes.
 * Tiene propiedades para mostrar los datos de los personajes. Por parámetros recibe id, nombre, imagen y esFavorito.
 * @param {number} id
 * @param {string} nombre
 * @param {string} imagen
 * @param {boolean} esFavorito
 * @returns la tarjeta del personaje
 */
const TarjetaPersonaje = ({
  id,
  nombre,
  imagen,
  esFavorito,
}: ITarjetaPersonaje) => {
  const dispatch = useAppDispatch();

  /**
   * @author Sebastián Alejo Markoja
   * @description Se usa para agregar o eliminar un personaje de la lista de favoritos, cuando se hace click en el botón/elemento donde se ha colocado la función. Activa el reducer "handleFavorito" que se le pasa como argumentos el id, nombre y la imagen del personaje para agregarlo si no lo ha encontrado en la lista, o quitarlo si es que ya se encontraba en la misma.
   * @returns {void}
   */
  const clickFavorito = () => {
    dispatch(handleFavorito({ id, nombre, imagen }));
  };

  /**
   * @author Sebastián Alejo Markoja
   * @description Se encarga de activar el reducer de getPersonajeID, el cual recibe como parámetro el ID del personaje seleccionado y obtiene de la api su información.
   * @param {number} id
   * @returns {void}
   */
  const buscarPersonajeID = (id: number | undefined) => {
    dispatch(getPersonajeID(id));
  };

  return (
    <div className="tarjeta-personaje">
      <Link to="detalle" onClick={() => buscarPersonajeID(id)}>
        <img src={imagen} alt={nombre} />
      </Link>
      <div className="tarjeta-personaje-body">
        <span>{nombre}</span>
        <BotonFavorito esFavorito={esFavorito} onClick={clickFavorito} />
      </div>
    </div>
  );
};

export default TarjetaPersonaje;
