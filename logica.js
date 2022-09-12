/*
 Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

*/


function concarCaracteres(n=""){
    if (!n) {
        console.log("no es una cadena")
    }else{
        console.info( +  n.length )
    }
}
concarCaracteres("ArturoBadunaesLomas")

/*
 Programa una función devuelva

*/
const recortarText = (cadena="",loungitud=undefined) =>   (!cadena)? console.warn("No ingresanste una cadena de texto") 
: console.info( cadena.slice(0,loungitud))
recortarText("arturoeeslomas",3)
/*
 Programa una función devuelva
*/
const enviarAray = (cadena="", separador=undefined) =>  (!cadena)? console.warn("No ingresanste una cadena de texto") 
                                                    :(separador === undefined) 
                                                    ? console.log("no inggresante el separador")
                                                    : console.log(cadena.split(separador))
enviarAray("HOla mundo  estamos en verano"," ")
/*
 Programa una función repita  n veces
*/
function devuelveLaCadena(cadena="",n=1){
    if (!cadena) console.warn("cadena o numro de repetir  es un error")
    if ( n<1) console.warn(" n tiene que ser mayor a uno")
    for (let index = 0; index < n; index++) {
        console.log(cadena)
    }
    

}
devuelveLaCadena("Arturo es lo mas",10)
/*
 5) Programa una función que invierta las palabras de una cadena de texto, pe. 
 miFuncion("Hola Mundo") devolverá "odnuM aloH".


 */

const invertirCadena = (cadena="") => (!cadena) ? console.log("no hay cadena") :console.log(cadena.split("").reverse().join("") )

invertirCadena("ArturoEsLoMas")
/*
6) Programa una función para contar el número de veces 
que se repite una palabra en un texto largo, pe. 
miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
*/
const contarCadena = (cadena="", texto="") => {
if (!cadena && !texto) return console.log("esto no funca") 
let i = 0, contador = 0
    while(i !==-1){
        i = cadena.toLowerCase().indexOf(texto,i)
        if (i !==-1) {
            i++
            contador++
        }
    }
    return console.log( "La cantidad es :"+contador) 
}   
contarCadena("Arturo  arturo arturo", "arturo")


/*
7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
*/
const palindromos = (cadena="") =>{
    if (!cadena ) return console.log("esto no funca") 
    palabra = cadena.toLowerCase()
    let alRevez = palabra.split("").reverse().join("")

    return( palabra === alRevez) ? console.log("es palindromo_:" + cadena +"_y_"+ alRevez ) : console.log("NO es palindromo"+ cadena +"y"+ alRevez)
}
palindromos("Dábalearrozalazorraelabad")


/*
8) Programa una función que elimine cierto patrón 
de caracteres de un texto dado, pe. 
miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
*/
const eliminarCaracteres = (texto="", cadena="") => 
(!cadena || !texto) 
? console.log("hay un erro reviza")
: console.log(texto.replace(new RegExp(cadena,"ig"),"_"))

eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")


/*

9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
*/
const aleatordfgio = ()=> console.info(Math.round(Math.random()*100 + 500))

aleatordfgio()
/*10) Programa una función que reciba un número 
y evalúe si es capicúa o no (que se lee 
igual en un sentido que en otro),
pe. miFuncion(2002) devolverá true.*/
const capicua = (numero = 0) => {
    if(!numero) return console.warn("no ingresaste un numeroi")
    if(typeof numero !== "number") return console.warn("no es un numero")
    numeroStrin = numero.toString()
    letAlrecez = numero.toString().split("").reverse().join("")
    if (numeroStrin ===letAlrecez) {
        console.log("Los numero son capicua"+ numero )
    } else {
        console.log("Los numero NO son capicua_"+ numero )
    }
}
capicua(545)
/* 11) Programa una función que calcule el factorial de un número 
(El factorial de un entero positivo n, se define como el producto de todos 
los números enteros positivos desde 1 hasta n), pe. 
miFuncion(5) devolverá 120.
*/
const factorial = (n) => {
    let resultado = 1
    if (!n<1) { console.log("numero tiene que ser mayor a 1")}
    if (!n<0) { console.log("numero tiene que ser numero positovos")}
    for (let index = 1; index < n +1 ; index++) {
        resultado = resultado*index
        
    }
    console.log(resultado)
}  
factorial(5)