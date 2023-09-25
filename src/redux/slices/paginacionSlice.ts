import { createSlice } from "@reduxjs/toolkit";

export type PaginacionState = {
  paginaState: number;
};
const initialState: PaginacionState = {
  paginaState: 1,
};

export const paginacionSlice = createSlice({
  name: "pagina",
  initialState: initialState,
  reducers: {
    incrementarPagina: (state) => {
      state.paginaState += 1;
    },
    disminuirPagina: (state) => {
      state.paginaState -= 1;
    },
  },
});

const paginacionReducer = paginacionSlice.reducer;

export const { incrementarPagina, disminuirPagina } = paginacionSlice.actions;
export default paginacionReducer;
