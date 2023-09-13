import {createSlice} from '@reduxjs/toolkit';


export type PaginacionState = {
    value : number
}


const initialState : PaginacionState  = {
    value : 0
}


export const paginacionSlice = createSlice({
    name : 'page',
    initialState: initialState,
    reducers : {
        INCREMENT_PAGE : (state) => {
            state.value += 1;
        },
        DECREMENT_PAGE : (state) => {
            state.value -= 1;
        },
             
    }
});


const paginacionReducer = paginacionSlice.reducer;

export const {INCREMENT_PAGE, DECREMENT_PAGE} = paginacionSlice.actions;

export default paginacionReducer;