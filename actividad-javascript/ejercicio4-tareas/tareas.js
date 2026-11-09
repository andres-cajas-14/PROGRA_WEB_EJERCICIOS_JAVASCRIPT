
function agregarTarea(evento) {
    evento.preventDefault();

    let campo = document.getElementById("tarea");
    let mensaje = document.getElementById("mensaje");
    let lista = document.getElementById("lista");

    
    let texto = campo.value.trim();

    
    if (texto === "") {
        mensaje.className = "error";
        mensaje.innerHTML = "Error: escribe una tarea antes de agregarla.";
        return;
    }

    mensaje.innerHTML = "";

    
    let item = document.createElement("li");
    let etiqueta = document.createElement("label");
    let casilla = document.createElement("input");
    casilla.type = "checkbox";

    
    casilla.addEventListener("change", function () {
        if (casilla.checked) {
            item.classList.add("completada");
        } else {
            item.classList.remove("completada");
        }
    });

    
    let botonEliminar = document.createElement("button");
    botonEliminar.type = "button";
    botonEliminar.className = "boton-eliminar";
    botonEliminar.textContent = "Eliminar";

    botonEliminar.addEventListener("click", function () {
        item.remove();
    });

    
    etiqueta.appendChild(casilla);
    etiqueta.appendChild(document.createTextNode(" " + texto));
    item.appendChild(etiqueta);
    item.appendChild(botonEliminar);
    lista.appendChild(item);

    
    campo.value = "";
    campo.focus();
}
