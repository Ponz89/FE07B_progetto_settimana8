// Interfaccia smartphone
interface Smartphone {
    // inserire proprietà interfaccia
    carica: number;
    numeroChiamate: number

    //dichiarare i metodi
    ricarica(unaRicarica: number): void;
    chiamata(minutiDurata: number): void;
    numero404(): number;
    getNumeroChiamate(): number;
    azzeraChiamate(): void;
}

// prima classe
class FirstUser implements Smartphone {
    // modificatori di accesso sulle proprietà
    public carica: number;
    public numeroChiamate: number;

    // dichiarazione del costruttore
    constructor(_carica: number, _numeroChiamate: number) {
        this.carica = _carica;
        this.numeroChiamate = _numeroChiamate;
    }
    // implementazione metodo ricarica
    public ricarica(unaRicarica: number): void {
        this.carica += unaRicarica;
    }
    // implementazione metodo chiamata
    public chiamata(minutiDurata: number): void {
        this.carica += minutiDurata * 0.50
        this.numeroChiamate++;
    }
    // implementazione metodo numero404 (return)
    public numero404(): number {
        return this.carica;
    }
    // implementazione metodo getNumeroChiamate (return)
    public getNumeroChiamate(): number {
        return this.numeroChiamate;
    }
    // implementazione metodo azzeraChiamate
    public azzeraChiamate() {
        return this.numeroChiamate = 0;
    }
}

// seconda classe
class SecondUser implements Smartphone {

    public carica: number;
    public numeroChiamate: number;


    constructor(_carica: number, _numeroChiamate: number) {
        this.carica = _carica;
        this.numeroChiamate = _numeroChiamate;
    }

    public ricarica(unaRicarica: number): void {
        this.carica += unaRicarica;
    }

    public chiamata(minutiDurata: number): void {
        this.carica += minutiDurata * 0.50
        this.numeroChiamate++;
    }

    public numero404(): number {
        return this.carica;
    }

    public getNumeroChiamate(): number {
        return this.numeroChiamate;
    }

    public azzeraChiamate() {
        return this.numeroChiamate = 0;
    }
}

// terza classe
class ThirdUser implements Smartphone {

    public carica: number;
    public numeroChiamate: number;


    constructor(_carica: number, _numeroChiamate: number) {
        this.carica = _carica;
        this.numeroChiamate = _numeroChiamate;
    }

    public ricarica(unaRicarica: number): void {
        this.carica += unaRicarica;
    }

    public chiamata(minutiDurata: number): void {
        this.carica += minutiDurata * 0.50
        this.numeroChiamate++;
    }

    public numero404(): number {
        return this.carica;
    }

    public getNumeroChiamate(): number {
        return this.numeroChiamate;
    }

    public azzeraChiamate() {
        return this.numeroChiamate = 0;
    }
}

// Utente 1

let Utente1 = new FirstUser(10, 3);

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

let Utente2 = new SecondUser(20, 7);

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

let Utente3 = new ThirdUser(50, 10);

console.log('--- TERZO UTENTE ---');
console.log('Valore della carica disponibile: ' + Utente3.numero404());
console.log('Numero chiamate: ' + Utente3.getNumeroChiamate());
Utente1.ricarica(10);
Utente1.chiamata(5);
console.log('Valore della carica disponibile: ' + Utente3.numero404());
console.log('dopo l\'azzeramento delle chiamate:');
console.log('Numero chiamate: ' + Utente3.azzeraChiamate());
console.log('--------------------');