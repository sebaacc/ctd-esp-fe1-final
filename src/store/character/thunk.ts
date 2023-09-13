import {createAsyncThunk} from '@reduxjs/toolkit';
import { IPersonaje } from '../../interface/personaje'

export const GET_CHARACTERS = createAsyncThunk(
        'personajes/GET_CHARACTERS',
        async ({ dato, parametro }: { dato: number | string ; parametro: string }): Promise<IPersonaje[]> => {
                
                try {
                        const resp = await fetch(`https://rickandmortyapi.com/api/character/?${parametro}=${dato}`);
                        const data = await resp.json();
                        const resultsCharacters = data.results;
                        return resultsCharacters;
                      } catch (error) {
                        console.error('Error fetching data:', error);
                        throw error;
                      }

        }
      );
   


export const GET_CHARACTER_ID = createAsyncThunk('character/GET_CHARACTERS', async (id: number) : Promise<IPersonaje>=> {
        const resp = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        const data = await resp.json();
        return data;
})
