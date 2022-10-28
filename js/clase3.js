// for (inicializacion; condicion; incremento o decremento o contador){

// }

// for (let i=0; i<=10; i++){
//     console.log (i)
// }
// // Desarrollar un programa que muestre la tabla de multiplicar del 5

// for(let i=0; i<=10; i++){
//     console.log (i*5)
// }

//funciones

// sirve para un determinado proceso

// function suma() {
//     let resultado=5+9
//     console.log(resultado)
// }

// function resta() {
//     let resultado=5-9
//     console.log(resultado)
// }
// function division() {
//     let resultado=5/9
//     console.log(resultado)
// }

// function multipicacion() {
//     let resultado=5*9
//     console.log(resultado)
// }

// suma()
// resta()
// multipicacion()
// division()

// function suma(a,b) {
//     let resultado=a+b
//     console.log(resultado)
// }

// let valor1=parseInt(prompt("ingrese el primer valor"))
// let valor2=parseInt(prompt("ingrese el segundo valor"))


// //llamamos y esto es lo que se ve en la consola
// // todas las funciones pueden estar definidas, pero sólo se visualiza aquella que llamamos
// suma(valor1,valor2)

//funcion nombrada o por nombre
// function suma(a,b) {
//     let resultado=a+b
//     return resultado
// }


//funcion flecha o arrow. Palabra reservada const
// const suma = (a,b) =>{
//     let resultado= a+b
//     return resultado
// }


// let valor1=parseInt(prompt("ingrese el primer valor"))
// let valor2=parseInt(prompt("ingrese el segundo valor"))

// console.log(suma(valor1,valor2))

// ejercicio

// const mensaje =(palabra)=>{
//     let resultado= `¡${palabra}`
//     return resultado

// }

// mensaje(hola)
// console.log(mensaje(hola))

// const obtenerNombreCompleto =(a,b)=>{
//     let resultado= `${a} ${a}`
//     return resultado
// }
// console.log (obtenerNombreCompleto ("pedro", "lopez"))

//convertir horas en segundos (1)

//3600
//convertir horas en segundos (3)

//10800


// const generarEmail =(a,b)=>{
//         let resultado= `${a}@${b}.com`
//         return resultado
// }

// console.log(generaEmail("pedro", "gmail"))
// //pedro@gmail.com


// puedeAvanzar ("verde")
// //true
// puedeAvanzar ("amarillo")
// //false
// puedeAvanzar ("rojo")
// //false

// Defini una funcion pudeVerPelicula que reciba como argumentos un número de edad y un booleano tieneAutorizacion, y retorne true si la persona está habilitada para ver la película o false si no. Solo puede ver la película si tiene 15 años o más o tiene autorización de sus padres

// true: puedeVerPelicula
//tiene autorización
//>=15

// let edad=parseInt(prompt('indique su edad'))
// let autorización=(prompt ('¿tiene autorización?'))

// if (edad>=15){
//     console.log ("puedeVerPelicula")
// }else{
//     if (edad<15 && autorización="si"){

//     } console.log ("puedeVerPelicula")
// }




const jugarPiedraPapelTijera =(a,b)=>{
      if (a=='tijera' && b=='piedra'){
        return '¡gano piedra!'
      } else{
        if (a=='piedra' && b=='papel'){
            return '¡gano papel!'

      }else{
        return '¡gano tijera!'
      }


console.log(jugarPiedraPapelTijera('tijera','piedra'))

console.log(jugarPiedraPapelTijera('piedra','papel'))

console.log(jugarPiedraPapelTijera('tijera','papel'))



jugarPiedraPapelTijera('tijera', 'piedra')
//¡Ganó piedra!
 jugarPiedraPapelTijera('piedra', 'tijera')
//¡Ganó piedra!
 jugarPiedraPapelTijera('papel', 'piedra')
//¡Ganó papel!
 jugarPiedraPapelTijera('piedra', 'papel')
//¡Ganó papel!
 jugarPiedraPapelTijera('papel', 'tijera') 
//¡Ganó tijera!
 jugarPiedraPapelTijera('tijera', 'papel')
//¡Ganó tijera!
 jugarPiedraPapelTijera('piedra', 'piedra')
//¡Empate!
 jugarPiedraPapelTijera('papel', 'papel')
//¡Empate!
 jugarPiedraPapelTijera('tijera', 'tijera')
//¡Empate!
