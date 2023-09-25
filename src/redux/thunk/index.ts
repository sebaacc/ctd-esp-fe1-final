import { createAsyncThunk } from "@reduxjs/toolkit";
import { IPersonaje } from "../../componentes/personajes/grilla-personajes.componente";

/***
 * @author Sebastián Alejo Markoja 
 * @description Se usa esta función asincrónica para obtener los personajes, con la posibilidad de pasar por parámetro un nombre para filtrar la busqueda de personajes.
 * @param {string} dato 
 * @param {string} parametro
 * @returns {IPersonaje[]} 
 */
export const getPersonajes = createAsyncThunk(
  "personajes/getPersonajes",
  async ({
    dato,
    parametro,
  }: {
    dato: number | string;
    parametro: string;
  }): Promise<IPersonaje[]> => {
    try {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/?${parametro}=${dato}`
      );
      const data = await res.json();
      const personajes = data.results;
      return personajes;
    } catch (error) {
      throw error;
    }
  }
);


/***
 * @author Sebastián Alejo Markoja 
 * @description Se usa esta función asincrónica para obtener solo información de un personaje seleccionado.
 * @param {number} id El id del personaje seleccionado 
 * @returns {string} 
 */
export const getPersonajeID = createAsyncThunk(
  "personajes/getPersonajeID",
  async (id: number | undefined): Promise<IPersonaje> => {
    try {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const dataID = await res.json();
      const personajeID = dataID;
      return personajeID;
    } catch (error) {
      throw error;
    }
  }
);
