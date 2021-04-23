// creo oggetto studente
var objStudent = {
  firstName: 'Lorenzo',
  lastName: 'Tadè',
  age: 28
};
// ciclo nell'oggetto per stampare le proprietà
// e i valori dell'oggetto creato
for (var key in objStudent) {
  console.log("Proprietà: " + key + " --- Valore: " + objStudent[key]);
}
console.log('--------------');

// creo un array di oggetti
var arrStudents = [
  {
    firstName: 'Vittorio Emanuele II',
    lastName: 'Savoia',
    age: 21
  },
  {
    firstName: 'Umberto I',
    lastName: 'Savoia',
    age: 32
  },
  {
    firstName: 'Carlo Alberto II',
    lastName: 'Savoia',
    age: 56
  },
  {
    firstName: 'Vittorio Amedeo III',
    lastName: 'Savoia',
    age: 44
  }
];

// con questo ciclo for..of + for..in stampo a 
// video tutti i valori di ogni singolo 
// oggetto nell'array
for (var student of arrStudents) {
  for (var key in student) {
    console.log(student[key]);
  }
  console.log('--------------');
}

console.log("===============\nsecondo ciclo for\n===============");

// chiamo la funzione per stampare l'array al
// caricamento della pagina
printArray();

// metto un event listener al bottone #add che
// richiama una funzione per chiedere all'utente
// dei dati pushando il tutto nell'array.
// Successivamente richiama la funzione printArray()
// per ristampare l'array aggiornato col push
$(document).on('click', '#add', function(){
  arrStudents.push(
    {
      firstName: prompt("Inserisci il tuo nome:"),
      lastName: prompt("Inserisci il tuo cognome:"),
      age: parseInt(prompt("Inserisci la tua età:"))
    }
  );
  printNew();
});


 // funzione per stampare in console e in html l'array.
function printArray() {
  // con questo ciclo for..of stampo a video
  // in forma umana i valori di ogni singolo
  // oggetto nell'array.
  for (var student of arrStudents) {
    // stampa in html
    var htmlMsg = '<li><strong>Nome:</strong> ' + student['firstName'] + '<br><strong>Cognome:</strong> ' + student['lastName'] + '<br><strong>Anni:</strong> ' + student['age'] + '</li>';
    var studentList = document.getElementById('studentList');
    studentList.innerHTML += htmlMsg;

    // stampa a console
    console.log("Nome: " + student['firstName']);
    console.log("Cognome: " + student['lastName']);
    console.log("Anni: " + student['age']);
    console.log('--------------');
  }
}

function printNew() {
  var limit = arrStudents.length;
  for (var i = limit; i <= arrStudents[limit]; i++) {
    var htmlMsg = '<li><strong>Nome:</strong> ' + student['firstName'] + '<br><strong>Cognome:</strong> ' + student['lastName'] + '<br><strong>Anni:</strong> ' + student['age'] + '</li>';
    var studentList = document.getElementById('studentList');
    studentList.innerHTML += htmlMsg;
  }
}