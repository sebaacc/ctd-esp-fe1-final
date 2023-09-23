import { createSlice } from "@reduxjs/toolkit";

export type PaginacionState = {
  value: number;
};
const initialState: PaginacionState = {
  value: 1,
};

export const paginacionSlice = createSlice({
  name: "pagina",
  initialState: initialState,
  reducers: {
    incrementarPagina: (state) => {
      state.value += 1;
    },
    disminuirPagina: (state) => {
      state.value -= 1;
    },
  },
});

const paginacionReducer = paginacionSlice.reducer;

export const { incrementarPagina, disminuirPagina } = paginacionSlice.actions;
export default paginacionReducer;
