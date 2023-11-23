import { data } from "./data.js";

const carrusel = document.getElementById('carrusel');
const flechaI = document.querySelector('.flechaI');
const flechaD = document.querySelector('.flechaD');

let actual = 0;

function MostrarCarrusel(index) {
   
    const ahora = data[index];
    carrusel.innerHTML = `
        <div class = "slide">
        <h3 class="sesion3_todo_titulo">${ahora.Titulo}</h3>
        <img src="${ahora.Imagen}" alt="" class="sesion3_todo_imagen">
        <p class="sesion3_todo_parrafo">${ahora.Texto}</p>
        
        </div>
    `;
 actual = index
   
}
function atras() {
    actual = (actual + 1) % data.length;
    MostrarCarrusel(actual);
}

function adelante() {
    actual = (actual - 1 + data.length) % data.length
    MostrarCarrusel(actual);
    
}

flechaI.addEventListener('click', atras);
flechaD.addEventListener('click', adelante);

MostrarCarrusel(actual)

