class Covek {
    constructor (ime,prezime,godinaRodjenja){
        this.ime = ime;
        this.prezime = prezime;
        this.godinaRodjenja = godinaRodjenja;
    }
}

let aca = new Covek ('Aleksandar', 'Alavanja', 1989);
console.log(aca);

class Student extends Covek {
    constructor(ime, prezime, godinaRodjenja, godinaStudija, prosek){
        super(ime,prezime, godinaRodjenja)
        this.godinaStudija = godinaStudija;
        this.prosek = prosek;
    }
}
let mladen = new Student('Mladen', 'Petric', 1989,3,7);
console.log(mladen);

class StudentOsStudija extends Student {
    constructor(ime,prezime,godinaRodjenja,godinaStudija,prosek,smerOs) {
        super(ime,prezime,godinaRodjenja,godinaStudija,prosek)
        this.smerOs = smerOs
    }
}

let petar = new StudentOsStudija ('Petar', 'Petrovic', 1987,4,8.1,'Ekonomija')
console.log(petar);


class StudentMsStudija extends Student {
    constructor(ime,prezime,godinaRodjenja,godinaStudija,prosek, smerMs){
        super(ime,prezime,godinaRodjenja,godinaStudija,prosek)
        this.smerMs = smerMs;
    }
}

let milos = new StudentMsStudija ('Milos', 'Milosevic', 1990, 1,9,'Bankarstvo')
console.log(milos);

class Zaposleni extends Covek {
    constructor(ime,prezime,godinaRodjenja,godinaZaposlenja,plata){
        super(ime,prezime,godinaRodjenja)
        this.godinaZaposlenja = godinaZaposlenja;
        this.plata = plata;
    }
}
let anja = new Zaposleni ('Anja', 'Cakic', 1993, 2020, 80000)
console.log(anja);

class Nastavnik extends Zaposleni {
    constructor (ime,prezime, godinaRodjenja,godinaZaposlenja,plata,omiljeniPredmet, listaPredmeta){
        super(ime,prezime,godinaRodjenja,godinaZaposlenja,plata);
        this.omiljeniPredmet = omiljeniPredmet;
        this.listaPredmeta = listaPredmeta;
    }
}

let ivan = new Nastavnik ('Ivan','Ivanovic',1960,1985,70000, 'Istorija', ['Engleski', 'Srpski','Francuski'])
console.log(ivan);

class Profesor extends Nastavnik{
    constructor(ime,prezime,godinaRodjenja,godinaZaposlenja,plata,omiljeniPredmet,listaPredmeta,titula){
        super(ime,prezime,godinaRodjenja,godinaZaposlenja,plata,omiljeniPredmet,listaPredmeta);
        this.titula = titula;
    }
}
let milica = new Profesor ('Milica', 'Alavanja', 1975, 2005, 100000,'Engleski',['Engeski', 'Srpski', ], 'vanredni')
console.log(milica);

class Asistent extends Nastavnik {
    constructor(ime,prezime,godinaRodjenja,godinaZaposlenja,plata, omiljeniPredmet,listaPredmeta,smer){
        super(ime,prezime,godinaRodjenja,godinaZaposlenja,plata, omiljeniPredmet,listaPredmeta);
        this.smer = smer;
    }
}

let radoslav = new Asistent ('Radoslav','Markovic', 1986, 2012,60000,'Fizika',['Fizika', 'Matematika'], 'opsti');
console.log(radoslav);

class Sluzbenik extends Zaposleni{
    constructor(ime,prezime,godinaRodjenja,godinaZaposlenja,plata,odsek){
        super(ime,prezime,godinaRodjenja,godinaZaposlenja,plata);
        this.odsek = odsek;

    }
}

let milena = new Sluzbenik ('Milena', 'Milenkovic', 1960, 2003, 45000, 'Osnovni');
console.log(milena);