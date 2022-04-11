/* A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola. */

// array di partenza
const parole = ['ciao', 'Marco', 'CANE', 'Roberto', 'poliziotto', 'TORTA']

// array parole formattate
let parole_formattate = []
let parole_capitalizate = []

parole.forEach((word) =>{
    parole_formattate.push(word.toLowerCase())
})
parole_formattate.forEach((word) => {
    parole_capitalizate.push(word.charAt(0).toUpperCase() + word.substr(1))
})
console.log(parole_capitalizate);