import { IPersonaje } from "./personaje";

export interface IGrillaPersonajes{
  dataPersonajes: IPersonaje[]
}

export interface ITarjetaPersonaje {
    nombre: string;
    imagen: string;
    esFavorito: boolean;
  }