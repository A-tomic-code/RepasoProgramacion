import { parOImpar } from "./repasoIf";

function impares(max: number): void {
  for (let i = 1; i < max; i + 2) {
    console.log(i);
  }
}

//////////////////////////////////////////////////////////////////

function invertir(arr: any[]): any[] {
  let inverso: any[] = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    inverso.push(arr[i]);
  }

  return inverso;
}

//////////////////////////////////////////////////////////////////

let arcoiris: string[] = [
  "rojo",
  "naranja",
  "amarillo",
  "azul",
  "añil",
  "violeta",
];

function esArcoiris(colores: string[]): void {
  for (let i = 0; colores.length; i++) {
    if (arcoiris.includes(colores[i])) {
      console.log(colores[i] + " Es un color del arcoiris ");
    } else {
      console.log(colores[i] + " No es un color del arcoiris ");
    }
  }
}

//////////////////////////////////////////////////////////////////

export function sumaLongitudPalabras(entrada: string[]): number {
  let resultado: number = 0;

  for (let i = 0; i < entrada.length; i++) {
    resultado += entrada[i].length;
  }

  return resultado;
}

//////////////////////////////////////////////////////////////////

let arr1: string[] = ["Casa", "Coche", "Ciudad", "Cesta"];

let arr2: string[] = [
  "Barco",
  "Baca",
  "Bicicleta",
  "Balon",
  "Bisiesto",
  "Brasil",
];

let arr3: string[] = ["Venezuela", "Veneno", "Voltaje"];

let todos: string[][] = [arr1, arr2, arr3];

for (let i = 0; i < todos.length; i++) {
  let totalCaracteres = sumaLongitudPalabras(todos[i]);

  console.log("el array " + todos[i] + "tiene:");
  console.log(totalCaracteres + "caracteres --> " + parOImpar(totalCaracteres));
}
