import { useAppSelector } from '../../redux/store';
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import { IGrillaPersonajes } from '../../interfaces/grilla-personajes';

/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un TSX element 
 */
const GrillaPersonajes = ({ dataPersonajes } : IGrillaPersonajes) => {
  
    const {isError, isLoading} = useAppSelector((state) => state.personajes)

    return <div className="grilla-personajes">

         {isLoading ? <p>Cargando, espere por favor...</p> :
       
       dataPersonajes?.map(personaje =>
                <TarjetaPersonaje key={personaje.id} nombre={personaje.name} imagen={personaje.image} esFavorito={false}/>
           )}
          {isError  && <h3>No se han encontrado resultados, vuelva a intentarlo</h3>} 
      
    </div>
}
 
export default GrillaPersonajes;