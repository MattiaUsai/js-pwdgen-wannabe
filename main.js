// variabili
const userName = prompt("Inserisci il tuo nome");
const userLastname = prompt("Inserisci il tuo cognome");
const userFavoriteColor = prompt("Inserisci il tuo colore preferito");
// variabile che contiene un generatore di numeri casuali tra 1 e 100 
const userNumber = Math.round(Math.random() * 100)
// variabile per richiamare ID HTML 


let currentElement = document.getElementById("informazioni");
let currentText = currentElement.innerHTML;
// concatenazione stringhe 
currentText = `${currentText}${userName}${userLastname}${userFavoriteColor}${userNumber}`;

// scrivo nella console
console.log(currentText);

// scrivo nella pagina 
currentElement.innerHTML = currentText;