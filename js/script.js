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

// chiamo la funzione per inserire oggetto
// con target il mio array di oggetti
//insertStudent(arrStudents);

// con questo ciclo for..of + for..in stampo a 
// video tutti i valori di ogni singolo 
// oggetto nell'array
/* for (var student of arrStudents) {
  for (var key in student) {
    console.log(student[key]);
  }
  console.log('--------------');
}

console.log("===============\nsecondo ciclo for\n==============="); */



// con questo ciclo for..of stampo a video
// in forma umana i valori di ogni singolo
// oggetto nell'array.
for (var i = 0; i < arrStudents.length; i++) {
  var htmlName = '<li>Nome: ' + student['firstName'] + '</li><br>';
  var htmlSurname = '<li>Cognome: ' + student['lastName'] + '</li><br>';
  var htmlAge = '<li>Anni: ' + student['age'] + '</li><br>';
  var studentList = document.getElementById('studentList');
  studentList.innerHTML += studentList + htmlName + htmlSurname + htmlAge;
  /* console.log("Nome: " + student['firstName']);
  console.log("Cognome: " + student['lastName']);
  console.log("Anni: " + student['age']);
  console.log('--------------'); */
}

 // funzione per inserire uno studente nell'array.
 // questa funzione pusha un oggetto le cui proprietà
 // sono definite dai prompt inseriti dall'utente.
function insertStudent(target) {
  target.push(
    {
      firstName: prompt("Inserisci il tuo nome:"),
      lastName: prompt("Inserisci il tuo cognome:"),
      age: parseInt(prompt("Inserisci la tua età:"))
    }
  );
}