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