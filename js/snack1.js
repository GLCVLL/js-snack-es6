// Elenco degli invitati fornito da Il grande Gatsby
const vipGuests = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];

// nome del tavolo
const nomeTavolo = 'tavolo VIP';

// Creazione di un elenco segnaposto utilizzando la funzione map()
const vipGuestsList = vipGuests.map((guest, index) => {

    // Calcolo del numero di posto aggiungendo 1 all'indice
    const postoTavolo = index + 1;

    // Creazione di un oggetto JavaScript per ogni ospite
    return {
        nomeTavolo,
        guestName: guest,
        numeroPosto: postoTavolo,
    };
});

// Stampa l'elenco dei segnaposto nella console
console.log(vipGuestsList);