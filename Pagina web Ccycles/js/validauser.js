function validarFormulario() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Aquí puedes implementar tu lógica de validación, por ejemplo:
    if (username.trim() === "" || password.trim() === "") {
        alert("Por favor, completa todos los campos.");
        return false; // Evita que se envíe el formulario si hay campos vacíos
    }
    
    // Si la validación es exitosa, el formulario se enviará
    return true;
}
