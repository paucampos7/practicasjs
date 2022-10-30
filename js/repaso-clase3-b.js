// Realizar un programa que imprima ¡hola! en la consola

// const mensaje = ()=>{
//     let hola='¡hola!'
//     return hola
// }
// console.log(mensaje('hola'))


// El siguiente es un programa que imprime lo que indiquemos en la consola, con signos de exclamación.
// const message = (palabra) => {
//     let resultado= `¡${palabra}!`
//     return resultado
// }

// console.log(message('hola che'))

// obtener nombre completo  pedro lopez

// let nombre = prompt ('indique su nombre')
// let apellido= prompt ('indique su apellido')


// const obtenerNombreCompleto = (a,b) => {
//     let resultado = `su nombre completo es ${nombre} ${apellido}`
//     return resultado
// }

// console.log (obtenerNombreCompleto ('a','b'))


// otra forma, sin el prompt , de obtener nombre completo  pedro lopez

// const obtenerNombreTotal = (a,b) =>{
//     let resultado= `${a} ${b}`
//     return resultado
// }

// console.log (obtenerNombreTotal('pedro','lopez'))


// Ejercicio: ConvertirHorasEnSegundos (1) 3600
// convertirHorasEnSegundos (3) -- 10800

// const ConvertirHorasEnSegundos = (a) =>{
//     let resultado= a*3600
//     return resultado
// }

// console.log (ConvertirHorasEnSegundos (1))
// console.log (ConvertirHorasEnSegundos (3))

// // generar e-mail
// const generaremail = (a,b) =>{
//     let resultado =`${a}@${b}.com`
//     return resultado
// }

// console.log (generaremail ('pedro','gmail'))
   
// // Una buena práctica al presentar esta función, de manera más simple, más limpia, es eliminando la variable:

// const generarEmail = (a,b) =>{
//     return `${a}@${b}.com`
// }

// console.log (generarEmail ('pedro','gmail'))

// Ejercicio

// puedeAvanzar ('verde')
// //tiene que devolver en consola: true
// puedeAvanzar ('amarillo')
// //tiene que devolver en consola: false
// puedeAvanzar ('rojo')
// //tiene que devolver en consola: false

// const puedeAvanzar = (a) =>{
//     if (a == 'verde'){
//         return true
//     }else{
//             return false
//         }
//     }

/// con operador ternario queda así:
// return a == 'verde' ? true : false
   
// console.log(puedeAvanzar('rojo'))
// console.log(puedeAvanzar('amarillo'))
// console.log(puedeAvanzar('verde'))


// Definí una función puedeVerPelicula que reciba como argumentos un numero de edad y un booleano tieneAutorizcion, y tetorne true si la persona esta habilitada para ver la pelicula o false si no. solo puede ver la pelicula si tiene 15 años o más, o tiene autoriación de sus padres.

// const puedeVerPelicula = (a,b) => {
//     if (a>=15){
//         return true
//     }else{
//         if(b==true){
//             return true
//         }else{
            
//             return false
//         }
//     }
// }

// // resumen
// console.log(puedeVerPelicula(12,true))
// console.log(puedeVerPelicula(12,false))
// console.log(puedeVerPelicula(16,true))
// console.log(puedeVerPelicula(18,false))


// Definir una función jugarPPT que reciba como argumentos dos strings a y b que representen una jugada (piedra, papel, tijera) y retorne un string con un mensaje avisando qué guada ganó ( o si hubo empate)

// const ppt =(a,b) =>{
//     if (a=='tijera' && b=='piedra')
//     {return `¡gano ${b}!`
//         }else{
//             if (a=='piedra' && b=='papel')
//              {return `¡gano ${b}!`
//                 }else{
//                     if (a=='papel' && b=='tijera'){
//                     return `¡gano ${b}!`
//                  }
//         }
// }
// }

// console.log (ppt('tijera','piedra'))
// // ¡gano piedra!
// console.log (ppt('piedra','papel'))
// // ¡gano papel!
// console.log(ppt('papel','tijera'))
// // ¡gano tijera!

const ppt =(a,b) =>{
    if (a==b)
    {return `¡empate!`
        } else {
            if (a=='piedra' && b=='papel' || a =='papel' && b=='piedra')
             {return `¡gano papel!`
                } else {
                    if (a=='papel' && b=='tijera' || a== 'tijera' && b== 'papel'){
                        return `¡ganó tijera!`
                    } else{
                        if (a=='piedra' && b== 'tijera' || a== 'tijera' && b=='piedra'){
                            return `¡ganó piedra!`
                        }
                    }
                    
        }
}
}

console.log (ppt ('tijera','tijera'))
console.log (ppt ('piedra','piedra'))
console.log (ppt ('papel','papel'))

console.log (ppt ('piedra','tijera'))
console.log (ppt ('tijera','piedra'))

console.log (ppt ('piedra','papel'))
console.log (ppt ('papel', 'piedra'))

console.log (ppt ('tijera','papel'))
console.log (ppt ('papel','tijera'))




