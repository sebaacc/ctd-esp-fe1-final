import { Link } from "react-router-dom";
import "./encabezado.css";

/**
 * @author Sebastián Alejo Markoja
 * @description Encabezado que contiene los links para navegar entre las páginas
 * @example Uso: <Encabezado />
 * @returns el encabezado/header de la página
 */
const Encabezado = () => {
  return (
    <header>
      <div>
        <div>
          <h2>Examen Final de Frontend IV</h2>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/favoritos">Favoritos</Link>
            </li>
            <li>
              <Link to="/detalle">Detalle</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Encabezado;
