/*12) Programa una función que determine si un número es primo
 (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7)
  devolverá true.*/

function esPrim(n) {
  let divisor = false
  if (n < 1) { console.log("n tiene que ser mayor a uno") }
  if (Math.sign(n) === -1) { console.log("n tiene que ser mayor a uno") }
  for (let index = 2; index < n; index++) {
    if ((n % index) === 0) {

      divisor = true
      break
    }

  }


  return (divisor)
    ? console.log("el numero NO es primo" + n)
    : console.log("el numero es primo" + n)
}
esPrim(15)
/*13) Programa una función que determine si un número es par o impar, pe.
 miFuncion(29) devolverá Impar.*/
function par(n) {
  let divisor = false
  if (n < 1) { console.log("n tiene que ser mayor a uno") }
  if (Math.sign(n) === -1) { console.log("n tiene que ser mayor a uno") }

  if (n % 2 === 0) {
    console.log("es par")
  } else {
    console.log("no es par")
  }



}
par(2)
/*14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa,
 pe. miFuncion(0,"C") devolverá 32°F. */
function farangart(c) {
  let resultado = 0
  resultado = c * (9 / 5) + 35
  console.log(resultado)
}
farangart(1)

/*15) Programa una función para convertir números de base binaria a decimal y 
viceversa, pe. miFuncion(100,2) devolverá 4 base 10.*/
const convertirEnBinario = (numero = undefined, base = undefined) => {
  if (numero === undefined || base === undefined || typeof numero !== "number" || typeof base !== "number" || typeof base === 0 || typeof numero === 0) return console.log(" hae las cosas bien jaja")


  if (base === 2) {
    return console.log("El nummero es___" + numero + "_____ " + parseInt(numero, base) + "base 10")
  }

}
convertirEnBinario(100, 2)


/*16) Programa una función que devuelva el monto
 final después de aplicar un descu. */
const calcularAnios = (fecha=undefined) => { 
let fechaAcual = new Date().getTime() - fecha.getTime()
let anionEnMs = 1000*60*60*24*365
 aniosHumanos = Math.floor(fechaAcual/anionEnMs)
return console.log(aniosHumanos)
}
calcularAnios(new Date(1998,7,11))




 /*18) Programa una función que dada una cadena de 
 texto cuente el número de vocales y consonantes, pe. 
 miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5. */




 /*19) Programa una función que valide que un texto sea un nombre válido, 
 pe. miFuncion("Jonathan MirCha") devolverá verdadero.*/


 
 /*20) Programa una función que valide que un texto sea un email válido, 
pe. miFuncion("jonmircha@gmail.com") devolverá verdadero. */