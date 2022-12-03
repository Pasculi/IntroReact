/*var unicornio;
console.log(unicornio)

unicornio = "Soy un unicornio azul"
console.log(unicornio)
var unicornio = "Soy un unicornio azul"

//Let y Const diferencias

const PI = 3.14;//NO puede cambiar su valor
let suma = 20; //Variable cuyo valor puede ser reasignado

//Destructuring

const user = {
    firstName:'Juan',
    age:38,
    hobbies:'leer por horas'
}

console.log(user)

const hob = 'hobbies';

const {firstName, age} = user
console.log(user.nombre)
console.log(`Mi nombre es: ${user.firstName} y tengo ${age} años y mis hobbies son ${user[hob]}`)

const students = ['José','Carlos', 'María', 'Susana']

const [firstStudents, ,otroStudents]= students;
console.log("🚀 ~ file: index.js:32 ~ otroStudents", otroStudents)

console.log("🚀 ~ file: index.js:32 ~ firstStudents", firstStudents)
*/
//Ejercicio
const users = {
    firstName:'Juan',
    age:38,
    hobbies:['leer por horas','Salir en Bicicleta', 'Maraton de Boys']
}
const [pasatiempos1, pasatiempos2, pasatiempos3] = users.hobbies
//const {hobbies} = users;
//pasatiempos2 = 'Volar';
users.hobbies[1] = 'Pescar en Lago';
console.log(pasatiempos2)
console.log("🚀 ~ file: index.js:42 ~ users", users)

//SPREAD OPERATOR
//Hace una "Shallow copy"

const usersTwo = {...users, address:'Estocolmo 405', email:'beimone@gmail.com', age:49}
console.log("🚀 ~ file: index.js:53 ~ usuarios", usersTwo)


const fruits = ['Apple','Pineapple','Bannana','Orange'];

const moreFruits = ['Strawberry'];

const copyFruits = [...fruits, ...moreFruits, 'Watermelon']
console.log("🚀 ~ file: index.js:61 ~ copyFruits", copyFruits)

//REST OPERATOR
const {age, ...any} = users
console.log("🚀 ~ file: index.js:65 ~ rest", any)

//Arrow functions

function suma(a,b){
    return a + b;
}
console.log(suma(5,4))


const suma2 = (a,b)=>{
 return a + b;
}
const suma3 = (a,b)=> a + b;
console.log(suma3(8,9))

console.log(suma2(4,8))

//Operador Ternario
const restriction = age =>{
    /* if(age>18){
        return 'Puedes entrar'
    }else{
        return 'No puedes entrar'
    } */
    //return age > 18 ? 'Eres mayor de edad' : 'Eres un hijo de tu madre';
    return age > 18 && 'Eres mayor de edad';
}

console.log(restriction(19))