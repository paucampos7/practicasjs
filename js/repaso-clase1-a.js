// console.log('hola mundo')



// Datos de tipo string o de cadena de caracteres. (Requiere el uso de comillas)
let frase = 'hola mundo'
let palabras = 'hola' 
let nombre_y_apellido = 'pau campos'

//Datos de tipo numerico
let numeroOtro = 35
let anio = 1985

// datos de tipo booleano
let estado = true
let otro_estado = false

// entrada de datos por teclado, funciona con la palabra reservada: prompt

// prompt ('ingrese su edad') , esto crea una ventana emergente en la cual podemos ingresar el dato o valor solicitado.

// En el caso siguiente, podemos lograr que dicho dato o valor nombre, o edad del usuario, sea el contenido de la variable Creada


let nombre =  prompt ('ingrese su nombre')
let apellido = prompt('ingrese su apellido')
let edad = prompt('ingrese su edad')
let estadoCivil = prompt ('idique su estado civil')
let email = prompt ('escriba su e-mail')

console.log (`Su nombre es ${nombre}, su apellido ${apellido} y tiene ${edad} años de edad. Actualmente su estado civil es ${estadoCivil}. Podemos contactarla a través de su correo electronico ${email}.`)