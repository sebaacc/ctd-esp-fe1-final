import "./tarjeta-episodio.css";

export interface datosEpisodio {
  nombre: string;
  numeroDeEpisodio: string;
  fechaDeLanzamiento: string;
}

export interface IEpisodio {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

/**
 * @description Tarjeta para cada episodio dentro de la vista de personaje.
 * 
 * @returns un TSX element
 */
const TarjetaEpisodio = ({
  nombre,
  numeroDeEpisodio,
  fechaDeLanzamiento,
}: datosEpisodio) => {
  return (
    <div className="tarjeta-episodio">
      <h4>{nombre}</h4>
      <div>
        <span>{numeroDeEpisodio}</span>
        <span>Lanzado el: {fechaDeLanzamiento}</span>
      </div>
    </div>
  );
};

export default TarjetaEpisodio;
