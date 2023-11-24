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
var cliente1 = new User(10, 0);
cliente1.ricarica(50);
console.log(cliente1.carica);
cliente1.chiamata(10);
console.log(cliente1.carica);
console.log(cliente1.numeroChiamate);
cliente1.chiamata(10);
cliente1.chiamata(10);
cliente1.chiamata(10);
console.log(cliente1.carica);
console.log(cliente1.numeroChiamate);
cliente1.azzeraChiamate();
console.log(cliente1.numeroChiamate);
