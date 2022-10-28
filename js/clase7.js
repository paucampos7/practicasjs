

// let resultado = Math.max (2,8,7,1)
// console.log(resultado)



// let nombre =document.querySelector('#texto')
// let email =document.querySelector('#email')


// eventos eventlistener (metodo que está esperando escuchar algo)


let btn=document.querySelector('#btn')
let body=document.querySelector('body')


const cambiaColor = () => {
   body.style.backgroundColor = 'pink'
 }

 // los eventos son varios, a continuacion vemos algunos

 btn.addEventListener('click',cambiaColor)

 btn.addEventListener('hover',cambiaColor)


 
