console.log('js ok');

// Funzione per generare un numero casuale compreso tra min e max
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// creo array di oggetti squadre di calcio
const teams = [
    { name: 'Roma', points: getRandomNumber(0, 100), foulsSoffered: getRandomNumber(0, 40) },
    { name: 'Inter', points: getRandomNumber(0, 100), foulsSoffered: getRandomNumber(0, 40) },
    { name: 'Milan', points: getRandomNumber(0, 100), foulsSoffered: getRandomNumber(0, 40) },
    { name: 'Juve', points: getRandomNumber(0, 100), foulsSoffered: getRandomNumber(0, 40) },
    { name: 'Napoli', points: getRandomNumber(0, 100), foulsSoffered: getRandomNumber(0, 40) },
]

console.log(teams);