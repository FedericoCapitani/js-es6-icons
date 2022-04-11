/* Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe. Crea un nuovo array con la lista dei mammiferi.*/

const animali = 
    [
        { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
        { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
        { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
        { nome: 'mucca', famiglia: 'bovidae', classe: 'mammiferi' },
        { nome: 'balena', famiglia: 'balenidi', classe: 'mammiferi' },
        { nome: 'corvo', famiglia: 'passeriformi', classe: 'uccelli' },
        { nome: 'coccodrillo', famiglia: 'coccodrillidi', classe: 'rettili' },
    ]

let mammiferi = []

mammiferi = animali.filter((element) => {
    return element.classe === 'mammiferi'
})
console.log(mammiferi);