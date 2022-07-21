function zodiaco(dia, mes): string {
  let signo: string = "";

  if ((dia >= 21 && mes == 3) || (dia <= 20 && mes == 4)) {
    signo = "Aries";
  }
  if ((dia >= 24 && mes == 9) || (dia <= 23 && mes == 10)) {
    signo = "Libra";
  }
  if ((dia >= 21 && mes == 4) || (dia <= 21 && mes == 5)) {
    signo = "Tauro";
  }
  if ((dia >= 24 && mes == 10) || (dia <= 22 && mes == 11)) {
    signo = "Escorpio";
  }
  if ((dia >= 22 && mes == 5) || (dia <= 21 && mes == 6)) {
    signo = "Géminis";
  }
  if ((dia >= 23 && mes == 11) || (dia <= 21 && mes == 12)) {
    signo = "Sagitario";
  }
  if ((dia >= 21 && mes == 6) || (dia <= 23 && mes == 7)) {
    signo = "Cáncer";
  }
  if ((dia >= 22 && mes == 12) || (dia <= 20 && mes == 1)) {
    signo = "Capricornio";
  }
  if ((dia >= 24 && mes == 7) || (dia <= 23 && mes == 8)) {
    signo = "Leo";
  }
  if ((dia >= 21 && mes == 1) || (dia <= 19 && mes == 2)) {
    signo = "Acuario";
  }
  if ((dia >= 24 && mes == 8) || (dia <= 23 && mes == 9)) {
    signo = "virgo";
  }
  if ((dia >= 20 && mes == 2) || (dia <= 20 && mes == 3)) {
    signo = "Piscis";
  }

  return signo;
}

//////////////////////////////////////////////////////////////////

let america: string[] = ["eeuu", "mexico", "ecuador", "chile", "canada"];
let europa: string[] = ["españa", "suecia", "suiza", "italia", "rumania"];
let africa: string[] = ["marruecos", "nigeria", "senegal", "etipia", "kenia"];
let asia: string[] = ["china", "japon", "indonesia", "tailandia", "vietnam"];
let oceania: string[] = [
  "australia",
  "nueva zelanda",
  "fiyi",
  "samoa",
  "palaos",
];

function continente(pais: string) {
  let salida: string = "Estas en: ";

  if (america.includes(pais)) {
    salida.concat("América");
  } else if (europa.includes(pais)) {
    salida.concat("Europa");
  } else if (africa.includes(pais)) {
    salida.concat("África");
  } else if (asia.includes(pais)) {
    salida.concat("Asia");
  } else if (oceania.includes(pais)) {
    salida.concat("Oceanía");
  } else {
    salida = "No se donde estas.";
  }

  console.log(salida);
}

//////////////////////////////////////////////////////////////////

export function parOImpar(num: number): void {
  if (num % 2 === 0) {
    console.log("El numero es par");
  } else {
    console.log("El numero es par");
  }
}

//////////////////////////////////////////////////////////////////