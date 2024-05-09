// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    // Selecciona el formulario
    var form = document.querySelector('.needs-validation');
  
    // Agrega un listener para el envío del formulario
    form.addEventListener('submit', function (event) {
      // Verifica si el formulario es válido
      if (!form.checkValidity()) {
        // Si no es válido, detén el envío del formulario
        event.preventDefault();
        event.stopPropagation();
      }
  
      // Agrega las clases de validación al formulario
      form.classList.add('was-validated');
    }, false);
  }, false);
  