const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C',
    vote: 9
  },
  {
    id: 2,
    name: 'Michele Papagni',
    age: 18,
    class: '4A',
    vote: 7
  },
  {
    id: 3,
    name: 'Fabio Forghieri',
    age: 33,
    class: '5B',
    vote: 7
  },
  {
    id: 4,
    name: 'Silvia Rivella',
    age: 25,
    class: '5B',
    vote: 7
  },
  {
    id: 5,
    name: 'Luigi Micco',
    age: 57,
    class: '5B',
    vote: 10
  },
];

console.log(students);

// # forEach --> CICLO SU TUTTI GLI ELEMENTI DI UN ARRAY
/**
 * Il metodo forEach accetta come UNICO parametro una callback function
 * Questa funzione ha 3 PARAMETRI OPZIONALI
 * | primo parametro: ELEMENTO
 * | secondo parametro: INDEX
 * | terzo parametro: ARRAY
 * ! il metodo forEach NON RESTITUISCE NULLA
 * 
 * ? QUANDO LO USO
 * ? - Quando voglio effettuare una serie di operazioni per tutti gli elementi di un array
 * ? - Quando nessuno dei prossimi metodi è adatto 😁
 */


// STAMPO TUTTI I NOMI DELL'ARRAY

for (let i = 0; i < students.length; i++) {
  const student = students[i];
  // console.log(student.name);
}

for (const student of students) {
  // console.log(student.name);
}


students.forEach((student) => {
  // console.log(student.name);
})


// # Map --> Crea un nuovo array a partire da un array precedente

/**
 * Il metodo map accetta come UNICO parametro una callback function
 * Questa funzione ha 3 PARAMETRI OPZIONALI
 * | primo parametro: ELEMENTO
 * | secondo parametro: INDEX
 * | terzo parametro: ARRAY
 * ! il metodo map restituisce un array, i cui elementi sono presi e/o modificati rispetto all'array originale
 * ! L'array risultante avrà SEMPRE la stessa lunghezza dell'originale
 * 
 * 
 * TODO Creare una variabile per ricevere il nuovo array
 * TODO Fare a ogni giro un return. Quuello che restituiamo finisce nel nuovo array
 * 
 * ? QUANDO LO USO
 * ? - Quando mi serve un nuovo array che si differenziano da quelli di un array di partenza
 * ? - Quando mi serve solo una serie di dati parziali rispetto a un array di partenza
 */

// 1. for normale
const studentNames = [];

for (let i = 0; i < students.length; i++) {
  const student = students[i];
  studentNames.push(student.name);
}

// VOGLIO CREARE UN ARRAY COI NOMI DEGLI STUDENTI
const studentsNames = students.map(student => student.name);


// VOGLIO UN ARRAY con solo le proprietà name ed age
const michelStudents = students.map((student) => {
  return {
    name: student.name,
    age: student.age,
  }
});


const ramirezStudents = students.map(student => ({
  name: student.name,
  age: student.age,
}));




// console.log(michelStudents);


//  # filter => CREO UN NUOVO ARRAY FILTRANDO UN ARRAY PRECEDENTE

/**
 * Il metodo filter accetta come UNICO parametro una callback function
 * Questa funzione ha 3 PARAMETRI OPZIONALI
 * | primo parametro: ELEMENTO
 * | secondo parametro: INDEX
 * | terzo parametro: ARRAY
 * ! il metodo filter restituisce un array, i cui elementi vengono filtrati a partire da un array precedente
 * ! L'array risultante potrà avere  lunghezza UGUALE o MINORE rispetto all'originale
 * 
 * 
 * TODO Creare una variabile per ricevere il nuovo array
 * TODO Fare a ogni giro un return il cui valore è un booleano: se TRUE, l'elemento sarà nel novo array, altrimenti no.
 * 
 * ? QUANDO LO USO
 * ? - Quando devo filtrare gli elementi di un array di partenza sulla base di alcune caratteristiche (senza modificare l'originale)
 */


// VOGLIO GLI STUDENTI CHE HANNO PIU' DI 29 ANNI
const olderStudents = students.filter((student) => {
  return student.age >= 30;
});

const oldStudents = students.filter((student) => {
  return student.age >= 30 ? true : false;
});

const oldestStudents = students.filter(student => student.age >= 30);

// console.log(olderStudents);






// # some --> VERIFICA LA PRESENZA DI QUALCOSA IN UN ARRAY
/**
 * Il metodo some accetta come UNICO parametro una callback function
 * Questa funzione ha 3 PARAMETRI OPZIONALI
 * | primo parametro: ELEMENTO
 * | secondo parametro: INDEX
 * | terzo parametro: ARRAY
 * ! il metodo some restituisce un boolean, sulla base della presenza o meno di elementi che superano un nostro test
 * ! Restituisce true non appena trova un singolo elemento che supera il test
 * ! Se nessun elemento super il test, restituisce false
 * 
 * TODO Creare una variabile per ricevere il boolean
 * TODO Fare a ogni giro un test e restituire un valore  booleano.
 * 
 * ? QUANDO LO USO
 * ? - Quando devo verificare se in un array è presente ALMENO UN ELEMENTO che risponde a determinate caratteristiche
 */

// CI SONO STUDENTI CON MENO DI 30 anni?
const hasYoungStudent = students.some((student) => student.age < 30);




// # find --> CERCA E RESTITUISCE UN ELEMENTO IN UN ARRAY

/**
 * Il metodo find accetta come UNICO parametro una callback function
 * Questa funzione ha 3 PARAMETRI OPZIONALI
 * | primo parametro: ELEMENTO
 * | secondo parametro: INDEX
 * | terzo parametro: ARRAY
 * ! il metodo some restituisce IL PRIMO elemento che supera un determinato test
 * ! Restituisce undefined se non trova nessun elemento che supera il test
 * 
 * TODO Creare una variabile per ricevere il boolean
 * TODO Fare a ogni giro un test e restituire un valore  booleano.
 * 
 * ? QUANDO LO USO
 * ? - Quando voglio recuperare un dato elemento da un array
 */


const person = students.find((student) => {
  if (student.id === 4) {
    return true;
  } else {
    return false;
  }
});


const silvia = students.find((student) => student.id === 4);

console.log(silvia);




