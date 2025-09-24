// Ejercicio 28: Determina si un número es primo

function ejercicio28() {
    const num = parseInt(prompt("Ingresa un número para saber si es primo:"));
    if (isNaN(num) || num < 2) {
        alert("Por favor ingresa un número entero mayor o igual a 2.");
        return;
    }
    let esPrimo = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            esPrimo = false;
            break;
        }
    }
    if (esPrimo) {
        alert(num + " es un número primo.");
    } else {
        alert(num + " no es un número primo.");
    }
}