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
const contarLetras = (cadena="") =>{
  if (!cadena) return console.warn("no ingresaste texto")
  if (typeof cadena !== "string") return console.warn("no es una cadena validad")
  let vocales = 0, conocantes = 0,defirencia = 0

  cadena = cadena.toLowerCase()
  for (let letra of cadena) {
    if(/[AEIOUaeiouáéióu]/.test(letra)){ vocales++}
    if(/[BCDFGHYGKLMNPQRSTVXWZbcdfghyjklmnpqrstvqxz]/.test(letra)){  conocantes++ }
  }
  defirencia =  cadena.length-vocales 
  return console.info({
    cadena:cadena,
    vocales:vocales,
    conocantes: conocantes,
    defirencia: defirencia
  })

}
contarLetras("arturoes lo mas inteligente del mundoare")


 /*19) Programa una función que valide que un texto sea un nombre válido, 
 pe. miFuncion("Jonathan MirCha") devolverá verdadero.*/



  const validarNombre = (nombre="") => {
   if (!nombre) return console.warn("no ingresaste texto")
   if (typeof nombre !== "string") return console.warn("no es una cadena validad") 

    let expreReg = /^[A-Za-zñÑ]+$/g.test(nombre)

    return (expreReg) ? console.info("el nombre es valido :" + nombre)
                      :console.info("el nombre es NO valido: " + nombre)

  }
  validarNombre("arturoesvalido")



 /*20) Programa una función que valide que un texto sea un email válido, 
pe. miFuncion("jonmircha@gmail.com") devolverá verdadero. */

