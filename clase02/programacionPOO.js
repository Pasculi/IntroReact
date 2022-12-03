//Programacion Oroentada a Objetos POO

//Clases son entidades

class SuperHero{
    constructor(name, skills, strong, weakness){
        this.name = name;
        this.skills = skills;
        this.lifes = 100;
        this.strong = !strong ? 10: strong;
        this.weakness = weakness;
    }
    //Definimos el comportamiento de nuestra clase => Métodos
    fight(){
        this.strong -= 10;
    }
    teach(){
        this.lifes += 10;
        this.strong += 10;
        console.log(`Ahora soy mas sabio y tengo fuerza de ${this.strong} y ${this.lifes}`);
    }
    slavarVidas(skill){
        this.skills= [...this.skills, skill];
        console.log(`Oh he ganado una nueva habilidad: "${skill}", ahora mis habilidades son ${this.skills.join(' - ')}`)

    }
    greet(){
        console.log(`Hola mi nombre ${this.name}`)
    }
}
 class Aqcua extends SuperHero {
    constructor(aqcuaSkills){
        super('pececin',['respirar bajo el agua','tener aletas','comunicarse con los animales'], 500, 'aire');
        this.skills = [...this.skills, aqcuaSkills];
    }
    greetAcqua(){
        super.greet();
        this.teach();
           console.log(this.skills);
    }
 }

//Veremos las Herencias


const super1 = new SuperHero('Batman',['Dinero', 'Tecnología', 'Auto', 'Avión'], 200, 'Compasivo')
/* super1.greet()
super1.teach()
super1.slavarVidas('Felicidad')
super1.slavarVidas('Humildad') */

const aqcuaHero = new Aqcua('Nadar al mar Caribe')
aqcuaHero.greetAcqua();
