function contienePares(entrada: number[]): boolean {
  let found: boolean = false;

  let i = 0;
  while (i < entrada.length && !found) {
    if (entrada[i] % 2 == 0) {
      found = true;
    }
    i++;
  }

  // resultado = entrada.find(num => num % 2 === 0);
  // return resultado != undefined

  return found;
}

//////////////////////////////////////////////////////////////////

function todosEmpiezanConM(entrada: string[]): boolean {
  let found: boolean = false;

  let i = 0;
  while (i < entrada.length && !found) {
    if (entrada[i].charAt(0).toLowerCase() == "m") {
      found = true;
    }
    i++;
  }

  return found;
  // return entrada.every(nombre => nombre.charAt(0).toLowerCase() == 'm')
}

//////////////////////////////////////////////////////////////////