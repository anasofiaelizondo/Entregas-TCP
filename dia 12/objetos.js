const frutas = ['Mango', 'Fresa', 'Uva', 'Manzana', 'Platano'];

console.log(frutas);
frutas.splice(1, 0, 'Sandia');

console.log(frutas);

console.log(frutas);
frutas.push('Piña');
console.log(frutas);
frutas[0] = 'Higo';
console.log(frutas);
frutas.push('Frambuesa');
console.log(frutas);
frutas.shift();
console.log(frutas);


const calificaciones = [10,9,8,7,8,6,7,9,8,10,8,9];
console.log(calificaciones.length);
const puntoExtra = 1;
let suma = 0;
calificaciones.push(8);
const nuevoLength = calificaciones.unshift(9);
console.log(calificaciones);
calificaciones.shift();
console.log(calificaciones);
calificaciones[0] = 5;

for (let i = 0; i < calificaciones.length; i++) {
    suma = suma + calificaciones[i];
}

const promedio = suma/calificaciones.length;

console.log(promedio);

const nombrePersona = 'Jakob';
const edadPersona = 39;

const otraPersona = {
    nombre: {
        primerNombre: 'Juan',
        segundoNombre: 'Alberto',
        primerApellido: 'Zapata',
        segundoApellido: 'Hernandez',
        nombreCompleto: function() {
            console.log(`${this.primerNombre} ${this.segundoNombre} ${this.primerApellido} ${this.segundoApellido}`);
        }
    },
    edad: 12,
    bio: function () {
        console.log(`${this.nombre.primerNombre} ${this.nombre.primerApellido} tiene ${this.edad} años`);
    },
    presentarse: function () {
        console.log(`Hola! Mi nombre es ${this.nombre.primerNombre}`);
    }
};

const persona = {
    nombre: {
        primerNombre: 'Ana',
        segundoNombre: 'Sofia',
        primerApellido: 'Elizondo',
        segundoApellido: 'Elizondo',
        nombreCompleto: function() {
            console.log(`${this.primerNombre} ${this.segundoNombre} ${this.primerApellido} ${this.segundoApellido}`);
        }
    },
    edad: edadPersona,
    bio: function () {
        console.log(`${this.nombre.primerNombre} ${this.nombre.primerApellido} tiene ${this.edad} años`);
    },
    presentarse: function () {
        console.log(`Hola! Mi nombre es ${this.nombre.primerNombre}`);
    }
};

console.log(persona.edad);
persona.edad = 40;
console.log(persona.edad);
console.log(persona.nombre.primerNombre);
persona.nombre.primerNombre = 'Jakobito';
console.log(persona.nombre.primerNombre);

persona.bio();
persona.presentarse();
persona.nombre.nombreCompleto();

otraPersona.bio();
otraPersona.presentarse();
otraPersona.nombre.nombreCompleto();


//const document = {
//    querySelector: function(string) {
//        //...
//    },
 //   querySelectorAll: function(string) {
 //       //...
 //   }

//}