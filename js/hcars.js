async function obtenerHypercarros() {
  try {
    const respuesta = await fetch('../js/data.json');
    const data = await respuesta.json();
    const hypercarros = data.hypercarros;

    // Obtener el contenedor HTML donde se agregarán los hypercarros
    const cont = document.getElementById('cont');

    // Recorrer los hypercarros y agregarlos al HTML
    hypercarros.forEach((carro) => {
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
    console.error('Error al obtener los hypercarros:', error);
  }
}

obtenerHypercarros();