console.log('SNACK 2');

// lista studenti

const students = [

    { 
        id: 213,
        name: 'Marco della Rovere',
        grades: 78,
    },
    { 
        id: 110, 
        name: 'Paola Cortellessa', 
        grades: 96 
    },
    { 
        id: 250, 
        name: 'Andrea Mantegna', 
        grades: 48 
    },
    { 
        id: 145, 
        name: 'Gaia Borromini', 
        grades: 74 
    },
    { 
        id: 196, 
        name: 'Luigi Grimaldello', 
        grades: 68 
    },
    { 
        id: 102, 
        name: 'Piero della Francesca', 
        grades: 50 
    },
    { 
        id: 120, 
        name: 'Frances of Polenta', 
        grades: 84 
    },
  ];
 
// studenti con grado maggiore di 70
const studentAbove70 = students.filter(student => student.grades > 70);
console.log('Students with grades above 70:', studentAbove70);