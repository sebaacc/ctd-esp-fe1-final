import { createSlice } from "@reduxjs/toolkit";

export type filtroState = {
  filtroValor: string;
};

const initialState: filtroState = {
  filtroValor: "",
};

export const filtroSlice = createSlice({
  name: "filtro",
  initialState: initialState,
  reducers: {
    setFiltro: (state, action) => {
      state.filtroValor = action.payload;
    },
    clearFiltro: (state) => {
      state.filtroValor = "";
    },
  },
});

export const { setFiltro, clearFiltro } = filtroSlice.actions;

const filtroReducer = filtroSlice.reducer;

export default filtroReducer;
