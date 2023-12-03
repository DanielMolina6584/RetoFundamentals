const ArchivoJson = 'data.json'

fetch (ArchivoJson)
    .then(response => response.json())
    .then(data => {
    
const carrusel = document.getElementById('carrusel');
let actual = 0;

function MostrarCarrusel(index) {


  const ahora = data.carrusel[index];
  if (ahora) {
    carrusel.innerHTML = `
      <div class="slide">
        <h3 class="sesion3_todo_titulo">${ahora.Titulo}</h3>
        <img src="${ahora.Imagen}" alt="" class="sesion3_todo_imagen">
        <p class="sesion3_todo_parrafo">${ahora.Texto}</p>
      </div>
    `;
    actual = index;
  }

}

MostrarCarrusel(actual)

const flechaI = document.querySelector('.flechaI');
const flechaD = document.querySelector('.flechaD');

function atras() {
    actual = (actual + 1) % data.carrusel.length;
    MostrarCarrusel(actual);
}

function adelante() {
    actual = (actual - 1 + data.carrusel.length) % data.length
    MostrarCarrusel(actual);
    
}

flechaI.addEventListener('click', atras);
flechaD.addEventListener('click', adelante);



})
.catch(error => {
    console.error('Error al cargar el Carrusel:', error);
  });

