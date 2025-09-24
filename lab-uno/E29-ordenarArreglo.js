// Ejercicio 29: Ordena un arreglo de números de menor a mayor

function ejercicio29() {
    const entrada = prompt("Ingresa números separados por comas para ordenarlos (ejemplo: 5,2,8,1):");
    if (!entrada) {
        alert("No ingresaste ningún número.");
        return;
    }
    // Convierte la entrada en un arreglo de números
    const arreglo = entrada.split(',').map(function(item) {
        return parseInt(item.trim());
    });

    // Verifica si todos son números válidos
    for (let i = 0; i < arreglo.length; i++) {
        if (isNaN(arreglo[i])) {
            alert("Por favor ingresa solo números separados por comas.");
            return;
        }
    }
    // Ordenar el arreglo de menor a mayor
    arreglo.sort(function(a, b) {
        return a - b;
    });
    alert("Arreglo ordenado: " + arreglo.join(', '));
}