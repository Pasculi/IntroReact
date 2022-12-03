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
        "account": 0
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
const hobbies = ['Leer','Cantar', 'Reir', 'Andar en Bici', 'Trotar']

const iterarHobbies = () => hobbies.map((hobbie, i) => console.log(`${hobbie} en mi casa`));

iterarHobbies();

//Usando Filter

const ages = () => users.filter((user, i) => (user.age === 38))

console.log(ages())

//Otro Ejemplo

const getThePersonwithNoMoney = () => users.filter((user, i) =>  user.account === 0);


//Creamo una copia de nuestro array le agregamos un index y un pais que se lo enviaremos por parametro en la función
//const getOnlyUsersAccount = (country) => users.map((user, i) =>  ({...user, index: i, country:country}));

//Prueba
const getOnlyUsersAccount = (country) => users.map((user, i) =>  ({nombre:`${user.firstName} ${user.lastName}`,index: i, saldo:user.account}));

console.log(getThePersonwithNoMoney())

console.log(getOnlyUsersAccount('Chile'))