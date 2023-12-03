
function validar() {
    var user = document.getElementById('user').value;
    var pswd = document.getElementById('pswd').value;

    if (user === 'admin' && pswd === '1234') {
      alert('Inicio de sesión exitoso');
      redirigir();
      return false; 
    } else {
      alert('Credenciales incorrectas. Inténtalo de nuevo.');
      return false;
    }
  }
  
  function redirigir() {
    window.location.href = 'inicio.html'; 
  }


  const menuBtn = document.getElementById('menubtn');
  const menu = document.querySelector('.menu');
  
  menuBtn.addEventListener('click', function() {
    menu.classList.toggle('show-menu');
  });
