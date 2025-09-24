// proyecto de Determinar si un carácter es vocal o consonante

function ejercicio10() {
    const caracter = prompt("Ingresa un solo carácter para saber si es vocal o consonante:");
    if (!caracter || caracter.length !== 1 || !/[a-zA-Z]/.test(caracter)) {
        alert("Por favor ingresa solo una letra.");
        return;
    }
    const vocales = "aeiouAEIOU";
    if (vocales.includes(caracter)) {
        alert(`"${caracter}" es una vocal.`);
    } else {
        alert(`"${caracter}" es una consonante.`);
    }
}