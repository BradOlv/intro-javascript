/**
 * TIPO DE DATO "number"
 */

//1. entero y decimal
const entero = 42
const decimal = 3.14

//2. notacion cientifica
const cientifica = 5e3

//3. Infinitos y NaN (not a nomber)
const infinito = Infinity
const noEsNumero = NaN

// operaciones aritméticas
//1. suma, resta, multiplicacion y division
const suma = 5 + 6
const resta = 4 - 3
const multiplicacion = 4 * 8
const division = 16 / 2 

//2. modulo y exponenciacion 
const modulo = 16%8
const exponenciacion = 2 ** 4

//3. presicion, javascript tiene problemas de calculo
const resultado = 0.1 + 0.2

console.log(resultado)
console.log(resultado.toFixed(1))
console.log(resultado == 0.3)

//operaciones avanzadas
const raizCuadrada = Math.sqrt(16)
const valorAbsoluto = Math.abs(-7)
const aleatorio = Math.random()
let numero = aleatorio * 10+1

console.log(raizCuadrada)
console.log(valorAbsoluto)
console.log(Math.trunc(numero))
// ejemplo
const numero2 = 2
const booleano = true
console.log(numero2 + booleano) 