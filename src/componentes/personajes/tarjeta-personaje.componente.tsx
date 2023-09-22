import BotonFavorito from "../botones/boton-favorito.componente";
import "./tarjeta-personaje.css";

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes.
 *
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 *
 *
 * @returns un JSX element
 */
export interface ITarjetaPersonaje {
  nombre: string;
  imagen: string;
  esFavorito: boolean;
}

const TarjetaPersonaje = ({
  nombre,
  imagen,
  esFavorito,
}: ITarjetaPersonaje) => {
  return (
    <div className="tarjeta-personaje">
      <img src={imagen} alt={nombre} />
      <div className="tarjeta-personaje-body">
        <span>{nombre}</span>
        <BotonFavorito esFavorito={esFavorito} />
      </div>
    </div>
  );
};

export default TarjetaPersonaje;
