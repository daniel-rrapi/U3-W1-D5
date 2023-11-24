const ricaricaInput = document.getElementById("ricarica") as HTMLInputElement
const ricaricaForm = document.getElementById("ricaricaForm") as HTMLFormElement
const chiamataInput = document.getElementById("chiamata") as HTMLInputElement
const chiamataForm = document.getElementById("chiamataForm") as HTMLFormElement
const creditoResiduo = document.getElementById("creditoresiduo") as HTMLParagraphElement
const chiamatePar = document.getElementById("chiamate") as HTMLParagraphElement
interface Smartphone {
    carica: number;
    numeroChiamate: number;

}

class User implements Smartphone {
    carica: number;
    numeroChiamate: number;
    constructor(_carica: number, _numeroChiamate: number){
        this.carica = _carica;
        this.numeroChiamate = _numeroChiamate
    }
    ricarica(importo: number): number {
        return this.carica += importo
    }
    chiamata(minutiDurata: number): number {
        this.numeroChiamate += 1;
        return this.carica = this.carica - (minutiDurata * 0.20)
    }
    numero404(): number {
        return this.carica
    }
    getNumberChiamate(): number {
        return this.numeroChiamate
    }
    azzeraChiamate(){
        this.numeroChiamate = 0
    }

}

let cliente1 = new User(0, 0)
// cliente1.ricarica(50)
// console.log(cliente1.carica)
// cliente1.chiamata(10)
// console.log(cliente1.carica)
// console.log(cliente1.numeroChiamate)
// cliente1.chiamata(10)
// cliente1.chiamata(10)
// cliente1.chiamata(10)
// console.log(cliente1.carica)
// console.log(cliente1.numeroChiamate)
// cliente1.azzeraChiamate()
// console.log(cliente1.numeroChiamate)

ricaricaForm.addEventListener("submit", (e)=>{
    e.preventDefault();

    const importoStr = ricaricaInput.value;
    const importo = parseInt(importoStr)
    cliente1.ricarica(importo)
    creditoResiduo.innerText = cliente1.carica.toString()
    ricaricaInput.value = ''

    
})

chiamataForm.addEventListener("submit", (e)=> {
    e.preventDefault()

    const chiamataStr = chiamataInput.value;
    const minuti = parseInt(chiamataStr);
    cliente1.chiamata(minuti)
    chiamatePar.innerText = cliente1.numeroChiamate.toString()
    creditoResiduo.innerHTML = cliente1.carica.toString()
    chiamataInput.value = ''

} )

