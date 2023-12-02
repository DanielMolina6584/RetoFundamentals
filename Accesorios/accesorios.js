function filtrarProducto(valor){
    let botones = document.querySelectorAll(".valoresButtons")
    botones.forEach((button) => {
        if(valor.toUpperCase() == button.innerText.toUpperCase()){
            button.classList.add("active")
        }
        else{
            button.classList.remove("active")
        } 
        let elementos = document.querySelectorAll(".card")
        elementos.forEach((element) =>{
            if (valor == "todo"){
                element.classList.remove("hide")
           } else {
               if(element.classList.contains(valor)){
                    element.classList.remove("hide");
                } else{
                    element.classList.add("hide")
                }
            }

      })
    })
     
}

window.onload = () => {
    filtrarProducto('todo')
}


function buscarProducto() {
    let valorBusqueda = document.getElementById("search_input").value.toLowerCase();
    let elementos = document.querySelectorAll(".card");

    elementos.forEach((element) => {
        let nombreProducto = element.querySelector(".productoNombre").innerText.toLowerCase();

        if (nombreProducto.includes(valorBusqueda)) {
            element.classList.remove("hide");
        } else {
            element.classList.add("hide");
        }
    });
}

document.getElementById("buscar").addEventListener("click", buscarProducto);
 

const ArchivoJson = 'data.json'

fetch (ArchivoJson)
    .then(response => response.json())
    .then(data => {
        
        for (let i of data.Accesorios){
            let card = document.createElement("div")
            card.classList.add("card" , i.categoria , "hide")

            let imageContainer = document.createElement("div")
            imageContainer.classList.add("imagen-container")

            let image = document.createElement("img")
            image.setAttribute("src" , i.image)
            imageContainer.appendChild(image)
            card.appendChild(imageContainer)

            document.getElementById("productos").appendChild(card)


            
            let contenedor = document.createElement("div")
            contenedor.classList.add("contenedor")

            let nombre = document.createElement("h4")
            nombre.classList.add("productoNombre")
            nombre.innerText = i.NombreProducto
            contenedor.appendChild(nombre)

            card.appendChild(contenedor)

            let precio = document.createElement("h5")
            precio.classList.add("precio")
            precio.innerText = "$ " + i.Precio
            contenedor.appendChild( precio)


        }
       

    })
    .catch(error => {
        console.error('Error al cargar los accesorios:', error);
      });

      //Carrusel

      fetch (ArchivoJson)
      .then(response => response.json())
      .then(data => {
      
  const carrusel = document.getElementById('carrusel_apartado2');
  let actual = 0;
  
  function MostrarCarrusel(index) {
  
  
    const ahora = data.Carrusel[index];
    if (ahora) {
      carrusel.innerHTML = `
        <div class="slide">
          <h3 class="apartado2_todo_titulo">${ahora.Titulo}</h3>
          <p class="apartado2_todo_parrafo">${ahora.Texto}</p>
          <img src="${ahora.Imagen}" alt="" class="apartado2_todo_imagen">
        </div>
      `;
      actual = index;
    }
  
  }
  
  MostrarCarrusel(actual)
  
  const flechaI = document.querySelector('.flechaI');
  const flechaD = document.querySelector('.flechaD');
  
  function atras() {
      actual = (actual + 1) % data.Carrusel.length;
      MostrarCarrusel(actual);
  }
  
  function adelante() {
      actual = (actual - 1 + data.Carrusel.length) % data.Carrusel.length
      MostrarCarrusel(actual);
      
  }
  
  flechaI.addEventListener('click', atras);
  flechaD.addEventListener('click', adelante);
  
  
  
  })
  .catch(error => {
      console.error('Error al cargar el Carrusel:', error);
    });
  