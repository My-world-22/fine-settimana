// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer 
(il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di
 calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il
 valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la
 frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
}

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
}

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
}

const prices = [34, 5, 2]//prezzi
const shippingCost = 50//spese spedizione
let utenteCheEffettuaLAcquisto = amy //cambia il valore qui per provare se il tuo algoritmo funziona!
let sommaCarrello = 0
//..................................................1
for (let i = 0; i < prices.length; i++) {

  const prezzo = prices[i]
  sommaCarrello += prezzo//somma prezzi carrello
} if (marco.isAmbassador === true) {
  sommaCarrello = (sommaCarrello * 30) / 100
} if (sommaCarrello <= 100) {
  sommaCarrello += shippingCost
  sommaCarrello = sommaCarrello
  console.log(sommaCarrello)
}

//...................................................2

let sommacaRrello = 0
for (let i = 0; i < prices.length; i++) {
  const prezzo = prices[i]
  sommacaRrello += prezzo//somma prezzi carrello
} if (paul.isAmbassador === true) {
  sommacaRrello = (sommacaRrello * 30) / 100
  sommacaRrello += shippingCost
  console.log(sommacaRrello)
} if (paul.isAmbassador === false) {
  sommacaRrello <= 100
  sommacaRrello += shippingCost
  sommacaRrello = sommacaRrello
  console.log(sommacaRrello)
}
//.................................
let totCarrello = 0
const prIce = [82, 33, 22]
for (let i = 0; i < prIce.length; i++) {
  const prezzo = prIce[i]
  totCarrello += prezzo//somma prezzi carrello
} if (amy.isAmbassador === true) {
  totCarrello = (totCarrello * 30) / 100
  totCarrello += shippingCost
  console.log(totCarrello)
} if (amy.isAmbassador === false) {
  totCarrello <= 100
  totCarrello += shippingCost
  totCarrello = totCarrello
  console.log(totCarrello)
}
//........................................

const tuttiUtenti = []
tuttiUtenti.push(marco, paul, amy)
console.log(tuttiUtenti)
for (let i = 0; i < tuttiUtenti.length; i++) {
    const utente = tuttiUtenti[i]
    let stringaBase = `${utente.name} ${utente.lastName} `
    if (!utente.isAmbassador) {
        stringaBase += "NON "
    }
    stringaBase += "e' un ambassador"
    console.log(stringaBase)
}
//...................................................

let soloAmbassador = []
for (let i = 0; i < tuttiUtenti.length; i++) {
    const utente = tuttiUtenti[i];
    if (utente.isAmbassador) {
        soloAmbassador.push(utente)
    }
}
console.log(soloAmbassador);


