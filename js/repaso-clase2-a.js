// estructura condicional anidada, cuando hay más opciones tanto por true o false.
// let nota1= prompt ('ingrese la nota de su primera evaluación')
// let nota2= prompt ('ingrese la nota de su segunda evaluación')
// let nota3= prompt ('ingrese la nota de su tercera evaluación')

// nota1=parseInt(nota1)
// nota2=parseInt(nota2)
// nota3=parseInt(nota3)



// let promedio= (nota1+nota2+nota3)/3

// let promocionado=7
// let regular=4
// let desaprobado=3

// if(promedio >= 7){
//     console.log('promocionado')
// }else{
//     if(promedio >= 4){
//         console.log('regular')
//     }else{
//         console.log('desaprobado')
//     }
// }



// ejercicio 1:
// se ingresa un numero entero positivo de hasta tres cifras y me tiene que mostrar por pantalla si el nuemor tiene 1,2 o 3 cifras.

let number_d=prompt('ingrese su numero de hasta tres cifras')


if(number_d<10){
    console.log (`su numero es de una sola cifra`)
}else{
    if(number_d>=10 && number_d<99){
        console.log (`su umero es de dos cifras`)
    }else{
        console.log(`su numero es de tres cifras`)
    }
}

// OPERADORES LOGICOS:
// "y" "and" &&
// cuando dentro de una estructura condicional, se disponen mas de una condiciones. Para que la operacion de TRUE, se tienen que dar todas las condiciones.