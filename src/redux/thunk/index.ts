import { createAsyncThunk } from "@reduxjs/toolkit";
import { IPersonaje } from "../../componentes/personajes/grilla-personajes.componente";
import { IEpisodio } from "../../componentes/episodios/tarjeta-episodio.componente";

/***
 * @author Sebastián Alejo Markoja
 * @description Se usa esta función asincrónica para obtener los personajes, con la posibilidad de pasar por parámetro un nombre para filtrar la busqueda de personajes.
 * @param {string | number} dato
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

/***
 * @author Sebastián Alejo Markoja
 * @description Se usa esta función asincrónica para obtener la información de los episodios en los que apareció un personaje seleccionado. Luego será mostrada por ejemplo en el detalle del personaje.
 * @param {number[]} episodeIds los ids de los episodios del personaje seleccionado
 * @returns {IEpisodio[]}
 */
export const getEpisodiosPorIds = createAsyncThunk(
  "personajes/getEpisodiosPorIds",
  async (episodeIds: number[]): Promise<IEpisodio[]> => {
    if (!Array.isArray(episodeIds) || episodeIds.length === 0) {
      throw new Error("Los episodeIds deben ser un array no vacío de números.");
    }
    try {
      const res = await fetch(
        `https://rickandmortyapi.com/api/episode/${episodeIds.join(",")}`
      );
      if (!res.ok) {
        throw new Error("No se pudo obtener la información de los episodios.");
      }
      const dataEpisodios = await res.json();
      return dataEpisodios;
    } catch (error: any) {
      throw new Error("Error al obtener los episodios: " + error.message);
    }
  }
);
