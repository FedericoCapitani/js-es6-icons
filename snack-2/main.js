/* A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola. */

// array di partenza
const parole = ['ciao', 'Marco', 'CANE', 'Roberto', 'poliziotto', 'TORTA']

// array parole formattate
let parole_capitalizate = []

// funzione per capitalizzare solo la prima lettera delle parole
function capitalize_first_letter(array) {
    let parole_formattate = []
    array.forEach((word) =>{
        parole_formattate.push(word.charAt(0).toUpperCase() + word.substr(1).toLowerCase())
    })
    return parole_formattate
}

parole_capitalizate = capitalize_first_letter(parole);
console.log(parole_capitalizate);