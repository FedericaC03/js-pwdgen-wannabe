// INSERISCO LA VARIABILE PER IL NOME
var nome = prompt('Scrivi il tuo nome');

// INSERISCO LA VARIABILE PER IL COGNOME
var cognome = prompt('Scrivi il tuo cognome');

// INSERISCO LA VARIABILE PER IL COLORE
var colore = prompt('Scrivi il tuo colore preferito');

//PASSWORD GENERATOR

var password = nome + cognome + colore + "19";
document.getElementById('password').innerHTML = password;

alert('ciao Eli, ciao Enri')
