import "./tarjeta-episodio.css";

/**
 * Tarjeta para cada episodio dentro de la vista de personaje.
 *
 * Deberás agregar las propiedades necesarias para mostrar los datos de los episodios
 *
 *
 * @returns un JSX element
 */

export interface IEpisodio {
  nombre: string;
  numeroDeEpisodio: string;
  fechaDeLanzamiento: Date;
}

export interface episodio {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: Date;
}

const TarjetaEpisodio = ({
  nombre,
  numeroDeEpisodio,
  fechaDeLanzamiento,
}: IEpisodio) => {
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
