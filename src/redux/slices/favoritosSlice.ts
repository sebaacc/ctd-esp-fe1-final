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
    handleFavorito: (state, action) => {
      const favoritoIndex = state.listaFavoritos.findIndex(
        (item) => item.nombre === action.payload.nombre
      );

      if (favoritoIndex !== -1) {
        state.listaFavoritos.splice(favoritoIndex, 1);
      } else {
        state.listaFavoritos.push(action.payload);
      }
    },
    clearFavoritos: (state) => {
      state.listaFavoritos = [];
    },
  },
});

export const { handleFavorito, clearFavoritos } = favoritosSlice.actions;

const favoritosReducer = favoritosSlice.reducer;

export default favoritosReducer;
