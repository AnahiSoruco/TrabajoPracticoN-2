$(document).ready(function() {
    
    // 1. REGISTRO (Guardar datos)
    $('#formRegistro').submit(function(e) {
        e.preventDefault();
        // Esta versión limpia etiquetas HTML y caracteres peligrosos sin errores
        let user = $('#userReg').val().replace(/['";\-<>]/g, '');

        let pass = $('#passReg').val();

        // IMPORTANTE: Estos nombres deben ser IGUALES a los del Login
        localStorage.setItem('usuarioRegistrado', user);
        localStorage.setItem('claveRegistrada', pass);

        alert("¡Cuenta creada con éxito! Iniciá sesión ahora.");
        location.reload(); 
    });

    // 2. LOGIN Y REDIRECCIÓN
    $('#formLogin').submit(function(e) {
        e.preventDefault();
        
        // Cambiá la línea 23 por esta:
        let userTry = $('#userLog').val().replace(/['";\-<>]/g, '');

        let passTry = $('#passLog').val();

        // Recuperamos con los MISMOS nombres de arriba
        let userDb = localStorage.getItem('usuarioRegistrado');
        let passDb = localStorage.getItem('claveRegistrada');

        $("#spinner").removeClass("d-none");

        setTimeout(() => {
            // Verificamos si los datos existen y coinciden
            if (userDb && userTry === userDb && passTry === passDb) {
                console.log("Datos correctos. Redirigiendo...");
                // Forzamos la redirección al index
                window.location.assign("index.html"); 
            } else {
                $("#spinner").addClass("d-none");
                alert("Usuario o clave incorrectos. Verificá si te registraste bien.");
            }
        }, 1500);
    });

    // VALIDACIÓN VISUAL (Consigna 2)
    $('input').on('input', function() {
        this.checkValidity() ? $(this).css("border-color", "#00ffae") : $(this).css("border-color", "red");
    });
});
