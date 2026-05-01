$(document).ready(function() {
    // 1. FILTROS
    $('.filtro').click(function() {
        const cat = $(this).data('filter');
        $('.filtro').removeClass('btn-primary').addClass('btn-outline-info');
        $(this).addClass('btn-primary').removeClass('btn-outline-info');

        if(cat == 'all') {
            $('.destino').fadeIn();
        } else {
            $('.destino').hide();
            $('.destino.' + cat).fadeIn();
        }
    });

    // 2. ZOOM AL HACER CLIC
    $('.card-zoom').click(function(e) {
        e.stopPropagation(); // Evita que el clic se pase al body
        $(this).toggleClass('activo');
        $('body').toggleClass('modal-open');
    });

    // 3. CERRAR AL HACER CLIC FUERA
    $(document).click(function() {
        $('.card-zoom').removeClass('activo');
        $('body').removeClass('modal-open');
    });
});
