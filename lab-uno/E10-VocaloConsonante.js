//ejercicio para determinar si un caracter es vocal o consonante

function esVocalOConsoante(caracter) {
    if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u') {
      console.log("Es una vocal.");
    } else {
      console.log("Es una consonante.");
    }
  }
  
  // Para probar la función, puede llamarla con un carácter específico:
  esVocalOConsoante('a');
  esVocalOConsoante('b');
  esVocalOConsoante('e');
  esVocalOConsoante('z');