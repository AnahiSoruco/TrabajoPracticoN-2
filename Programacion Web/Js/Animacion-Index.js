const botones3D = document.querySelectorAll('.social-3d li');

botones3D.forEach(boton => {
    
    boton.addEventListener('mousemove', (e) => {
        const { left, top, width, height } = boton.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / 10;
        const y = (e.clientY - top - height / 2) / 10;
        boton.style.transform = `rotate(-15deg) skew(15deg) translate(${x}px, ${y}px)`;
    });

    boton.addEventListener('mouseleave', () => {
        boton.style.transform = `rotate(-15deg) skew(15deg) translate(0, 0)`;
    });

    
    boton.addEventListener('click', () => {
        const redSocial = boton.classList[0]; 
        let url = "";

        
        
        if(redSocial === 'facebook') {
            url = ''; 
        }
        
        if(redSocial === 'twitter') {
            url = '';
        }
        
        if(redSocial === 'instagram') {
            url = '';
        }


        if(url !== "") {
            window.open(url, '_blank');
        }
    });
});

const form = document.querySelector('.newsletter-form');
if(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        form.innerHTML = `<p style="color: #00d2ff; font-weight: bold;">¡Gracias por suscribirte!</p>`;
    });
}

// Animaciones con jQuery
$(document).ready(function(){

    // HERO (HOME)
    if($(".titulo-animado").length){
        $(".titulo-animado").hide().fadeIn(2000);
        $(".subtitulo-animado").hide().delay(1000).fadeIn(2000);
    }

    // CONTADOR (HOME)
    if($("#contador").length){
        $({ contador: 0 }).animate({ contador: 500 }, {
            duration: 3000,
            step: function() {
                $("#contador").text(Math.floor(this.contador) + "+");
            }
        });
    }

    // CAROUSEL (HOME)
    if(document.querySelector('#carouselTestimonios')){
        var myCarousel = new bootstrap.Carousel(document.querySelector('#carouselTestimonios'), {
            interval: 3000,
            ride: 'carousel'
        });
    }

    // FILTROS DESTINOS
    if($(".filtro").length){
        $(".filtro").click(function(){

            let filtro = $(this).data("filter");

            if(filtro == "all"){
                $(".destino").show();
            } else {
                $(".destino").hide();
                $("." + filtro).show();
            }

        });
    }

    // RATING AGENCIAS
    if($(".rating i").length){
        $(".rating i").click(function(){

            let value = $(this).data("value");

            $(this).parent().children("i").each(function(){
                if($(this).data("value") <= value){
                    $(this).addClass("active");
                } else {
                    $(this).removeClass("active");
                }
            });

        });
    }

});