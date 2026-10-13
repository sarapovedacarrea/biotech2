
function respuesta(correcta) {
    const resultado = document.getElementById("resultado");

    if (correcta) {
        resultado.textContent =
            "¡Correcto! Los microorganismos pueden utilizarse para producir alimentos como el yogur.";
        resultado.style.color = "#218d68";
    } else {
        resultado.textContent =
            "No exactamente. Intentá nuevamente.";
        resultado.style.color = "#c0392b";
    }
}