let kezdoosszeg: number = 300000;
let napokSzama: number = 84;
let szazalek: number = 1.06;


let eredmeny: number = 0;
eredmeny = kezdoosszeg;

for (let i = 0; i < napokSzama; i++) {
    eredmeny = eredmeny * szazalek
    console.log (eredmeny)
}
