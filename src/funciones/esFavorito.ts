/**
 * @author Sebastián Alejo Markoja
 * @description Se utiliza para verificar si un elemento con un nombre específico se encuentra en el array de "favoritosState" prorcionado por el store. Se compara el nombre ingresado por parámetro con el nombre de cada elemento del array. Si se encuentra coincidencia, devuelve true; de lo contrario, devuelve false.
 * @param {comprobarFavorito} nombre  Es el nombre del personaje que se quiere verificar si se encuentra en favoritos.
 * @param {any} favoritosState  Es el array de favoritos actual donde se buscará el personaje.
 * @returns {boolean}
 */
export function esFavorito(nombre: string, favoritosState: any[]): boolean {
    const favoritoIndex = favoritosState.findIndex(
        (item) => item.nombre === nombre
      );
      if (favoritoIndex !== -1) {
        return true;
      } else {
        return false;
      }
}