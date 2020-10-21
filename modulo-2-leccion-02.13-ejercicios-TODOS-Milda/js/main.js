"use strict"

//  EJERCICIO 1
//  Inflar las notas

const sum = (a, b) => {       // Función para sumar 
  return a + b;
}

const marks = [5, 4, 6, 7, 9]
const inflatedMarks = marks.map(mark => sum(mark, 1) );  // Sumamos: la nota +1 

console.log(inflatedMarks); 

//  EJERCICIO 2
//  Saludar es de buena educación

const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];

const greetName = names.map(name => "Bienvenida " + name);
console.log(greetName); 

//   EJERCICIO 3
//   Gracias por confiar en nosotros
  
const users = [
  { name: 'María', isPremium: false, pin: 2389 },
  { name: 'Lucía', isPremium: true, pin: 2384 },
  { name: 'Susana', isPremium: true, pin: 2837 },
  { name: 'Rocío', isPremium: false, pin: 5232 },
  { name: 'Inmaculada', isPremium: false, pin: 8998 }
];

const greeting = users.map(user => (user.isPremium === true) ? `Bienvenida ${user.name}. Gracias por confiar en nosotros.` : `Bienvenida ${user.name}.`);
console.log(greeting);

//   EJERCICIO 4
//   Solo los premium

const premiumUsers = users.filter(user => user.isPremium === true);
console.log(premiumUsers);

//   EJERCICIO 5
//   Los pares pueden entrar

const pins = [2389, 2384, 2837, 5232, 8998];
const onlyEven = pins.filter(pin => pin % 2 === 0);
console.log(onlyEven);

//   EJERCICIO 6
//   Los usuarios que pueden entrar

const grantAccess = users.filter(user => user.pin % 2 === 0);
console.log(grantAccess);

//    EJERCICIO 7
//    La media de la carrera

const times = [56, 9, 45, 28, 35];
const avgTime = times.reduce((acc, time) => acc + time / times.length, 0);  //¿Los argumentos de la función tienen precedencia?
console.log(avgTime);

//    EJERCICIO 8
//    El ganador de la carrera

const runners = [
  { name: 'Gregory Goyle', time: 56, student: true },
  { name: 'Nymphadora Tonks', time: 9, student: false },
  { name: 'Luna Lovegood', time: 45, student: true },
  { name: 'Cedric Diggory', time: 28, student: true },
  { name: 'Cho Chang', time: 35, student: true }
];

const winner = runners.reduce((previous, current) => (previous.time < current.time) ? previous : current);    // Shorthand del operador ternario if-else (condición) ? true : else)
console.log(winner);

//    EJERCICIO 9
//    El ganador de los estudiantes

const studentWinner = runners.filter(runner => runner.student === true).reduce((previous, current) => (previous.time < current.time) ? previous : current);
console.log(studentWinner);     // Primero se seleccionan los que son estudiantes y luego se comparan sus tiempos

//    EJERCICIO 10
//    Encuentra el usuario

const incident = users.find(user => user.pin === 5232);
console.log(incident);    // Encuentra el usuario por su pin

const incidentIndex = users.findIndex(user => user.pin === 5232);
const eliminateUser = users.splice(incidentIndex, 1);
console.log(eliminateUser);   // El objeto que contiene Rocío ha sido eliminado
console.log(users); // Quedan 4 objetos

//    EJERCICIO 11
//    Clasificación de la carrera

runners.sort((a, b) => a.time - b.time);  // Del más rápido al más lento
console.log(runners);

runners.sort((a, b) => - a.time + b.time); // Del más lento al más rápido
console.log(runners);

//    EJERCICIO 12
//    Poniendo orden en nuestros usuarios

const clients = [
  { name: 'María', isPremium: false, pin: 2389 },
  { name: 'Lucía', isPremium: true, pin: 2384 },
  { name: 'Susana', isPremium: true, pin: 2837 },
  { name: 'Rocío', isPremium: false, pin: 5232 },
  { name: 'Inmaculada', isPremium: false, pin: 8998 }
];

clients.sort((a, b) => a.name > b.name ? 1 : -1);  // A-Z
console.log(clients);

// clients.sort((a, b) => a.pin - b.pin); // De menor a mayor por pin 
// console.log(clients);

// Descomentar las líneas anteriores, si no, el sort anterior no funciona.