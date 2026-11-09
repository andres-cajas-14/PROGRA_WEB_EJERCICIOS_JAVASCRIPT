
function calcularTotal(evento) {
    
    evento.preventDefault();

    
    let precioTexto = document.getElementById("precio").value;
    let cantidadTexto = document.getElementById("cantidad").value;
    let resultado = document.getElementById("resultado");

   
    if (precioTexto === "" || cantidadTexto === "") {
        resultado.className = "error";
        resultado.innerHTML = "Error: debe completar todos los campos.";
        return;
    }

    
    let precio = Number(precioTexto);
    let cantidad = Number(cantidadTexto);

    
    if (precio <= 0) {
        resultado.className = "error";
        resultado.innerHTML = "Error: el precio debe ser mayor que cero.";
        return;
    }

    
    if (cantidad <= 0 || cantidad % 1 !== 0) {
        resultado.className = "error";
        resultado.innerHTML = "Error: la cantidad debe ser un número entero positivo.";
        return;
    }

    
    let subtotal = precio * cantidad;

    
    let descuento = 0;
    if (subtotal >= 100) {
        descuento = subtotal * 0.10;
    }

    let total = subtotal - descuento;

    
    resultado.className = "resultado";
    resultado.innerHTML =
        "<p>Subtotal: $" + subtotal.toFixed(2).replace(".", ",") + "</p>" +
        "<p>Descuento: $" + descuento.toFixed(2).replace(".", ",") + "</p>" +
        "<p><strong>Total a pagar: $" + total.toFixed(2).replace(".", ",") + "</strong></p>";
}
