import { handleFavorito } from "../../redux/slices/favoritosSlice";
import { useAppDispatch } from "../../redux/store";
import BotonFavorito from "../botones/boton-favorito.componente";
import "./tarjeta-personaje.css";

export interface ITarjetaPersonaje {
  nombre: string;
  imagen: string;
  esFavorito: boolean;
}

/**
 * @author Sebastián Alejo Markoja
 * @description Tarjeta para cada personaje dentro de la grilla de personajes.
 * Tiene propiedades para mostrar los datos de los personajes. Por parámetros recibe nombre, imagen y esFavorito.
 * @param {string} nombre
 * @param {string} imagen
 * @param {boolean} esFavorito
 * @returns la tarjeta del personaje
 */
const TarjetaPersonaje = ({
  nombre,
  imagen,
  esFavorito,
}: ITarjetaPersonaje) => {
  const dispatch = useAppDispatch();

  /**
   * @author Sebastián Alejo Markoja
   * @description Se usa para agregar o eliminar un personaje de la lista de favoritos, cuando se hace click en el botón/elemento donde se ha colocado la función. Activa el reducer "handleFavorito" que pasa por parámetros el nombre y la imagen del personaje para agregarlo o quitarlo de la lista.
   * @returns {void}
   */
  const clickFavorito = () => {
    dispatch(handleFavorito({ nombre, imagen }));
  };

  return (
    <div className="tarjeta-personaje">
      <img src={imagen} alt={nombre} />
      <div className="tarjeta-personaje-body">
        <span>{nombre}</span>
        <BotonFavorito esFavorito={esFavorito} onClick={clickFavorito} />
      </div>
    </div>
  );
};

export default TarjetaPersonaje;
