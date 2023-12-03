async function suvs() {
    try {
      const respuesta = await fetch('../js/data.json');
      const data = await respuesta.json();
      const SUVS = data.SUV;
  
      // Obtener el contenedor HTML donde se agregarán los hypercarros
      const cont = document.getElementById('cont');
  
      // Recorrer los hypercarros y agregarlos al HTML
      SUVS.forEach((carro) => {
        const Carros = document.createElement('div');
        Carros.innerHTML = `
          <h2>${carro.nombre}</h2>
          <img src="${carro.img}" alt="${carro.nombre}">
          <p>Precio: $${carro.precio}</p>
          <p>Descripción: ${carro.descripcion}</p>
          <p>Color: ${carro.color}</p>
          <p>Año: ${carro.año}</p>
          <hr>
        `;
        cont.appendChild(Carros);
      });
  
    } catch (error) {
      console.error('Error al obtener los SUVS:', error);
    }
  }
  
  suvs();