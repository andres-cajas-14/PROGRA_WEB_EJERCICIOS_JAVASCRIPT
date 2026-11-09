
function verificarContrasena(evento) {
    evento.preventDefault();

    let clave = document.getElementById("clave").value;
    let resultado = document.getElementById("resultado");

    
    let tieneLongitud = clave.length >= 8;

  
    let tieneDigito = false;
    let sinEspacios = true;

    for (let i = 0; i < clave.length; i++) {
        let caracter = clave[i];

        if (caracter >= "0" && caracter <= "9") {
            tieneDigito = true;
        }

        if (caracter === " ") {
            sinEspacios = false;
        }
    }

    
    let texto = "";
    texto += mostrarRegla("Tiene al menos 8 caracteres", tieneLongitud);
    texto += mostrarRegla("Contiene al menos un dígito (0-9)", tieneDigito);
    texto += mostrarRegla("No contiene espacios", sinEspacios);

    
    if (tieneLongitud && tieneDigito && sinEspacios) {
        texto += "<p><strong>Cumple todas las reglas</strong></p>";
    }

    resultado.className = "resultado";
    resultado.innerHTML = texto;
}


function mostrarRegla(descripcion, cumple) {
    if (cumple) {
        return "<p class='cumple'>✔ " + descripcion + "</p>";
    } else {
        return "<p class='no-cumple'>✘ " + descripcion + "</p>";
    }
}
