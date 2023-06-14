console.log('JS OK');


// Creazione dell'array di oggetti
const bikes = [
    { name: 'Bici 1', weight: 8 },
    { name: 'Bici 2', weight: 7 },
    { name: 'Bici 3', weight: 6 },
    { name: 'Bici 4', weight: 9 },
    { name: 'Bici 5', weight: 10},
];

// Variabile di appoggio

let minWeightBike = bikes[0];

// Ciclo per trovare la bici con il peso minore
for (let i = 1; i < bikes.length; i++) {
    if (bikes[i].weight < minWeightBike.weight) {
      minWeightBike = bikes[i];
    }
}

//stampo in console
console.log('La bici con peso minore è', minWeightBike);