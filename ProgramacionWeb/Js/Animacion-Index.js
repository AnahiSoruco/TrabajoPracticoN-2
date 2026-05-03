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

$(document).ready(function() {

    if ($(".titulo-animado").length) {
        $(".titulo-animado").hide().fadeIn(2000);
        $(".subtitulo-animado").hide().delay(1000).fadeIn(2000);
    }

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

    const carouselEl = document.querySelector('#carouselTestimonios');
    if (carouselEl) {
        new bootstrap.Carousel(carouselEl, {
            interval: 2500,
            ride: 'carousel',
            pause: 'hover'
        });
    }

    $('.filtro').click(function() {
        const cat = $(this).data('filter');
        $('.filtro').removeClass('btn-primary active').addClass('btn-outline-info');
        $(this).addClass('btn-primary active').removeClass('btn-outline-info');

        $(".destino").fadeOut(300, function() {
            if (cat == 'all') {
                $(".destino").fadeIn();
            } else {
                $("." + cat).fadeIn();
            }
        });
    });

    $('.card').click(function(e) {
        if ($(this).find('.card-inner').length === 0) {
            e.stopPropagation();
            $(this).toggleClass('expandida');
            $('body').toggleClass('no-scroll');
        }
    });

    $('.card-inner').click(function(e) {
        e.stopPropagation();
        $(this).toggleClass('girar');
    });

    $('.rating i').click(function(e) {
        e.stopPropagation();
        
        let valorSeleccionado = $(this).data('value');
        let todasLasEstrellas = $(this).parent().children('i');

        todasLasEstrellas.each(function() {
            if ($(this).data('value') <= valorSeleccionado) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
        
        console.log("Calificación guardada: " + valorSeleccionado);
    });

    $(document).click(function() {
        $('.card').removeClass('expandida');
        $('body').removeClass('no-scroll');
    });

    $(document).keydown(function(e) {
        if (e.keyCode === 27) { // Tecla Esc
            $('.card').removeClass('expandida');
            $('.card-inner').removeClass('girar'); // También resetea el giro
            $(':focus').blur();
            $('body').removeClass('no-scroll');
        }
    });

    console.log("Sistema de Turismo Jujuy iniciado correctamente.");



    
    $('.card').click(function() {
        $(this).find('.card-inner').toggleClass('girar');
        console.log("Girando agencia...");
    });

    $('.rating i').click(function(e) {
        e.stopPropagation(); // IMPORTANTE: evita que la carta gire al calificar
        
        let valor = $(this).data('value');
        let estrellas = $(this).parent().children('i');

        // Marcamos las estrellas seleccionadas
        estrellas.removeClass('active');
        $(this).addClass('active').prevAll().addClass('active');
        
        console.log("Calificación: " + valor);
    });
    
    
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });

    $(".fila").hover(
        function() {
            $(this).css({
                "transform": "scale(1.03)",
                "box-shadow": "0 0 15px rgba(0,210,255,0.7)",
                "transition": "all 0.3s ease",
                "z-index": "10",
                "position": "relative"
            });
        },
        function() {
            $(this).css({
                "transform": "scale(1)",
                "box-shadow": "none",
                "z-index": "1"
            });
        }
    );

    console.log("🚀 Todos los sistemas de Jujuy (Precios y Agencias) listos.");
});
