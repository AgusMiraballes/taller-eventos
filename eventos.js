//Alerta al hacer click
function alerta() {
    alert("¡Hola!");
    }

//Manejador de eventos
    const div = document.querySelector('div');
    div.addEventListener('click', () => {
        alert('¡Hola! Soy el div');
      });
