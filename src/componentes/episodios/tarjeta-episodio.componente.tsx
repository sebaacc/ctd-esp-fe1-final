import "./tarjeta-episodio.css";

export interface episodio {
  nombre: string;
  numeroDeEpisodio: string;
  fechaDeLanzamiento: Date;
}

export interface IEpisodio {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: Date;
}

/**
 * Tarjeta para cada episodio dentro de la vista de personaje.
 *
 * Deberás agregar las propiedades necesarias para mostrar los datos de los episodios
 *
 *
 * @returns un JSX element
 */
const TarjetaEpisodio = ({
  nombre,
  numeroDeEpisodio,
  fechaDeLanzamiento,
}: episodio) => {
  const fechaString = fechaDeLanzamiento.toLocaleDateString();
  return (
    <div className="tarjeta-episodio">
      <h4>{nombre}</h4>
      <div>
        <span>{numeroDeEpisodio}</span>
        <span>Lanzado el: {fechaString}</span>
      </div>
    </div>
  );
};

export default TarjetaEpisodio;
