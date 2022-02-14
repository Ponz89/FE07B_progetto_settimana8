// prima classe
var FirstUser = /** @class */ (function () {
    // dichiarazione del costruttore
    function FirstUser(_carica, _numeroChiamate) {
        this.carica = _carica;
        this.numeroChiamate = _numeroChiamate;
    }
    // implementazione metodo ricarica
    FirstUser.prototype.ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
    };
    // implementazione metodo chiamata
    FirstUser.prototype.chiamata = function (minutiDurata) {
        this.carica += minutiDurata * 0.50;
        this.numeroChiamate++;
    };
    // implementazione metodo numero404 (return)
    FirstUser.prototype.numero404 = function () {
        return this.carica;
    };
    // implementazione metodo getNumeroChiamate (return)
    FirstUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    // implementazione metodo azzeraChiamate
    FirstUser.prototype.azzeraChiamate = function () {
        return this.numeroChiamate = 0;
    };
    return FirstUser;
}());
// seconda classe
var SecondUser = /** @class */ (function () {
    function SecondUser(_carica, _numeroChiamate) {
        this.carica = _carica;
        this.numeroChiamate = _numeroChiamate;
    }
    SecondUser.prototype.ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
    };
    SecondUser.prototype.chiamata = function (minutiDurata) {
        this.carica += minutiDurata * 0.50;
        this.numeroChiamate++;
    };
    SecondUser.prototype.numero404 = function () {
        return this.carica;
    };
    SecondUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    SecondUser.prototype.azzeraChiamate = function () {
        return this.numeroChiamate = 0;
    };
    return SecondUser;
}());
// terza classe
var ThirdUser = /** @class */ (function () {
    function ThirdUser(_carica, _numeroChiamate) {
        this.carica = _carica;
        this.numeroChiamate = _numeroChiamate;
    }
    ThirdUser.prototype.ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
    };
    ThirdUser.prototype.chiamata = function (minutiDurata) {
        this.carica += minutiDurata * 0.50;
        this.numeroChiamate++;
    };
    ThirdUser.prototype.numero404 = function () {
        return this.carica;
    };
    ThirdUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    ThirdUser.prototype.azzeraChiamate = function () {
        return this.numeroChiamate = 0;
    };
    return ThirdUser;
}());
// Utente 1
var Utente1 = new FirstUser(10, 3);
console.log('--- PRIMO UTENTE ---');
console.log('Valore della carica disponibile: ' + Utente1.numero404());
console.log('Numero chiamate: ' + Utente1.getNumeroChiamate());
Utente1.ricarica(10);
Utente1.chiamata(5);
console.log('Valore della carica disponibile: ' + Utente1.numero404());
console.log('dopo l\'azzeramento delle chiamate:');
console.log('Numero chiamate: ' + Utente1.azzeraChiamate());
console.log('--------------------');
// Utente 2
var Utente2 = new SecondUser(20, 7);
console.log('--- SECONDO UTENTE ---');
console.log('Valore della carica disponibile: ' + Utente2.numero404());
console.log('Numero chiamate: ' + Utente2.getNumeroChiamate());
Utente1.ricarica(10);
Utente1.chiamata(7);
console.log('Valore della carica disponibile: ' + Utente2.numero404());
console.log('dopo l\'azzeramento delle chiamate:');
console.log('Numero chiamate: ' + Utente2.azzeraChiamate());
console.log('--------------------');
// Utente 2
var Utente3 = new ThirdUser(50, 10);
console.log('--- TERZO UTENTE ---');
console.log('Valore della carica disponibile: ' + Utente3.numero404());
console.log('Numero chiamate: ' + Utente3.getNumeroChiamate());
Utente1.ricarica(10);
Utente1.chiamata(5);
console.log('Valore della carica disponibile: ' + Utente3.numero404());
console.log('dopo l\'azzeramento delle chiamate:');
console.log('Numero chiamate: ' + Utente3.azzeraChiamate());
console.log('--------------------');
