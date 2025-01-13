const miModulo = (() => {
  "use strict";
  let e = [],
    t = ["C", "D", "H", "S"],
    a = ["A", "J", "Q", "K"],
    r = [],
    l = document.querySelector("#btnPedir"),
    n = document.querySelector("#btnNuevo"),
    o = document.querySelector("#btnDetener"),
    s = document.querySelectorAll(".divCartas"),
    d = document.querySelectorAll("small"),
    i = (e = 2) => {
      c(), (r = []);
      for (let t = 0; t < e; t++) r.push(0);
      d.forEach((e) => (e.innerText = 0)),
        s.forEach((e) => (e.innerHTML = "")),
        (l.disabled = !1),
        (o.disabled = !1);
    },
    c = () => {
      for (let r = 2; r <= 10; r++) for (let l of t) e.push(r + l);
      for (let n of t) for (let o of a) e.push(o + n);
      return (e = _.shuffle(e));
    },
    u = () => {
      if (0 === e.length) throw "No hay cartas en la baraja";
      return e.pop();
    },
    $ = (e) => {
      let t = e.substring(0, e.length - 1);
      return isNaN(t) ? ("A" === t ? 11 : 10) : 1 * t;
    },
    h = (e, t) => ((r[t] = r[t] + $(e)), (d[t].innerText = r[t]), r[t]),
    f = (e, t) => {
      let a = document.createElement("img");
      (a.src = `assets/cartas/${e}.png`),
        a.classList.add("carta"),
        s[t].append(a);
    },
    b = () => {
      let [e, t] = r;
      setTimeout(() => {
        t === e
          ? alert("Nadie gana :(")
          : e > 21
          ? alert("Gana la computadora")
          : t > 21
          ? alert("Gana Jugador 1")
          : alert("Gana la computadora");
      }, 20);
    },
    g = (e) => {
      let t = 0;
      do {
        let a = u();
        (t = h(a, r.length - 1)), f(a, r.length - 1);
      } while (t < e && e <= 21);
      b();
    };
  return (
    l.addEventListener("click", () => {
      let e = u(),
        t = h(e, 0);
      f(e, 0),
        t > 21
          ? (console.warn("Lo siento mucho, perdiste"),
            (l.disabled = !0),
            (o.disabled = !0),
            g(t))
          : 21 === t && console.warn("21, genial!");
    }),
    o.addEventListener("click", () => {
      (l.disabled = !0), (o.disabled = !0), g(r[0]);
    }),
    n.addEventListener("click", () => {
      i();
    }),
    { nuevoJuego: i }
  );
})();
