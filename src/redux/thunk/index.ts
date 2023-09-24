import { createAsyncThunk } from "@reduxjs/toolkit";
import { IPersonaje } from "../../componentes/personajes/grilla-personajes.componente";

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
