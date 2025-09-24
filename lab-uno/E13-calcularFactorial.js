// Ejercicio 13: Calcula el factorial de un número usando un bucle

function ejercicio13() {
    const num = parseInt(prompt("Ingresa un número para calcular su factorial:"));
    if (isNaN(num) || num < 0) {
        alert("Por favor ingresa un número entero no negativo.");
        return;
    }
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    alert(`El factorial de ${num} es: ${factorial}`);
}