/**
 * 2C = Two of Clubs (Tréboles)
 * 2D = Two of Diamonds (Diamantes)
 * 2H = Two of Hearts (Corazones)
 * 2S = Two of Spades (Espadas)
 */

let baraja = [];
const tipos = ["C", "D", "H", "S"];
const especiales = ["A", "J", "Q", "K"];

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
  // const carta = baraja.pop();
  const carta = _.sample(baraja);
  let indexCarta = baraja.indexOf(carta);
  baraja.splice(indexCarta, 1);
  return carta;
};

pedirCarta();
