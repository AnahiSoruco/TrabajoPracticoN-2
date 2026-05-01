// --- INTERACTIVIDAD BOTONES 3D (REDES SOCIALES) ---
const botones3D = document.querySelectorAll('.social-3d li');

if (botones3D.length > 0) {
    botones3D.forEach(boton => {
        boton.addEventListener('mousemove', (e) => {
            const { left, top, width, height } = boton.getBoundingClientRect();
            const x = (e.clientX - left - width / 2) / 10;
            const y = (e.clientY - top - height / 2) / 10;
            boton.style.transform = `rotate(-15deg) skew(15deg) translate(${x}px, ${y}px)`;
            boton.style.boxShadow = `${-x}px ${-y}px 20px rgba(0, 210, 255, 0.3)`;
        });

        boton.addEventListener('mouseleave', () => {
            boton.style.transform = `rotate(-15deg) skew(15deg) translate(0, 0)`;
            boton.style.boxShadow = "none";
        });

        boton.addEventListener('click', () => {
            const clases = boton.classList;
            const urls = {
                'facebook': 'https://facebook.com',
                'twitter': 'https://twitter.com',
                'instagram': 'https://instagram.com'
            };
            for (let red in urls) {
                if (clases.contains(red)) {
                    window.open(urls[red], '_blank');
                    break;
                }
            }
        });
    });
}

// --- FORMULARIO NEWSLETTER ---
const form = document.querySelector('.newsletter-form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = form.querySelector('input');
        if(input.value !== "") {
            form.innerHTML = `<p style="color: #00d2ff; font-weight: bold; margin-top: 10px;">¡Gracias por suscribirte!</p>`;
        }
    });
}

// --- ANIMACIONES CON JQUERY (ESPERA A QUE EL DOM ESTÉ LISTO) ---
$(document).ready(function() {

    // 1. ANIMACIÓN DE BIENVENIDA (Solo si existen los elementos)
    if ($(".titulo-animado").length) {
        $(".titulo-animado").hide().fadeIn(2000);
        $(".subtitulo-animado").hide().delay(1000).fadeIn(2000);
    }

    // 2. CONTADOR DE VISITANTES (Solo en Index)
    if ($("#contador").length) {
        let valorObjetivo = 1452; 
        $({ contador: 0 }).animate({ contador: valorObjetivo }, {
            duration: 3000,
            easing: 'swing',
            step: function() {
                $("#contador").text(Math.floor(this.contador) + "+");
            },
            complete: function() {
                $("#contador").text(valorObjetivo + "+");
            }
        });
    }

    // 3. CAROUSEL DE TESTIMONIOS
    const carouselEl = document.querySelector('#carouselTestimonios');
    if (carouselEl) {
        new bootstrap.Carousel(carouselEl, {
            interval: 2500,
            ride: 'carousel',
            pause: 'hover'
        });
    }

    // 4. FILTROS DINÁMICOS DE DESTINOS (Unificado)
    if ($(".filtro").length) {
        $(".filtro").click(function() {
            const filtro = $(this).data("filter");
            
            // Cambiar estilos de botones
            $('.filtro').removeClass('active btn-info').addClass('btn-outline-info');
            $(this).addClass('active btn-info');

            // Animación de filtrado
            $(".destino").fadeOut(300, function() {
                if (filtro == "all") {
                    $(".destino").fadeIn();
                } else {
                    $("." + filtro).fadeIn();
                }
            });
        });
    }

    // 5. EFECTO EXTRA PARA CERRAR CARDS (Teclado)
    $(document).keydown(function(e) {
        if (e.keyCode === 27) { // Tecla Esc
            $(':focus').blur(); 
        }
    });

    console.log("Sistema de Turismo Jujuy listo para usar.");
});
$(document).ready(function() {
    // 1. FILTROS DE DESTINOS
    $('.filtro').click(function() {
        const cat = $(this).data('filter');
        $('.filtro').removeClass('btn-primary').addClass('btn-outline-light');
        $(this).addClass('btn-primary').removeClass('btn-outline-light');

        if(cat == 'all') {
            $('.destino').fadeIn();
        } else {
            $('.destino').hide();
            $('.destino.' + cat).fadeIn();
        }
    });

    // 2. EFECTO ZOOM AL HACER CLIC
    $('.card').click(function(e) {
        e.stopPropagation(); // Evita errores de clic
        $(this).toggleClass('expandida');
        $('body').toggleClass('no-scroll');
    });

    // 3. CERRAR AL HACER CLIC EN EL FONDO O TECLA ESC
    $(document).click(function() {
        $('.card').removeClass('expandida');
        $('body').removeClass('no-scroll');
    });

    $(document).keydown(function(e) {
        if (e.keyCode === 27) { // Tecla Esc
            $('.card').removeClass('expandida');
            $('body').removeClass('no-scroll');
        }
    });
});
