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
    incrementar: (state) => {
      state.value += 1;
    },
    reducir: (state) => {
      state.value -= 1;
    },
  },
});

const paginacionReducer = paginacionSlice.reducer;

export const { incrementar, reducir } = paginacionSlice.actions;

export default paginacionReducer;
