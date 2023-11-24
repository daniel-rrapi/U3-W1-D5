const ricaricaInput = document.getElementById("ricarica") as HTMLInputElement
const ricaricaForm = document.getElementById("ricaricaForm") as HTMLFormElement
const chiamataInput = document.getElementById("chiamata") as HTMLInputElement
const chiamataForm = document.getElementById("chiamataForm") as HTMLFormElement
const creditoResiduo = document.getElementById("creditoresiduo") as HTMLParagraphElement
const chiamatePar = document.getElementById("chiamate") as HTMLParagraphElement

const ricaricaInput2 = document.getElementById("ricarica2") as HTMLInputElement
const ricaricaForm2 = document.getElementById("ricaricaForm2") as HTMLFormElement
const chiamataInput2 = document.getElementById("chiamata2") as HTMLInputElement
const chiamataForm2 = document.getElementById("chiamataForm2") as HTMLFormElement
const creditoResiduo2 = document.getElementById("creditoresiduo2") as HTMLParagraphElement
const chiamatePar2 = document.getElementById("chiamate2") as HTMLParagraphElement

const ricaricaInput3 = document.getElementById("ricarica3") as HTMLInputElement
const ricaricaForm3 = document.getElementById("ricaricaForm3") as HTMLFormElement
const chiamataInput3 = document.getElementById("chiamata3") as HTMLInputElement
const chiamataForm3 = document.getElementById("chiamataForm3") as HTMLFormElement
const creditoResiduo3 = document.getElementById("creditoresiduo3") as HTMLParagraphElement
const chiamatePar3 = document.getElementById("chiamate3") as HTMLParagraphElement

interface Smartphone {
    carica: number;
    numeroChiamate: number;
    id: number;

}

class User implements Smartphone {
    carica: number;
    numeroChiamate: number;
    id: number;
    constructor(_carica: number, _numeroChiamate: number, _id: number){
        this.carica = _carica;
        this.numeroChiamate = _numeroChiamate
        this.id = _id
    }
    ricarica(importo: number): number {
        return this.carica += importo
    }
    chiamata(minutiDurata: number): number {
        this.numeroChiamate += 1;
        return this.carica = parseFloat((this.carica - minutiDurata * 0.20).toFixed(2))
    }
    numero404() {
        return this.carica
    }
    getNumberChiamate(): number {
        return this.numeroChiamate
    }
    azzeraChiamate(){
        this.numeroChiamate = 0
        if(this.id === 1){
            chiamatePar.innerText = '0'
        } else if (this.id === 2) {
            chiamatePar2.innerText = '0'
        } else if (this.id === 3) {
            chiamatePar3.innerText = '0'
        }
        
    }

}

let cliente1 = new User(0, 0, 1)
let cliente2 = new User(0, 0, 2)
let cliente3 = new User(0, 0, 3)


ricaricaForm.addEventListener("submit", (e)=>{
    e.preventDefault();

    const importoStr = ricaricaInput.value;
    const importo = parseInt(importoStr)
    cliente1.ricarica(importo)
    creditoResiduo.innerText = cliente1.carica.toString() + "€"
    ricaricaInput.value = ''

    
})

chiamataForm.addEventListener("submit", (e)=> {
    e.preventDefault()

    const chiamataStr = chiamataInput.value;
    const minuti = parseInt(chiamataStr);
    cliente1.chiamata(minuti)
    chiamatePar.innerText = cliente1.numeroChiamate.toString()
    creditoResiduo.innerHTML = cliente1.carica.toString() + "€"
    chiamataInput.value = ''

} )

ricaricaForm2.addEventListener("submit", (e)=>{
    e.preventDefault();

    const importoStr = ricaricaInput2.value;
    const importo = parseInt(importoStr)
    cliente2.ricarica(importo)
    creditoResiduo2.innerText = cliente2.carica.toString() + "€"
    ricaricaInput2.value = ''

    
})

chiamataForm2.addEventListener("submit", (e)=> {
    e.preventDefault()

    const chiamataStr = chiamataInput2.value;
    const minuti = parseInt(chiamataStr);
    cliente2.chiamata(minuti)
    chiamatePar2.innerText = cliente2.numeroChiamate.toString()
    creditoResiduo2.innerHTML = cliente2.carica.toString() + "€"
    chiamataInput2.value = ''

} )

ricaricaForm3.addEventListener("submit", (e)=>{
    e.preventDefault();

    const importoStr = ricaricaInput3.value;
    const importo = parseInt(importoStr)
    cliente3.ricarica(importo)
    creditoResiduo3.innerText = cliente3.carica.toString() + "€"
    ricaricaInput3.value = ''

    
})

chiamataForm3.addEventListener("submit", (e)=> {
    e.preventDefault()

    const chiamataStr = chiamataInput3.value;
    const minuti = parseInt(chiamataStr);
    cliente3.chiamata(minuti)
    chiamatePar3.innerText = cliente3.numeroChiamate.toString()
    creditoResiduo3.innerHTML = cliente3.carica.toString() + "€"
    chiamataInput3.value = ''

} )


