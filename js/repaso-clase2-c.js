// clases

// clase Date (fecha)

// let mivariable = new Date()

// console.log(mivariable.getFullYear())
// console.log(mivariable.getDay())
// console.log(mivariable.getMonth()+1)

// console.log (`la hora actual es ${mivariable.getHours()}:${mivariable.getMinutes()}`)


// let dia= mivariable.getDate()
// let mes= mivariable.getMonth()+1
// let anio= mivariable.getFullYear()

// console.log(`Hoy es ${dia}/${mes}/${anio}`)

//tarea:
// hacer un programa que me muestre el siguiente formato:
// hoy es lunes 17 de octubre 2021

let mivariable= new Date()

let dia= mivariable.getDay()+1
let fecha = mivariable.getDate()
let mes= mivariable.getMonth()+1
let anio= mivariable.getFullYear()-1

if (dia=1){
    console.log (lunes)
}
