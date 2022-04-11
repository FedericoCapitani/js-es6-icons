/* Descrizione:
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array. */

const automobili = [
    {
        marca: 'Fiat',
        modello: 'punto',
        alimentazione: 'benzina'
    },
    {
        marca: 'Fiat',
        modello: '500',
        alimentazione: 'metano'
    },
    {
        marca: 'Fiat',
        modello: 'panda',
        alimentazione: 'elettrico'
    },
    {
        marca: 'Opel',
        modello: 'astra',
        alimentazione: 'metano'
    },
    {
        marca: 'Opel',
        modello: 'Corsa',
        alimentazione: 'benzina'
    },
    {
        marca: 'Opel',
        modello: 'mokka',
        alimentazione: 'gpl'
    },
    {
        marca: 'Citroen',
        modello: 'C3',
        alimentazione: 'diesel'
    },
    {
        marca: 'Citroen',
        modello: 'C1',
        alimentazione: 'elettrico'
    },
    {
        marca: 'Peugeot',
        modello: '208',
        alimentazione: 'gpl'
    },
    {
        marca: 'Peugeot',
        modello: '3008',
        alimentazione: 'diesel'
    }
];

let auto_benzina = []
let auto_diesel = []
let altre_auto = []

automobili.forEach(element => {
    if(element.alimentazione === 'benzina'){
        auto_benzina.push(element)
    } else if(element.alimentazione === 'diesel'){
        auto_diesel.push(element)
    } else {
        altre_auto.push(element)
    }
});

console.log(auto_benzina);
console.log(auto_diesel);
console.log(altre_auto);