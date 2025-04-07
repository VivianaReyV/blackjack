import _ from "underscore";
// importación por defecto
// import { crearBaraja } from "./casos_de_uso/crear-baraja.js";
// importación individual
// import { crearBaraja } from "./casos_de_uso/crear-baraja.js";
// import { pedirCarta } from "./casos_de_uso/pedir-carta.js";
// import { valorCarta } from "./casos_de_uso/valor-carta.js";

import {
  crearBaraja,
  pedirCarta,
  turnoComputadora,
  crearCarta,
  valorCarta,
} from "./casos_de_uso";

/**
 * 2C = Two of Clubs (Tréboles)
 * 2D = Two of Diamonds (Diamantes)
 * 2H = Two of Hearts (Corazones)
 * 2S = Two of Spades (Espadas)
 */

const miModulo = (() => {
  "use strict";

  let baraja = [];
  let carta = "";
  const tipos = ["C", "D", "H", "S"],
    especiales = ["A", "J", "Q", "K"];
  let puntosJugador = 0,
    puntosComputadora = 0;

  // Referencias del HTML
  const btnPedir = document.querySelector("#btnPedir"),
    btnNuevo = document.querySelector("#btnNuevo"),
    btnDetener = document.querySelector("#btnDetener");

  const divCartasJugador = document.querySelector("#jugador-cartas"),
    divCartasComputadora = document.querySelector("#computadora-cartas"),
    puntosHTML = document.querySelectorAll("small");

  // Esta función inicializa el juego
  const inicializarJuego = (numJugadores = 2) => {
    console.clear();
    baraja = crearBaraja(tipos, especiales);
    carta = pedirCarta(baraja);

    puntosJugador = 0;
    puntosComputadora = 0;
    puntosHTML.forEach((elem) => (elem.innerText = 0));
    divCartasJugador.innerHTML = "";
    divCartasComputadora.innerHTML = "";
    btnPedir.disabled = false;
    btnDetener.disabled = false;
  };

  // Eventos
  btnPedir.addEventListener("click", () => {
    const carta = pedirCarta(baraja);
    puntosJugador = puntosJugador + valorCarta(carta);
    puntosHTML[0].innerText = puntosJugador;

    const imgCarta = crearCarta(carta);
    divCartasJugador.append(imgCarta);

    if (puntosJugador > 21) {
      console.warn("Lo siento mucho, perdiste");
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(
        puntosJugador,
        baraja,
        divCartasComputadora,
        puntosHTML[1]
      );
    } else if (puntosJugador === 21) {
      console.warn("21, genial!");
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(
        puntosJugador,
        baraja,
        divCartasComputadora,
        puntosHTML[1]
      );
    }
  });

  btnDetener.addEventListener("click", () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(
      puntosJugador,
      baraja,
      divCartasComputadora,
      puntosHTML[1]
    );
  });

  btnNuevo.addEventListener("click", () => {
    inicializarJuego();
  });

  return {
    nuevoJuego: inicializarJuego,
  };
})();
