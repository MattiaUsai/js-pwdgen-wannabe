// variabili
const userName = prompt("Inserisci il tuo nome");
const userLastname = prompt("Inserisci il tuo cognome");
const userFavoriteColor = prompt("Inserisci il tuo colore preferito");
const userNumber =21;
// variabile per richiamare ID HTML 


let currentElement = document.getElementById("informazioni");
let currentText = currentElement.innerHTML;
// concatenazione stringhe 
currentText = `${currentText} ${userName} ${userLastname} ${userFavoriteColor} ${userNumber}`;

// scrivo nella console
console.log(currentText);

// scrivo nella pagina 
currentElement.innerHTML = currentText;