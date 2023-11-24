var ricaricaInput = document.getElementById("ricarica");
var ricaricaForm = document.getElementById("ricaricaForm");
var chiamataInput = document.getElementById("chiamata");
var chiamataForm = document.getElementById("chiamataForm");
var creditoResiduo = document.getElementById("creditoresiduo");
var chiamatePar = document.getElementById("chiamate");
var User = /** @class */ (function () {
    function User(_carica, _numeroChiamate) {
        this.carica = _carica;
        this.numeroChiamate = _numeroChiamate;
    }
    User.prototype.ricarica = function (importo) {
        return this.carica += importo;
    };
    User.prototype.chiamata = function (minutiDurata) {
        this.numeroChiamate += 1;
        return this.carica = this.carica - (minutiDurata * 0.20);
    };
    User.prototype.numero404 = function () {
        return this.carica;
    };
    User.prototype.getNumberChiamate = function () {
        return this.numeroChiamate;
    };
    User.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return User;
}());
var cliente1 = new User(0, 0);
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
ricaricaForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var importoStr = ricaricaInput.value;
    var importo = parseInt(importoStr);
    cliente1.ricarica(importo);
    creditoResiduo.innerText = cliente1.carica.toString();
    ricaricaInput.value = '';
});
chiamataForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var chiamataStr = chiamataInput.value;
    var minuti = parseInt(chiamataStr);
    cliente1.chiamata(minuti);
    chiamatePar.innerText = cliente1.numeroChiamate.toString();
    creditoResiduo.innerHTML = cliente1.carica.toString();
    chiamataInput.value = '';
});
