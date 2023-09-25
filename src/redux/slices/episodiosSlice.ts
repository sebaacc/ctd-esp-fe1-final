import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getEpisodiosPorIds } from "../thunk";
import { IEpisodio } from "../../componentes/episodios/tarjeta-episodio.componente";

export type EpisodiosState = {
    listaEpisodios: IEpisodio[];
    isLoading: boolean;
    isError: string | null;
  };
  
  const initialState: EpisodiosState = {
    listaEpisodios: [],
    isLoading: true,
    isError: null,
  };
  
  export const episodiosSlice = createSlice({
    name: "episodios",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(getEpisodiosPorIds.pending, (state) => {
        state.isLoading = true;
      });
  
      builder.addCase(
        getEpisodiosPorIds.fulfilled,
        (state, action: PayloadAction<IEpisodio[]>) => {
          state.listaEpisodios = action.payload;
          state.isLoading = false;
        }
      );
  
      builder.addCase(getEpisodiosPorIds.rejected, (state, action) => {
        state.isLoading = false;
        state.isError =
          action.error.message ??
          "Ha ocurrido un error. Vuelva a intentarlo por favor.";
      });
    },
  });
  
  const episodiosReducer = episodiosSlice.reducer;
  
  export default episodiosReducer;