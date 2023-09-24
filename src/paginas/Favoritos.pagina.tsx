import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import TarjetaPersonaje from "../componentes/personajes/tarjeta-personaje.componente";
import { IFavorito } from "../redux/slices/favoritosSlice";
import { useAppSelector } from "../redux/store";

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 *
 * Uso:
 * ``` <PaginaFavoritos /> ```
 *
 * @returns la pagina de favoritos
 */
const PaginaFavoritos = () => {
  const { listaPersonajes } = useAppSelector((state) => state.personajes);
  const { isError, isLoading } = useAppSelector((state) => state.personajes);
  const favoritosState = useAppSelector(
    (state) => state.favoritos.listaFavoritos
  );

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
  return (
    <div className="container">
      <div className="actions">
        <h3>Personajes Favoritos</h3>
        <button className="danger">Test Button</button>
      </div>
      <div className="grilla-personajes">
        {isLoading ? (
          <p>Cargando, espere por favor...</p>
        ) : (
          favoritosState?.map((personaje) => (
            <TarjetaPersonaje
              nombre={personaje.nombre}
              imagen={personaje.imagen}
              esFavorito={esFavorito({
                nombre: personaje.nombre,
                imagen: personaje.imagen,
              })}
            />
          ))
        )}
        {isError && (
          <h3>
            No se han encontrado resultados, por favor vuelva a intentarlo
          </h3>
        )}
      </div>
    </div>
  );
};

export default PaginaFavoritos;
