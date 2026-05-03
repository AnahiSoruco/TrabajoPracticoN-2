function pagar() {
    let opcion = prompt(
        "Elegí método de pago:\n1 - MercadoPago\n2 - PayPal\n3 - Tarjeta Naranja"
    );

    if(opcion == "1"){
        window.open("https://www.mercadopago.com", "_blank");
    } else if(opcion == "2"){
        window.open("https://www.paypal.com", "_blank");
    } else if(opcion == "3"){
        window.open("https://www.naranja.com", "_blank");
    } else {
        alert("Opción inválida");
    }
}