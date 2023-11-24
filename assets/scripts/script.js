var ricaricaInput = document.getElementById("ricarica");
var ricaricaForm = document.getElementById("ricaricaForm");
var chiamataInput = document.getElementById("chiamata");
var chiamataForm = document.getElementById("chiamataForm");
var creditoResiduo = document.getElementById("creditoresiduo");
var chiamatePar = document.getElementById("chiamate");
var ricaricaInput2 = document.getElementById("ricarica2");
var ricaricaForm2 = document.getElementById("ricaricaForm2");
var chiamataInput2 = document.getElementById("chiamata2");
var chiamataForm2 = document.getElementById("chiamataForm2");
var creditoResiduo2 = document.getElementById("creditoresiduo2");
var chiamatePar2 = document.getElementById("chiamate2");
var ricaricaInput3 = document.getElementById("ricarica3");
var ricaricaForm3 = document.getElementById("ricaricaForm3");
var chiamataInput3 = document.getElementById("chiamata3");
var chiamataForm3 = document.getElementById("chiamataForm3");
var creditoResiduo3 = document.getElementById("creditoresiduo3");
var chiamatePar3 = document.getElementById("chiamate3");
var User = /** @class */ (function () {
    function User(_carica, _numeroChiamate, _id) {
        this.carica = _carica;
        this.numeroChiamate = _numeroChiamate;
        this.id = _id;
    }
    User.prototype.ricarica = function (importo) {
        return this.carica += importo;
    };
    User.prototype.chiamata = function (minutiDurata) {
        this.numeroChiamate += 1;
        return this.carica = parseFloat((this.carica - minutiDurata * 0.20).toFixed(2));
    };
    User.prototype.numero404 = function () {
        return this.carica;
    };
    User.prototype.getNumberChiamate = function () {
        return this.numeroChiamate;
    };
    User.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
        if (this.id === 1) {
            chiamatePar.innerText = '0';
        }
        else if (this.id === 2) {
            chiamatePar2.innerText = '0';
        }
        else if (this.id === 3) {
            chiamatePar3.innerText = '0';
        }
    };
    return User;
}());
var cliente1 = new User(0, 0, 1);
var cliente2 = new User(0, 0, 2);
var cliente3 = new User(0, 0, 3);
ricaricaForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var importoStr = ricaricaInput.value;
    var importo = parseInt(importoStr);
    cliente1.ricarica(importo);
    creditoResiduo.innerText = cliente1.carica.toString() + "€";
    ricaricaInput.value = '';
});
chiamataForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var chiamataStr = chiamataInput.value;
    var minuti = parseInt(chiamataStr);
    cliente1.chiamata(minuti);
    chiamatePar.innerText = cliente1.numeroChiamate.toString();
    creditoResiduo.innerHTML = cliente1.carica.toString() + "€";
    chiamataInput.value = '';
});
ricaricaForm2.addEventListener("submit", function (e) {
    e.preventDefault();
    var importoStr = ricaricaInput2.value;
    var importo = parseInt(importoStr);
    cliente2.ricarica(importo);
    creditoResiduo2.innerText = cliente2.carica.toString() + "€";
    ricaricaInput2.value = '';
});
chiamataForm2.addEventListener("submit", function (e) {
    e.preventDefault();
    var chiamataStr = chiamataInput2.value;
    var minuti = parseInt(chiamataStr);
    cliente2.chiamata(minuti);
    chiamatePar2.innerText = cliente2.numeroChiamate.toString();
    creditoResiduo2.innerHTML = cliente2.carica.toString() + "€";
    chiamataInput2.value = '';
});
ricaricaForm3.addEventListener("submit", function (e) {
    e.preventDefault();
    var importoStr = ricaricaInput3.value;
    var importo = parseInt(importoStr);
    cliente3.ricarica(importo);
    creditoResiduo3.innerText = cliente3.carica.toString() + "€";
    ricaricaInput3.value = '';
});
chiamataForm3.addEventListener("submit", function (e) {
    e.preventDefault();
    var chiamataStr = chiamataInput3.value;
    var minuti = parseInt(chiamataStr);
    cliente3.chiamata(minuti);
    chiamatePar3.innerText = cliente3.numeroChiamate.toString();
    creditoResiduo3.innerHTML = cliente3.carica.toString() + "€";
    chiamataInput3.value = '';
});
