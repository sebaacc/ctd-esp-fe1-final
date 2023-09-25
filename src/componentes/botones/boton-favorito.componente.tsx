import "./boton-favorito.css";

export interface IBotonFavorito {
  esFavorito: boolean;
  onClick?: () => void;
}

/**
 * @author Sebastián Alejo Markoja
 * @description Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo.
 * @param {IBotonFavorito} esFavorito
 * @param {IBotonFavorito} onClick
 * @returns el botón para marcar como favorito
 */
const BotonFavorito = ({ esFavorito, onClick }: IBotonFavorito) => {
  const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png";
  return (
    <div className="boton-favorito" onClick={onClick}>
      <img src={src} alt={"favorito"} />
    </div>
  );
};

export default BotonFavorito;
