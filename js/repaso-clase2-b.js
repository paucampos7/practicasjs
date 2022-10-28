// estructuras repetitivas o iterativas (WHILE) == MIENTRAS. Es una estructura cíclica, para la cual es necesario un contador que permita cortar el ciclo.

// let x=1

// while(x<=10){
//     console.log (x)
//     x= x+1
// }


// ejercicio 1: se imprime 25 terminos de la serie: 11 - 22 - 33 - 44

// let x=11
// while (x<=275){
//     console.log(x)
//     x= x + 11
// }


// ejercicio 2 : mostrar los multiplos de 8 hasta el valor 500

// let x=8
// while (x<=500){
//     console.log(x)
//     x = x + 8
// }

//ACUMULADOR me permite sumar valores

// let x=1
// let suma=0
// while (x<=5){
//     let valor=prompt('ingrese un valor')
//     valor=parseInt(valor)
//     console.log(valor)
//     suma=suma+valor
//     x = x + 1
// }
// el acumulador me realizó la suma de los valores, y por fuera del programa ponemos el console.log para imprimirlo en la consola:
// console.log(suma)

//Ejercicio 1:
// hacer un programa donde se ingresen 10 notas de alumnos y nos informe cuantos tienen notas mayores o iguales a 7 y cuantos menores.

let x=1
let suma=0


while (x<=10){
    let nota=prompt ('ingrese su nota')
    nota=parseInt(nota)
    console.log (nota)
    x=x+1

    if(nota>=7){
        console.log ('aprobado')

    }else{
       console.log ('desaprobado')
    }
    
}
    





