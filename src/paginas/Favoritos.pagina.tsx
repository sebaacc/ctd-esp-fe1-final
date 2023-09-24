import TarjetaPersonaje from "../componentes/personajes/tarjeta-personaje.componente";
import { IFavorito, clearFavoritos } from "../redux/slices/favoritosSlice";
import { useAppDispatch, useAppSelector } from "../redux/store";

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

  const esFavorito = ({ nombre, imagen }: IFavorito): boolean => {
    const favoritoIndex = favoritosState.findIndex(
      (item) => item.nombre === nombre
    );
    if (favoritoIndex !== -1) {
      return true;
    } else {
      return false;
    }
  };

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
              nombre: personaje.nombre,
              imagen: personaje.imagen,
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
