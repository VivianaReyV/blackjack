/**
 * Esta función permite tomar una carta
 *
 * @param {Array<String>} baraja es un arreglo de String
 * @returns {String} retorna una carta de la baraja
 */
export const pedirCarta = (baraja) => {
  if (!baraja || baraja.length === 0) {
    throw "No hay cartas en la baraja";
  }

  return baraja.pop();
};
