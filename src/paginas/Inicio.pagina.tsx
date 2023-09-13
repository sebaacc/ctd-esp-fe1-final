import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useAppSelector, useAppDispatch } from "../store";
import { GET_CHARACTERS } from "../store/character/thunk";

import { useEffect } from "react";


/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 * 
 * Uso: 
 * ``` <PaginaInicio/> ```
 * 
 * @returns la pagina de inicio
 */

const PaginaInicio = () => {
    const dispatch = useAppDispatch()
    const { listaPersonajes } = useAppSelector((state) => state.personajes)
    const { value: pageValue } = useAppSelector((state) => state.paginas)

       useEffect(() => {
        dispatch(GET_CHARACTERS({ dato: pageValue, parametro: 'page' }));

      }, [pageValue])

    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button className="danger">Limpiar Filtro</button>
        </div>
        <Filtros />
        <Paginacion pageValue={pageValue}/>    
       
        <GrillaPersonajes  dataPersonajes={ listaPersonajes }
/>
         <Paginacion pageValue={pageValue} />
    </div>
}


export default PaginaInicio