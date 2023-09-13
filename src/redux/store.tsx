import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import personajesReducer from "./slices/personajesSlice";
import paginacionReducer from "./slices/paginacionSlice";
import filtroReducer from "./slices/filtroSlice";

const store = configureStore({
  reducer: {
    personajes: personajesReducer,
    paginas: paginacionReducer,
    filtro: filtroReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

type DispatchFunc = () => AppDispatch;

export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
