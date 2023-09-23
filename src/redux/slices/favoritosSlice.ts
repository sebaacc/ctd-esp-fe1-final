import { createSlice } from "@reduxjs/toolkit";
import { IPersonaje } from "../../componentes/personajes/grilla-personajes.componente";

export type favoritosState = {
  listaFavoritos: IPersonaje[];
};

const initialState: favoritosState = {
    listaFavoritos: [],
};

export const favoritosSlice = createSlice({
  name: "favoritos",
  initialState: initialState,
  reducers: {
    addFavorito: (state, action) => { 
        state.listaFavoritos = [...state.listaFavoritos, action.payload];
        },
    removeFavorito: (state, action) => {
        state.listaFavoritos = state.listaFavoritos.filter(
            (item) => item.id !== action.payload.id
          );
      },
    clearFavoritos: (state) => {
      state.listaFavoritos = [];
    }
  },
});

export const { addFavorito, removeFavorito, clearFavoritos } = favoritosSlice.actions;

const favoritosReducer = favoritosSlice.reducer;

export default favoritosReducer;