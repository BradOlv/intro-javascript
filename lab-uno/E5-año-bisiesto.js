//programa para detectar si el año que se ha ingresado es bisiesto

// aquí puede ingresar su año para comprobar si es bisiesto

const year = parseInt(prompt("Ingresa un año para saber si es bisiesto:"));

if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      console.log(`${year} es un año bisiesto.`);
    } else {
      console.log(`${year} no es un año bisiesto.`);
    }
  } else {
    console.log(`${year} es un año bisiesto.`);
  }
} else {
  console.log(`${year} no es un año bisiesto.`);
}