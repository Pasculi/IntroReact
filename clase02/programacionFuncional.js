//Programacion Funcional
//Callbacks

//MEtodos para iterar => MAP, FILTER, REDUCE

const users = [
    {
        "id":"01",
        "title":"ms",
        "age":23,
        "firstName":"Sara",
        "lastName":"Andersen",
        "picture":"http://randomuser.me/api/portraits/women/58.jpg",
        "account": 25000
    },
    {
        "id":"02",
        "title":"miss",
        "age":45,
        "firstName":"Edita",
        "lastName":"Vastering",
        "picture":"http://randomuser.me/api/portraits/women/89.jpg",
        "account": 100000
    },
    {
        "id":"03",
        "title":"ms",
        "age":38,
        "firstName":"Adina",
        "lastName":"Barnosa",
        "picture":"http://randomuser.me/api/portraits/women/28.jpg",
        "account": 40000
    },
    {
        "id":"04",
        "title":"mr",
        "age":38,
        "firstName":"Roberto",
        "lastName":"Vega",
        "picture":"http://randomuser.me/api/portraits/men/25.jpg",
        "account": 25000
    },
    {
        "id":"05",
        "title":"mr",
        "age":50,
        "firstName":"Rudi",
        "lastName":"Droset",
        "picture":"http://randomuser.me/api/portraits/men/83.jpg",
        "account": 11
    }
]

//El metodo map itera en cada uno de los elementos de un array y retorna otro array nuevo;

//const getFirstName = users.map((user, i )=> user.firstName);

/*const getFirstNameUsers = users.map((user, i ) => {
    console.log(i, user.lastName);
    return user.firstName
})

console.log(getFirstNameUsers)

//Lo Anterior convertido en una funcion
const getFirstNameUsers2 = () => users.map((user, i ) => {
    console.log(`Convertida a una funcion con map: ${i}, ${user.lastName}`);
    return `${user.firstName}`
})

console.log(getFirstNameUsers2())
*/
/* const hobbies = ['Leer','Cantar', 'Reir', 'Andar en Bici', 'Trotar']

const iterarHobbies = () => hobbies.map((hobbie, i) => console.log(`${hobbie} en mi casa`));

iterarHobbies(); */

//Usando Filter

/* const ages = () => users.filter((user, i) => (user.age === 38))

console.log(ages()) */

//Otro Ejemplo

//const getThePersonwithNoMoney = () => users.filter((user, i) =>  user.account === 0);


//Creamo una copia de nuestro array le agregamos un index y un pais que se lo enviaremos por parametro en la funci??n
//const getOnlyUsersAccount = (country) => users.map((user, i) =>  ({...user, index: i, country:country}));

//Prueba
/* const getOnlyUsersAccount = (country) => users.map((user, i) =>  ({nombre:`${user.firstName} ${user.lastName}`,index: i, saldo:user.account}));

console.log(getThePersonwithNoMoney())

console.log(getOnlyUsersAccount('Chile')) */

//Uo de REDUCE
//Acepta dos parametros un Callback, el primer par??metro es un acumulador y el segundo es el item que se quiere sumar u operar

const strings = ['Mi','nombre','es','Jorge']

const usoReduce = () => users.reduce((acc, item) => {
    acc += item.account;
    return acc;
}, 0);//=>Valor inicial

console.log(`El promedio de las cuentas es de: $${usoReduce()/users.length} pesos Chilenos`) 

const reducStrings = () => strings.reduce((acc, item)=>{
    return acc += ' ' + item
}, 'Hola!')//=>Valor inicial
console.log(reducStrings());

//Qui??n tiene mas plata en la cuentas

/* const accountMax = () => users.reduce((acc, item)=>{
    return Math.max(acc, item.account)
}) */
const accountMax = () => users.map((user)=>{
    return user.account
})

const computoMax = () => accountMax().reduce((acc, item)=>{
    return Math.max(acc, item)
})
const computoMin = () => accountMax().reduce((acc, item)=>{
    return Math.min(acc, item)
})

console.log(computoMax())
console.log(computoMin())