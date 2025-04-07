import _ from "underscore";

/**
 * Esta función crea una nueva baraja
 *
 * @param {Array<String>} tiposDeCarta Ejemplo: ["C", "D", "H", "S"]
 * @param {Array<String>} tiposEspeciales Ejemplo: ["A", "J", "Q", "K"]
 * @returns {Array<String>} retorna una nueva baraja de cartas
 */

export const crearBaraja = (tiposDeCarta, tiposEspeciales) => {
  if (!tiposDeCarta || tiposDeCarta.length === 0)
    throw new Error("TiposDeCarta es obligatorio como un arreglo de string");

  if (!tiposEspeciales || tiposEspeciales.length === 0)
    throw new Error("tiposEspeciales es obligatorio como un arreglo de string");

  let baraja = [];

  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDeCarta) {
      baraja.push(i + tipo);
    }
  }

  for (let tipo of tiposDeCarta) {
    for (let esp of tiposEspeciales) {
      baraja.push(esp + tipo);
    }
  }
  baraja = _.shuffle(baraja);

  return baraja;
};

// export default crearBaraja;
