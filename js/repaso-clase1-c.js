// Estructura condicional simple (if)

//   calificacion = prompt ('ingrese su nota')

//   if (calificacion >=4){
//     console.log('usted ha aprobado')
//   }else{
//     console.log('usted ha desaprobado')
//   }


  // calcule el promedio del alumno y avise si esta aprobado o desaprobado

  let nota1= prompt ('ingrese la nota de su primera evaluación')
  let nota2= prompt ('ingrese la nota de su segunda evaluación')
  let nota3= prompt ('ingrese la nota de su tercera evaluación')

  let promedio= (parseInt(nota1)+parseInt(nota2)+parseInt(nota3))/3

  let aprobado=7
  let desaprobado=4
 

  if(promedio>=aprobado){
    console.log (`usted ha aprobado con ${promedio}`)
  }else{
    (promedio<desaprobado)
        console.log(`usted ha desaprobado con ${promedio}`)
    
  }

