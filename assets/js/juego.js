/**
 * 2C = Two of Clubs (Tréboles)
 * 2D = Two of Diamonds (Diamantes)
 * 2H = Two of Hearts (Corazones)
 * 2S = Two of Spades (Espadas)
 */

let baraja = [];
const tipos = ["C", "D", "H", "S"];
const especiales = ["A", "J", "Q", "K"];
let puntosJugador = 0;
let puntosComputadora = 0;

// Referencias del HTML
const btnPedir = document.querySelector("#btnPedir");
const btnNuevo = document.querySelector("#btnNuevo");
const btnDetener = document.querySelector("#btnDetener");

const puntosHTML = document.querySelectorAll("small");

// Esta función crea una nueva baraja
const crearBaraja = () => {
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tipos) {
      baraja.push(i + tipo);
    }
  }

  for (let tipo of tipos) {
    for (let esp of especiales) {
      baraja.push(esp + tipo);
    }
  }
  baraja = _.shuffle(baraja);
  console.log(baraja);
  return baraja;
};

crearBaraja();

// Esta función permite tomar una carta
const pedirCarta = () => {
  if (baraja.length === 0) {
    throw "No hay cartas en la baraja";
  }

  const carta = baraja.pop();
  return carta;
};

// pedirCarta();

const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);

  return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;

  // if (isNaN(valor)) {
  //   puntos = valor === "A" ? 11 : 10;
  // } else {
  //   puntos = valor * 1;
  // }
  // console.log(puntos);
};

const valor = valorCarta(pedirCarta());

// Eventos
btnPedir.addEventListener("click", () => {
  const carta = pedirCarta();
  puntosJugador = puntosJugador + valorCarta(carta);
  puntosHTML[0].innerText = puntosJugador;
  console.log(carta, puntosJugador);
});
