function validarFormulario() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Verificar si los campos están vacíos
    if (username.trim() === "" || password.trim() === "") {
        alert("Por favor, completa todos los campos.");
        return false; // Evita que se envíe el formulario si hay campos vacíos
    }

    // Si los campos no están vacíos, redirige al usuario a index.html
    window.location.href = "index.html";
    return false; // Evita que se envíe el formulario
}
