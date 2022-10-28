

// let resultado = Math.max (2,8,7,1)
// console.log(resultado)



// let nombre =document.querySelector('#texto')
// let email =document.querySelector('#email')


// eventos eventlistener (metodo que está esperando escuchar algo)

// creacion o inicializacion de variables
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,"A", "B", "C", "D", "E", "F"];

let btn=document.querySelector('#btn')
let body=document.querySelector('body')

// FUNCIONES:

// const cambiaColor = () => {
//    body.style.backgroundColor = 'pink'
//  }


const cambiaColor = () => {

   let hexcolor= '#'

   for (let i = 0; i < 6; i++) {

      hexcolor=hexcolor+hex[obtengoNumero()]
      console.log(hexcolor)
    }

  body.style.backgroundColor=hexcolor
}


const obtengoNumero = () => {
    return Math.floor(Math.random() * hex.length)
}






 // los eventos son varios, a continuacion vemos algunos

 btn.addEventListener('click',cambiaColor)

//  btn.addEventListener('hover',cambiaColor)


 
