import { createSlice, PayloadAction  } from '@reduxjs/toolkit';
import { IPersonaje } from '../../interface/personaje';
import { GET_CHARACTERS, } from './thunk';

export type PersonajeState = {
    listaPersonajes: IPersonaje[],
    isLoading: boolean,
    isError: string | null
}

const initialState : PersonajeState = {
    listaPersonajes: [],
    isLoading: true,
    isError :  null    
}

export const personajesSlice = createSlice({
    name : 'personajes',
    initialState: initialState,
    reducers : {
             
    },
    extraReducers : (builder) =>{
        builder.addCase(GET_CHARACTERS.pending, ( state   ) => {
            state.isLoading = true;
        })

        builder.addCase(GET_CHARACTERS.fulfilled, (state, action : PayloadAction<IPersonaje[]>) => {
            state.listaPersonajes = action.payload;
            state.isLoading = false;
        })

        builder.addCase(GET_CHARACTERS.rejected, ( state, action ) => {
            state.isLoading = false;
            state.isError = action.error.message ?? 'Ha ocurrido un error. Vuelva a intentarlo por favor.'
            
            
        })
},

});


const personajesReducer = personajesSlice.reducer;

export default personajesReducer;