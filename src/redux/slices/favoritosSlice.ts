import { createSlice } from "@reduxjs/toolkit";

export interface IFavorito {
    nombre: string;
    imagen: string;
  }

export type favoritosState = {
  listaFavoritos: IFavorito[];
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
            (item) => item.nombre !== action.payload.nombre
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