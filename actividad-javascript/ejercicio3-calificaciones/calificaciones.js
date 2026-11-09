
let notas = [8, 6, 9, 7, 5, 10, 4, 7];


function analizarNotas(evento) {
    evento.preventDefault();

    let resultado = document.getElementById("resultado");

    
    let fueraDeRango = "";
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] < 0 || notas[i] > 10) {
            fueraDeRango += notas[i] + " ";
        }
    }

    if (fueraDeRango !== "") {
        resultado.className = "error";
        resultado.innerHTML = "Error: hay calificaciones fuera del intervalo de 0 a 10: " + fueraDeRango;
        return;
    }

    
    let suma = 0;
    let maxima = notas[0];
    let minima = notas[0];
    let aprobadas = 0;
    let noAprobadas = 0;

    
    for (let i = 0; i < notas.length; i++) {
        let nota = notas[i];

        suma += nota;

        if (nota > maxima) {
            maxima = nota;
        }

        if (nota < minima) {
            minima = nota;
        }

        
        if (nota >= 7) {
            aprobadas++;
        } else {
            noAprobadas++;
        }
    }

    let promedio = suma / notas.length;
    let promedioTexto = promedio.toFixed(2).replace(".", ",");

    let texto = "";
    texto += "<p>Calificaciones: " + notas.join(", ") + "</p>";
    texto += "<p>Promedio: " + promedioTexto + "</p>";
    texto += "<p>Nota más alta: " + maxima + "</p>";
    texto += "<p>Nota más baja: " + minima + "</p>";
    texto += "<p>Notas aprobadas: " + aprobadas + "</p>";
    texto += "<p>Notas no aprobadas: " + noAprobadas + "</p>";

    resultado.className = "resultado";
    resultado.innerHTML = texto;
}
