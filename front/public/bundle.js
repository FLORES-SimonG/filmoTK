/*! For license information please see bundle.js.LICENSE.txt */
(() => {
  var e = {
      444: (e) => {
        e.exports = class {
          constructor({
            id: e,
            title: t,
            year: n,
            director: r,
            duration: i,
            genre: o,
            rate: l,
            poster: a,
          }) {
            (this.id = e),
              (this.title = t),
              (this.year = n),
              (this.director = r),
              (this.duration = i),
              (this.genre = o),
              (this.rate = l),
              (this.poster = a);
          }
        };
      },
      360: (e, t, n) => {
        const r = n(444);
        e.exports = class {
          constructor() {
            this.activities = [];
          }
          getAllActivities() {
            return this.activities;
          }
          createActivity(e) {
            const t = new r(e);
            this.activities.push(t);
          }
          deleteActivity(e) {
            this.activities = this.activities.filter((t) => t.id !== e);
          }
        };
      },
    },
    t = {};
  function n(r) {
    var i = t[r];
    if (void 0 !== i) return i.exports;
    var o = (t[r] = { exports: {} });
    return e[r](o, o.exports, n), o.exports;
  }
  (() => {
    const e = new (n(360))(),
      t = () => {
        const t = document.getElementById("envioFilm");
        (t.innerHTML = ""),
          e
            .getAllActivities()
            .map((e) => r(e))
            .forEach((e) => t.appendChild(e));
      },
      r = (t) => {
        const {
            id: n,
            title: r,
            year: i,
            director: o,
            duration: l,
            genre: a,
            rate: c,
            poster: d,
          } = t,
          s = document.createElement("div");
        let u = document.createElement("h3");
        u.textContent = r;
        let p = document.createElement("img");
        (p.src = d), p.setAttribute("alt", "Imagen");
        let v = document.createElement("p");
        v.textContent = `Director: ${o}`;
        let m = document.createElement("p");
        m.textContent = `Año: ${i}`;
        let h = document.createElement("p");
        h.textContent = `Duración: ${l}`;
        let y = document.createElement("p");
        y.textContent = `Género: ${a}`;
        let g = document.createElement("p");
        return (
          (g.textContent = `${c}`),
          s.appendChild(u),
          s.appendChild(p),
          s.appendChild(v),
          s.appendChild(m),
          s.appendChild(h),
          s.appendChild(y),
          s.appendChild(g),
          s.addEventListener("click", () => {
            s.remove(), e.deleteActivity(n);
          }),
          s
        );
      },
      i = document.querySelector(".form");
    i.addEventListener("submit", (n) => {
      n.preventDefault();
      const r = i.querySelector(".nombreJS"),
        o = i.querySelector(".urlJS"),
        l = i.querySelector(".añoJS"),
        a = i.querySelector(".autorJS"),
        c = i.querySelector(".duracionJS"),
        d = i.querySelector(".generoJS"),
        s = i.querySelector(".puntajeJS"),
        u = {
          id: Date.now(),
          title: r.value,
          rate: s.value,
          poster: o.value,
          year: l.value,
          director: a.value,
          duration: c.value,
          genre: d.value,
        };
      0 == r.value.length ||
      0 == s.value.length ||
      0 == o.value.length ||
      0 == l.value.length ||
      0 == a.value.length ||
      0 == c.value.length ||
      0 == d.value.length
        ? alert("COMPLETA LOS DATOS")
        : (e.createActivity(u), t(), i.reset());
    });
    const o = document.getElementById("botonCreador"),
      l = document.createElement("h6"),
      a = document.getElementById("envioDeveloper");
    (l.style.margin = "8px"),
      (l.style.padding = "4px"),
      (l.style.textAlign = "center"),
      (l.style.backgroundColor = "firebrick"),
      (l.style.borderRadius = "25px"),
      (l.style.color = "whitesmoke"),
      (l.style.border = "2px solid whitesmoke"),
      o.addEventListener("click", function (e) {
        e.preventDefault(),
          (function () {
            const e = document.getElementById("inputCreador"),
              t = e.value;
            (l.textContent = t),
              (e.value = ""),
              (a.innerHTML = ""),
              a.appendChild(l);
          })();
      }),
      document.addEventListener("DOMContentLoaded", function () {
        c();
      });
    const c = () => {
      $.get("https://students-api.2.us-1.fl0.io/movies", (n) => {
        n.forEach((t) => {
          e.createActivity(t);
        }),
          t();
      });
    };
  })();
})();
