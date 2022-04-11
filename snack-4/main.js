/* Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età. */
const persone = 
    [
        {
            nome: 'Paolo',
            congome: 'Rossi',
            eta: '28'
        },
        {
            nome: 'Maria',
            congome: 'Violino',
            eta: '15'
        },
        {
            nome: 'Francesca',
            congome: 'Pigola',
            eta: '36'
        },
        {
            nome: 'Gianluca',
            congome: 'Meloni',
            eta: '61'
        },
        {
            nome: 'Aldo',
            congome: 'Monti',
            eta: '11'
        }
    ]

let idoneita = []

persone.forEach((element) => {
    if(element.eta >= 18){
        idoneita.push(`${element.nome} ${element.congome} è idoneo alla guida`)
    } else {
        idoneita.push(`${element.nome} ${element.congome} non è idoneo alla guida`)
    }
})

console.log(idoneita);