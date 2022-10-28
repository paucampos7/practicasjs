// console.log('hola mundo')
// // para comentario en una sola linea
// /* para comentarios en
// varias
// lineas */

// // tema variable: es una caja donde guardo un valor
// // se usa palabra reservada let (creo el cajon)
// // seguido de eso le pongo nombre al cajon

// let numero = 15
// let palabras = 'hola mundo'

// let numero_otro = 35

// // entrada de datos por teclado, ya no se usa



// // que el usuario ingrese nombre, apellido, edad, estado civil y email
// // y que todo se muestre en un solo mensaje

// let nombre = prompt("ingrese su nombre")
// let apellido = prompt("ingrese su apellido")
// let edad = prompt("ingrese su edad")
// let estado_civil = prompt("ingrese su estado civil")
// let email = prompt("ingrese su e-mail")


// console.log(`su nombre es ${nombre}, su apellido es ${apellido}, su edad es ${edad} años, su estado civil es ${estado_civil} y su e-mail es ${email}`)

// // multiplicacion
// let valor1=prompt('ingrese el ancho')

// let valor2=prompt('ingrese el largo')

// let resultado_multiplicacion

// resultado_multiplicacion=valor1*valor2

// console.log(`la superficie es ${resultado_multiplicacion} metros`) 

// // suma
// let valor3=prompt('ingrese el primer numero')

// let valor4=prompt('ingrese el segundo numero')

// let resultado_suma

// resultado_suma= parseInt(valor3)+parseInt(valor4)

// console.log(resultado_suma)

// // division
// let valor5=prompt('ingrese el peso de su pieza')

// let valor6=prompt('ingrese cuantos metros tiene su pieza')

// let resultado_division

// resultado_division=valor5/valor6

// console.log(`cada kilo rinde ${resultado_division} metros de tela`)

// // resta
// let valor7=prompt('ingrese su edad')

// let valor8=prompt('ingrese la edad de su hijo')

// let resultado_resta

// resultado_resta=valor7-valor8

// console.log(`le lleva a su hijo ${resultado_resta} años`)

// let nota=prompt ("ingrese la nota del alumno")
// if(nota <=4){
//     console.log("el alumno desaprobo")
// }else{
//     console.log("el alumno aprobo")
// }

let nota1=prompt ('ingrese su primer nota')
let nota2=prompt ('ingrese su segunda nota')
let nota3=prompt ('ingrese su tercera nota')

resultadosuma=parseInt(nota1)+ parseInt(nota2)+parseInt(nota3)
promedio=resultadosuma/3

// if (promedio>=4) 
//     {console.log ("regular")}
// else{console.log ("reprobado")}

// operador ternario
promedio>=4 ? console.log ("regular"):console.log ("reprobado")