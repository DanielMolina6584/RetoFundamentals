async function sport() {
    try {
      const respuesta = await fetch('../js/data.json');
      const data = await respuesta.json();
      const deportivos = data.deportivos;
  

      const cont = document.getElementById('cont');
  
      deportivos.forEach((carro) => {
        const Carros = document.createElement('div');
        Carros.innerHTML = `
          <h2>${carro.nombre}</h2>
          <video controls autoplay loop muted width="700">
            <source src="${carro.video}" type="video/mp4">
          </video>
          <p>Precio: $${carro.precio}</p>
          <p>Descripción: ${carro.descripcion}</p>
          <p>Color: ${carro.color}</p>
          <p>Año: ${carro.año}</p>
          <hr>
        `;
        cont.appendChild(Carros);
      });
  
    } catch (error) {
      console.error('Error al obtener los deportivos:', error);
    }
  }
  
  sport();