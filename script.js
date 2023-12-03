function abrir(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display='flex';
 }
 function quitar(){
     const quitar = document.querySelector('.sidebar');
     quitar.style.display = 'none';
 }
function abrirCarrito(){
  const abrirCarrito = document.querySelector('.productos_carrito')
  abrirCarrito.style.display = 'flex'
}
function cerrarCarrito(){
  const CerrarCarrito = document.querySelector('.productos_carrito')
  CerrarCarrito.style.display = 'none'
}
 
function enviar (event){
    event.preventDefault();

    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let pais = document.getElementById('pais').value;
    let celular = document.getElementById('celular').value;
    let correo = document.getElementById('correo').value;

    if (nombre === '' || apellido === '' || pais === '' || celular === '' || correo === '') {
      alert('Llena todos los campos requeridos');
    } else {
      alert('Formulario enviado correctamente');
    }

    let datosFormulario = {
        nombre: nombre,
        apellido: apellido,
        pais: pais,
        celular: celular,
        correo: correo
      };
  
      let datosJSON = JSON.stringify(datosFormulario);
  
      localStorage.setItem('formularioData', datosJSON);
  };

  const boton = document.getElementById('enviar');
  boton.addEventListener('click', enviar );
 
