import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPersonaje } from "../../componentes/personajes/grilla-personajes.componente";
import { getPersonajeID } from "../thunk";

export type PersonajeState = {
  personajeID: IPersonaje;
  isLoading: boolean;
  isError: string | null;
};

const initialState: PersonajeState = {
  personajeID: {
    name:"Rick Sanchez",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    origin: {name:"Earth", url:"https://rickandmortyapi.com/api/location/20"},
    gender: "Male",
  },
  isLoading: true,
  isError: null,
};

export const personajeIDSlice = createSlice({
  name: "personajeID",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPersonajeID.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(
        getPersonajeID.fulfilled,
      (state, action: PayloadAction<IPersonaje>) => {
        state.personajeID = action.payload;
        state.isLoading = false;
      }
    );

    builder.addCase(getPersonajeID.rejected, (state, action) => {
      state.isLoading = false;
      state.isError =
        action.error.message ??
        "Ha ocurrido un error. Vuelva a intentarlo por favor.";
    });
  },
});

const personajeIDReducer = personajeIDSlice.reducer;

export default personajeIDReducer;
