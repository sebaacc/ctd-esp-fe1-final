import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import personajesReducer from "./character/personajesSlice";
import paginacionReducer from "./paginacion/slice";


 const store = configureStore({
    reducer : {
        personajes: personajesReducer,
        paginas: paginacionReducer,
    }
});

type RootState =  ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

type DispatchFunc = () => AppDispatch;

export const useAppDispatch : DispatchFunc = useDispatch
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;

export default store;