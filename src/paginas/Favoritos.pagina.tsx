import TarjetaPersonaje from "../componentes/personajes/tarjeta-personaje.componente";
import { esFavorito } from "../funciones/esFavorito";
import { clearFavoritos } from "../redux/slices/favoritosSlice";
import { useAppDispatch, useAppSelector } from "../redux/store";

export interface comprobarFavorito {
  nombre: string;
}

/**
 * @author Sebastián Alejo Markoja
 * @description Esta es la pagina de favoritos. Aquí se ven todos los personajes marcados como favoritos
 * @example Uso: <PaginaFavoritos />
 * @returns la pagina de favoritos
 */
const PaginaFavoritos = () => {
  const favoritosState = useAppSelector(
    (state) => state.favoritos.listaFavoritos
  );
  const dispatch = useAppDispatch();

  /**
   * @author Sebastián Alejo Markoja
   * @description Se usa para eliminar todos los elementos marcados como favoritos de una vez. Al llamar esta función, se activa el reducer "clearFavoritos" del slice "favoritosSlice" que se encarga de vaciar por completo la lista de favoritos en el estado de "favoritosState".
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
            esFavorito={esFavorito(personaje.nombre, favoritosState)}
          />
        ))}
        {favoritosState.length == 0 ? (
          <h3>No hay favoritos, seleccionalos en el Inicio!</h3>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default PaginaFavoritos;
