//Alerta al hacer click
function alerta(event) {
    alert("¡Hola!");
    event.stopPropagation();
    }

//Manejador de eventos
    const div = document.querySelector('div');
    div.addEventListener('click', () => {
        alert('¡Hola! Soy el div');
      });
