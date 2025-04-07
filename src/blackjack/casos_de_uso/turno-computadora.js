import { crearCarta, pedirCarta, valorCarta } from ".";

/**
 *
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param {Array<String>} baraja baraja
 * @param {HTMLElement} divCartasComputadora elemento HTML para mostrar las cartas
 * @param {HTMLElement} puntosHTMLelemento HTML para mostrar los puntos
 */

export const turnoComputadora = (
  puntosMinimos,
  baraja,
  divCartasComputadora,
  puntosHTML
) => {
  if (!puntosMinimos) throw new Error("Puntos mínimos son necesarios");
  if (!divCartasComputadora) throw new Error("Elemento HTML es necesario");
  if (!puntosHTML) throw new Error("Elemento HTML es necesario");
  if (!baraja) throw new Error("Baraja es necesaria");

  let puntosComputadora = 0;

  do {
    const carta = pedirCarta(baraja);
    puntosComputadora = puntosComputadora + valorCarta(carta);
    puntosHTML.innerText = puntosComputadora;
    const imgCarta = crearCarta(carta);
    divCartasComputadora.append(imgCarta);

    if (puntosMinimos > 21) {
      break;
    }
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

  setTimeout(() => {
    if (puntosComputadora === puntosMinimos) {
      alert("Nadie gana :(");
    } else if (puntosMinimos > 21) {
      alert("Computadora gana");
    } else if (puntosComputadora > 21) {
      alert("Jugador Gana");
    } else {
      alert("Computadora Gana");
    }
  }, 100);
};
