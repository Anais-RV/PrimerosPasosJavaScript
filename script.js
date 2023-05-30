console.log("¡Hola, mundo!");

// Crear variables de diferentes tipos de datos:

var numero = 39;
console.log(numero);
var texto = "Quiero un café!";
console.log(texto);
var booleano = true;
console.log(booleano);


// De las variables declaradas anteriormente, identifica las que son de tipo integer y realiza operaciones
// matemáticas básicas con las variables creadas anteriormente (suma, resta, multiplicación, división).
// Deberás imprimir el resultado por la pantalla del navegador y la consola.

var suma = numero + numero;
console.log(suma);
var resta = numero - 3;
console.log(resta);
var multiplicacion = numero * 5;
console.log(multiplicacion);
var division = numero/2;
console.log(division);


//De las variables declaradas anteriormente, identifica las que son de tipo texto y concatena dichas
//cadenas de texto.Deberás imprimir el resultado por la pantalla del navegador y la consola.

var concatenar = texto + " ¡Cuánto antes!";
console.log(concatenar);

//Crear una función que imprima por la pantalla del navegador y la consola el mensaje "Hola, [nombre]"
//con un parámetro para el nombre.

function saludar(nombre) {
    var mensaje = "Hola, " + nombre;
    console.log(mensaje);
  }
  
  saludar("Anaïs");
  

//Crear función que reciba como parámetros dos números y que devuelva la suma de ellos. Deberás
//imprimir el resultado por la pantalla del navegador y la consola.

function sumar (sumando1, sumando2) {
    var suma = sumando1 + sumando2;
    console.log(suma);
}

sumar(3, 5);

//Crear función que determine si un número es par o impar. Deberás imprimir el resultado por la pantalla
//del navegador y la consola.

// Con operador ternario

function par (numero) {
   var paroimpar = numero %2 === 0;
   var resultado = "El número " + numero + " es " + (paroimpar? "par." : "impar.");  
   console.log(resultado);
   document.write(resultado + "<br>");
}

par (4);

// Con condicionales

function par(numero) {
    if (numero % 2 === 0) {
      console.log(numero + " es un número es par.");
      document.write(numero + " es un número es par." + "<br>");
    } else {
      console.log(numero + " es un número es impar.");
      document.write(numero + "es un número es impar." + "<br>");
    }
  }
  
  par(4);


// Crear un objeto carro haciendo la abstracción de sus atributos y un objeto anidado.
// Crear una función que devuelva la marca del carro.
// Crear una función que devuelva la cantidad de puertas que tiene el carro.
// Crear una función que devuelva un atributo del objeto anidado.

var coche = {
    marca: "Fiat",
    modelo: "500-XL",
    color: "Rojo",
    puertas: "5",
    extras: ["sonido premium", "sunroof panorámico", "cristales oscurecidos", "luz de iluminación del suelo"]
  };

function marca(coche) {    
    return coche.marca;
}

console.log(coche.marca);
document.write(coche.marca + "<br>");

function puertaS(coche){
    return coche.puertas;
}

console.log(coche.puertas);
document.write(coche.puertas + "<br>");


function extra(coche) {
    return coche.extras[1];
}

console.log(coche.extras[1]);
document.write(coche.extras[1] + "<br>");

//Crear un array de 10 números
//Crear una función que imprima en consola todos los números de un array (Investigar ciclo for)

var numeros = [91, 82, 73, 64, 55, 46, 37, 28, 19];
console.log(numeros);
document.write(numeros + "<br>");

function iterador(numeros) {
    for (var i = 0; i < numeros.length; i++) {
      console.log(numeros[i]);
    }
  }

//Crear una función que añada un número al array  

function iterador(numeros) {
    numeros.push(100);
  }
  
  iterador(numeros);
  
  console.log(numeros);
  document.write(numeros + "<br>");

//Crear una función que elimine los números pares de ese array.
  
function paresfuera(numeros) {
    for (var i = 0; i < numeros.length; i++) {
      if (numeros[i] % 2 === 0) {
        numeros.splice(i, 1); // borra desde la posición i, x posiciones;
        i--; // ajusta i, restando una posición si eliminó un par.
      }
    }
  }
    paresfuera(numeros);
  
  console.log(numeros);
  document.write(numeros + "<br>");


//Crear una función que devuelva el número mayor de un array.  

  function mayor(numeros) {
    var masmayor = 0;
    for (var i = 0; i < numeros.length; i++) {
      if (numeros[i] > masmayor) {
        masmayor = numeros[i];
      }
    }
    return masmayor;
  }

  var numeromasmayor = mayor(numeros); // declaro una vble externa que recoja el valor "local" de la funcion para retornarlo
  console.log(numeromasmayor);
  document.write(numeromasmayor + "<br>");

//Crear una función que devuelva el número menor de un array.


  function menor(numeros) {
    var masmenor = numeros[0]; // le asigno el valor de la primera posición del array
    for (var i = 1; i < numeros.length; i++) {  // itero desde la 2º posición para no comparar consigo mismo
      if (numeros[i] < masmenor) { 
        masmenor = numeros[i];
      }
    }
    return masmenor;
  }
  
  var numeroMasMenor = menor(numeros);
  
  console.log(numeroMasMenor);
  document.write(numeroMasMenor + "<br>");
  
//Crear un función que convierta en minúsculas todas las letras de un texto.

function minusculas(texto) {
  return texto.toLowerCase();
}

var frase= "ME GUSTA MUCHO EL CAFÉ";
var minusculas = minusculas(frase);

console.log(minusculas);
document.write(minusculas + "<br>");

//Crear una función que convierta en mayúsculas todas las letras de un texto.

function mayusculas(texto) {
  return texto.toUpperCase();
}

var frase= "ME GUSTA MUCHO EL CAFÉ";
var mayusculas = mayusculas(frase);

console.log(mayusculas);
document.write(mayusculas + "<br>");


//Crear una función que reciba un array de nombres y que convierta la primera letra de cada nombre en
//mayúscula.

function primeramayuscula(nombres) {
  var nombresMayusculas = [];
  
  for (var i = 0; i < nombres.length; i++) {  // Recorro el array desde la posición 0 hasta la última determinada por length
    
    var nombre = nombres[i]; // Recojo cada "nombre" en cada iteración
    var primeraLetraMayuscula = nombre.charAt(0).toUpperCase(); // Cojo la primera letra de cada palabra y la paso a mayúscula
    var restoNombre = nombre.slice(1); // cojo el resto del nombre a partir de la segunda letra
    var nombreCompleto = primeraLetraMayuscula + restoNombre; //concateno primera letra mayúscula al resto del nombre
    
    nombresMayusculas.push(nombreCompleto); // coloco el nombre completo al final del array
  }
  
  return nombresMayusculas;
}

var nombres = ["Mireia", "Helena", "Jimena", "Maite"];
var nombresMayusculas = primeramayuscula(nombres);

console.log(nombresMayusculas);
document.write(nombresMayusculas + ("<br>"));

