const mensajeCompleto = [
  "Hoy quiero regalarte algo distinto...",
  "Una carta que nace desde el corazón 💖",
  "Porque eres una persona increíble y te mereces todo lo bonito de este mundo.",
  "Así que toma unos segundos para leer esto con calma...",
  "Gracias por tu existencia. Gracias por tu luz.",
  "Y ahora sí... ¿lista para tu sorpresa?"
];

let i = 0;
const mensajeEl = document.getElementById("mensaje");

function mostrarLinea() {
  if (i < mensajeCompleto.length) {
    mensajeEl.innerHTML += mensajeCompleto[i] + "<br><br>";
    i++;
    setTimeout(mostrarLinea, 2000);
  }
}

window.onload = mostrarLinea;
