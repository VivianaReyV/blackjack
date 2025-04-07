/**
 * Esta función sirve para obtener el valor de la carta en puntos
 *
 * @param {String} carta
 * @returns {Number} el valor de la carta en puntos
 */
export const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);

  return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;

  // if (isNaN(valor)) {
  //   puntos = valor === "A" ? 11 : 10;
  // } else {
  //   puntos = valor * 1;
  // }
  // console.log(puntos);
};
