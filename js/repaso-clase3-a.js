// for es una estructura repetitiva

// for(let i=0; i<=10; i++){
// console.log(i)
// }

//ejercicio:
// desarrollar un programa que muestre la tabla de multiplicar del 5

// let multiplo=5

// for (let i=0; i<=10;i++){
//     console.log(i*multiplo)
// }

// FUNCIONES
// son operaciones (o máquinas, si se quiere) que se ejecutan solamente cuando las nombramos. Esto quiere decir que podemos tener el calculo de estas operaciones en cualquier espacio de nuestro código sin que se ejecuten ni interfieran en lo que venimos haciendo.
//Podemos decir que son operaciones aisladas que están a la espera de ser utilizadas, y para hacerlo solo debemos llamarlas así: nombredelafuncion()

// además, las funciones pueden ser llamadas la cantidad de veces que necesitemos sin problemas.


// function mensaje(){
//     console.log('hola mundo')
// }

// mensaje()

// function suma(){
//     let resultado=9+5
//     console.log(resultado)
// }

// function resta(){
//     let resultado=9-5
//     console.log(resultado)
// }

// function multiplicacion(){
//     let resultado=9*5
//     console.log(resultado)
// }

// function division(){
//     let resultado=9/5
//     console.log(resultado)
// }

// suma()
// resta()
// multiplicacion()
// division()
// suma()
// multiplicacion()


// ejemplos con parametros (a,b). Los parámetros son datos que nuestra función necesita para realizar su análisis. Son los valores que se analizarán en nuestra función.
// Los parámetros se indican dentro del paréntesis que le sigue al nombre de nuestra función. En este ejemplo, creamos variables con valores numéricos. 

// let precioUno=15
// let precioDos=5
// let precioTres=10
// let precioCuatro=20

// function precioDosCosas(a,b){
//     let resultado=a+b
//     console.log(resultado)
// }

// function precioTresCosas(a,b,c){
//     let resultado=a+b+c
//     console.log(resultado)
// }

// precioDosCosas(precioDos,precioCuatro)
// precioDosCosas(precioUno,precioCuatro)

// precioTresCosas(precioUno,precioDos,precioTres)
// precioTresCosas(precioCuatro,precioUno,precioDos)

// // ejemplos con parametros ingresados por teclado (prompt):

// let añosQueDuraSuCarrera=parseInt(prompt('Indique la cantidad de años que dura su carrera'))
// let añosQueLlevoCursados=parseInt(prompt('indique la cantidad de años que tiene cursados'))


// function añosQueFaltanParaRecibirse(a,b){
//     let resultado=a-b
//     console.log(resultado)
// }

// añosQueFaltanParaRecibirse(añosQueDuraSuCarrera,añosQueLlevoCursados)

// // dentro de las funciones, puedo crear variables. Las mismas sólo funcionan dentro de esa variable.


// function suma(a,b){
//     let resultado = a+b
//     console.log(resultado)
// }


// function suma(a,b){
//     let resultado = a+b
//     return resultado
// }

const suma = (a,b) => {
    let resultado = a+b
    return resultado
} 


let valor1=parseInt(prompt('ingrese primer numero'))
let valor2=parseInt(prompt('ingrese segundo numero'))

console.log(suma(valor1,valor2))

// si llamamos a la función de la siguiente manera: suma(valor1,valor2) , aquí llamamos a la función, pero como dentro de la misma no pusimos un console.log, no podemos ver el resultado en la consola. Por eso, para llamar a la función y que se ejecute y al mismo tiempo se imprima lo que necesito en la consola, dentro de la función debemos utilizar la palabra reservada return.

