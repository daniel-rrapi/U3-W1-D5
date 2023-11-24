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

let cliente1 = new User(10, 0)
cliente1.ricarica(50)
console.log(cliente1.carica)
cliente1.chiamata(10)
console.log(cliente1.carica)
console.log(cliente1.numeroChiamate)
cliente1.chiamata(10)
cliente1.chiamata(10)
cliente1.chiamata(10)
console.log(cliente1.carica)
console.log(cliente1.numeroChiamate)
cliente1.azzeraChiamate()
console.log(cliente1.numeroChiamate)

