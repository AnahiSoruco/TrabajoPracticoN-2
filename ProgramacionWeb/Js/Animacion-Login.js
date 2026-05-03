$(document).ready(function() {
    
    $('#formRegistro').submit(function(e) {
        e.preventDefault();
        let user = $('#userReg').val().replace(/['";\-<>]/g, '');

        let pass = $('#passReg').val();

        localStorage.setItem('usuarioRegistrado', user);
        localStorage.setItem('claveRegistrada', pass);

        alert("¡Cuenta creada con éxito! Iniciá sesión ahora.");
        location.reload(); 
    });

    $('#formLogin').submit(function(e) {
        e.preventDefault();
        
        let userTry = $('#userLog').val().replace(/['";\-<>]/g, '');

        let passTry = $('#passLog').val();

        let userDb = localStorage.getItem('usuarioRegistrado');
        let passDb = localStorage.getItem('claveRegistrada');

        $("#spinner").removeClass("d-none");

        setTimeout(() => {
            if (userDb && userTry === userDb && passTry === passDb) {
                console.log("Datos correctos. Redirigiendo...");
                window.location.assign("index.html"); 
            } else {
                $("#spinner").addClass("d-none");
                alert("Usuario o clave incorrectos. Verificá si te registraste bien.");
            }
        }, 1500);
    });

    $('input').on('input', function() {
        this.checkValidity() ? $(this).css("border-color", "#00ffae") : $(this).css("border-color", "red");
    });
});
