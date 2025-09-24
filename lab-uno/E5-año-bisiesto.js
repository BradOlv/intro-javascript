//programa para detectar si el año que se ha ingresado es bisiesto

// aquí puede ingresar su año para comprobar si es bisiesto


function ejercicio5() {
    const year = parseInt(prompt("Ingresa un año para saber si es bisiesto:"));

    if (isNaN(year)) {
        alert("Por favor ingresa un año válido.");
    } else if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                alert(`${year} es un año bisiesto.`);
            } else {
                alert(`${year} no es un año bisiesto.`);
            }
        } else {
            alert(`${year} es un año bisiesto.`);
        }
    } else {
        alert(`${year} no es un año bisiesto.`);
    }
}