const validarMail = (email="") => {
  if (!email) return console.warn("no ingresaste texto")
  if (typeof nombre !== "string") return console.warn("no es una cadena validad") 

   let expreReg =  /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email)

   return (expreReg) ? console.info("el email es valido :" + email)
                     :console.info("el email es NO valido: " + email)

 }
 validarMail("arturoesvalido")
 validarMail("artu@gmail.com")

 /*21) Programa una función que dado un array numérico 
 devuelve otro array con los números elevados al cuadrado, 
 pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25]. */



 const elevarAlCuadrado = (arr=undefined) => {
  if (arr === undefined) return console.log("No ingresante un valor")

  if (!(arr instanceof Array)) return console.log("No ingresante un areglo")

  if (arr.length === 0) return console.log("No ingresante un valor")
  let cuadrado = []
  for (let num of arr) {
    if (typeof num !== "number" )  return console.log("No ingresante un valor" + num)
  }

  const newArg = arr.map(el => el*el)


  return console.log("arreglo orginal  " + arr + " Arreglo elevado al cuadrado " + newArg)

 }
 elevarAlCuadrado([1, 4, 5])



 /*22) Programa una función que dado un array devuelva el número mas alto 
 y el más bajo de dicho array,
  pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60]. */


 const masAltoyBajo = (arr=undefined) => {
  if (arr === undefined) return console.log("No ingresante un valor")

  if (!(arr instanceof Array)) return console.log("No ingresante un areglo")

  if (arr.length === 0) return console.log("No ingresante un valor")
  let cuadrado = []
  for (let num of arr) {
    if (typeof num !== "number" )  return console.log("No ingresante un valor" + num)
  }

  return console.info("areglo original " +" " +   arr + " valor maximomo es: " + Math.max(...arr) +" " + "Valor mino es " + " "  + Math.min(...arr) )

 }

 masAltoyBajo([1, 4, 5, 99, -60])


 /*23) Programa una función que dado un array de números devuelva un 
 objeto con 2 arreglos en el primero almacena los números pares 
 y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) 
 devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}. */



 const paresImpares = (arr=undefined) => {
  if (arr === undefined) return console.log("No ingresante un valor")

  if (!(arr instanceof Array)) return console.log("No ingresante un areglo")

  if (arr.length === 0) return console.log("No ingresante un valor")
  let cuadrado = []
  for (let num of arr) {
    if (typeof num !== "number" )  return console.log("No ingresante un valor" + num)
  }

  return console.log({
    pares: arr.filter(num => num % 2 === 0),
    impares: arr.filter(num => num % 2 === 1 )
  })

}
paresImpares([1,2,3,4,5,6,7,8,9,0]) 
 /*24) Programa una función que dado un arreglo de números devuelva un objeto 
 con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente 
 y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) 
 devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.*/


 const ordenarArreglo = (arr=undefined) => {
  if (arr === undefined) return console.log("No ingresante un valor")

  if (!(arr instanceof Array)) return console.log("No ingresante un areglo")

  if (arr.length === 0) return console.log("No ingresante un valor")
  let cuadrado = []
  for (let num of arr) {
    if (typeof num !== "number" )  return console.log("No ingresante un valor" + num)
  }

  return console.log({
    arr,
    asc: arr.map(el => el).sort(),
    des: arr.map(el => el).sort().reverse()
  })

}
ordenarArreglo([7, 5,7,8,6]) 




 /*25) Programa una función que dado un arreglo de elementos,
  elimine los duplicados, pe.
   miFuncion(["x", 10, "x", 2, "10", 10, true, true]) 
   devolverá ["x", 10, 2, "10", true].*/
   const eliinarLosDuplicados = (arr=undefined) => {
    if (arr === undefined) return console.log("No ingresante un valor")
  
    if (!(arr instanceof Array)) return console.log("No ingresante un areglo")
  
    if (arr.length === 0) return console.log("No ingresante un valor")
    let cuadrado = []
    for (let num of arr) {
      if (typeof num !== "number" )  return console.log("No ingresante un valor" + num)
    }
  
    return console.log({
      arr,
      sinduplicados : arr.filter((value,index,self) => self.indexOf(value) === index  )
      
    })
  
  }

  eliinarLosDuplicados(["x", 10, "x", 2, "10", 10, true, true]) 
 /*
 27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse
 con los siguentes datos: id de la película en IMDB, titulo, director, 
 año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
   
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, 
Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy,
 Film Noir, Game-Show, History, Horror, Musical, Music, Mystery,
  News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, 
  Thriller, War, Western.
  */
  class Pelicula {
    constructor( id, titulo, director,estreno, país, géneros , calificación){

      this.id = id,
      this.titulo = titulo,
      this.director = director,
      this.estreno = estreno,
      this.país = país,
      this.géneros = géneros,
      this.calificación = calificación
      this.validarIMDV(id)
      this.validarTitulo(titulo)
      this.validarDirector(director)
      this.validarEstreno(estreno)

    }
    validarCadena(propiedad,valor){
      if (!valor) return console.warn("no ingresaste texto")
      if (typeof valor !== "string") return console.warn("no es una cadena validad"+ valor +" "+ propiedad) 
      return true
    }
    validadLongitudCadena(propiedad,valor,longitud){
      if(valor.length> longitud) return console.log(propiedad + "  " + valor + "excede de nuemors de cadena permitidos. " + longitud)
      return true
    }

    validarNumero(propiedad,valor){
      if(!valor) return console.info("esta vacio")
      if(typeof valor !== "number") return console.info("no es un numero")
    }




    validarIMDV(id){
      if (this.validarCadena("IMDB id",id)) {
        if(!(/^([a-z]){2}([0-9]){7}$/.test(id))){return console.error("IMDB id" + id )}
      }
      return true
    }

    validarEstreno(estreno){
      if (this.validarNumero("año de estreno",estreno)) {
        if(!(/^([0-9]){4}$/.test(estreno))){return console.error("estreno" + estreno )}
      }
      return true
    }

    validarTitulo(titulo){
      if (this.validarCadena("Titulo",titulo)) {
       this.validadLongitudCadena("titulo", titulo,100)
      }
    }

    validarDirector(director){
      if (this.validarCadena("director",director)) {
       this.validadLongitudCadena("director", director,50)
      }
    }

  }
const peli = new Pelicula({
  id:"rr1234567",
  titulo:"la-anaconda",
  director:"Artu"
  
})
