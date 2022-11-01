// arrray : estructura de datos que permite almacenar información. Un array puede contener N cantidad de elementos de diversos tipos: numéricos, string, booleano, links, e incluso otros arrays.

// Se escribe como variable, ejemplos:
let numero= 0
let palabra= 'hola'
let booleano= true

let arrayUno=[7, 9, 1985, 'mi fecha de cumpleaños', 'septiembre', true, false, [29,12,19,'hagamos una fiesta']]

console.log (arrayUno)
console.log(arrayUno[0])
console.log(arrayUno[1])
console.log(arrayUno[2])

let resultado=palabra.length
console.log(resultado)

// la propiedad .length, retorna la cantidad de elementos de un objeto. en este caso, devuelve la cantidad de letras que tiene el contenido de la variable palabra (que es la palabra 'hola')

// console.log(arrayUno.length)

// así hacemos el recorrido de un array. Utilizamos la estructura repetitiva "for"

for (let i=0; i<arrayUno.length; i++){
    console.log (arrayUno[i])

}


//recorrer un array con un for, otro ejemplo
const nombreMujeres=['paula', 'soledad', 'micaela', 'daniela', 'ruth']

for (let i=0; i<nombreMujeres.length; i++){
    console.log (nombreMujeres[i])

}

// recorrer array con While (no se usa mas)
let x=0
while (x<nombreMujeres.length){
    console.log (nombreMujeres[x])
    x++
}

// recorrer array con do while (no se usa mas)

let j= 0
do{
    console.log (nombreMujeres[j])
    j++
}while(j<nombreMujeres.length)


// for of 

for (const mujer of nombreMujeres){
    console.log(mujer)
}
