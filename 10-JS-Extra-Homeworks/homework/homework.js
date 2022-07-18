// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí:

  let array = [];
  for (let clave in objeto) {
    array.push([clave, objeto[clave]]);
  }
  return array;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí:

  let objetoCantidadCaracteres = {};
  for (let i = 0; i < string.length; i++) {
    let caracterActual = string[i];
    if (caracterActual in objetoCantidadCaracteres) {
      objetoCantidadCaracteres[caracterActual]++;
    }
    else {
      objetoCantidadCaracteres[caracterActual] = 1;
    }
  }

  return objetoCantidadCaracteres;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  let str = s.split("");
  let array = [];
  let array2 = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      array.push(str[i]);
    }
    else {
      array2.push(str[i]);
    }
  }
  return array.join("") + array2.join("");
}

function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  return str.split(" ").map(a => a.split("").reverse().join("")).join(" ");
}


function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí:

  let numero2 = numero.toString();

  if (numero2 === numero2.split("").reverse().join("")) {
    return "Es capicua";
  } else {
    return "No es capicua";
  }
}


function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí:

  let pal = cadena.split("");
  let sinabc = [];
  let conabc = [];

  for (i = 0; i < pal.length; i++) {
    if (pal[i] === "a" || pal[i] === "b" || pal[i] === "c") {
      conabc.push(pal[i]);
    } else {
      sinabc.push(pal[i]);
    }
  }
  return sinabc.join("");
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  arr.sort(function (a, b) {
    return a.length - b.length;
  });
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí 

  let cant1 = arreglo1.length;
  let cant2 = arreglo2.length;
  let interseccion = [];

  if (cant1 > cant2) {
    for (let i = 0; i < arreglo1.length; i++) {
      for (let j = 0; j < arreglo2.length; j++) {
        if (arreglo1[i] == arreglo2[j]) {
          interseccion.push(arreglo1[i]);
        }
      }
    }
  } else {
    for (let i = 0; i < arreglo2.length; i++) {
      for (let j = 0; j < arreglo1.length; j++) {
        if (arreglo2[i] == arreglo1[j]) {
          interseccion.push(arreglo2[i]);
        }
      }
    }
  }

  return interseccion;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};

