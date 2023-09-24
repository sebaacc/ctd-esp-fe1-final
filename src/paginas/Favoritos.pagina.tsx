import TarjetaPersonaje from "../componentes/personajes/tarjeta-personaje.componente";
import { IFavorito, clearFavoritos } from "../redux/slices/favoritosSlice";
import { useAppDispatch, useAppSelector } from "../redux/store";

export interface comprobarFavorito {
  nombre: string;
}

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 *
 * Uso:
 * ``` <PaginaFavoritos /> ```
 *
 * @returns la pagina de favoritos
 */
const PaginaFavoritos = () => {
  const favoritosState = useAppSelector(
    (state) => state.favoritos.listaFavoritos
  );
  const dispatch = useAppDispatch();

/**
 * @author Sebastián Alejo Markoja
 * @description Se utiliza para verificar si un elemento con un nombre específico se encuentra en el array de "favoritosState" prorcionado por el store. Se compara el nombre ingresado por parámetro con el nombre de cada elemento del array. Si se encuentra coincidencia, devuelve true; de lo contrario, devuelve false.
 * @param {comprobarFavorito} nombre  Es el nombre del personaje que se quiere verificar si se encuentra en favoritos.
 * @returns {boolean}
 */
  const esFavorito = ({ nombre }:comprobarFavorito ): boolean => {
    const favoritoIndex = favoritosState.findIndex(
      (item) => item.nombre === nombre
    );
    if (favoritoIndex !== -1) {
      return true;
    } else {
      return false;
    }
  };

/**
 * @author Sebastián Alejo Markoja
 * @description Es útil cuando se desea eliminar todos los elementos marcados como favoritos de una vez. Al llamar esta función, se activa el reducer "clearFavoritos" del slice "favoritosSlice" que se encarga de vaciar por completo la lista de favoritos en el estado de "favoritosState".
 * @returns {void}
 */
  const limpiarFavs = () => {
    dispatch(clearFavoritos());
  };
  return (
    <div className="container">
      <div className="actions">
        <h3>Personajes Favoritos</h3>
        <button className="danger" onClick={limpiarFavs}>
          Limpiar Favoritos
        </button>
      </div>
      <div className="grilla-personajes">
        {favoritosState?.map((personaje, index) => (
          <TarjetaPersonaje
            key={index}
            nombre={personaje.nombre}
            imagen={personaje.imagen}
            esFavorito={esFavorito({
              nombre: personaje.nombre
            })}
          />
        ))}
        {favoritosState.length == 0 ? (
          <h3>No hay favoritos, encontrá los tuyos en el Inicio!</h3>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default PaginaFavoritos;
