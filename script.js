console.log("¡Hola, mundo!");

// Crear variables de diferentes tipos de datos:

let numero = 39;
console.log(numero);
let texto = "Quiero un café!";
console.log(texto);
let booleano = true;
console.log(booleano);


// De las variables declaradas anteriormente, identifica las que son de tipo integer y realiza operaciones
// matemáticas básicas con las variables creadas anteriormente (suma, resta, multiplicación, división).
// Deberás imprimir el resultado por la pantalla del navegador y la consola.

let suma = numero + numero;
console.log(suma);
let resta = numero - 3;
console.log(resta);
let multiplicacion = numero * 5;
console.log(multiplicacion);
let division = numero/2;
console.log(division);


//De las variables declaradas anteriormente, identifica las que son de tipo texto y concatena dichas
//cadenas de texto.Deberás imprimir el resultado por la pantalla del navegador y la consola.

let concatenar = texto + " ¡Cuánto antes!";
console.log(concatenar);

//Crear una función que imprima por la pantalla del navegador y la consola el mensaje "Hola, [nombre]"
//con un parámetro para el nombre.

function saludar(nombre) {
    let mensaje = "Hola, " + nombre;
    console.log(mensaje);
    document.write(mensaje + "<br>");
  }
  
  saludar("Anaïs");
  

//Crear función que reciba como parámetros dos números y que devuelva la suma de ellos. Deberás
//imprimir el resultado por la pantalla del navegador y la consola.

function sumar (sumando1, sumando2) {
    let suma = sumando1 + sumando2;
    console.log(suma);
    document.write(suma + "<br>");
}

sumar(3, 5);

//Crear función que determine si un número es par o impar. Deberás imprimir el resultado por la pantalla
//del navegador y la consola.

// Con operador ternario

function par (numero) {
   let paroimpar = numero %2 === 0;
   let resultado = "El número " + numero + " es " + (paroimpar? "par." : "impar.");  
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

let coche = {
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

let numeros = [91, 82, 73, 64, 55, 46, 37, 28, 19];
console.log(numeros);
document.write(numeros + "<br>");

function iterador(numeros) {
    for (let i = 0; i < numeros.length; i++) {
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
    for (let i = 0; i < numeros.length; i++) {
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

//Crear un botón en HTML y usar JavaScript para mostrar un mensaje cuando se hace clic.

function handleClick() {
  alert('¿Solo o con leche?');
}

document.getElementById('BTN').addEventListener('click', handleClick);

//Cambiar el contenido de un elemento HTML mediante JavaScript.

function changeClick() {
  let elemento = document.getElementById('BTN2');
  if (elemento.textContent === "COLD BREW") {
    elemento.textContent = "V60";
  } else {
    elemento.textContent = "COLD BREW";
  }
}

//Ocultar y mostrar elementos HTML utilizando JavaScript.

let btn = document.getElementById("BTN3");

btn.addEventListener("click", () => { // arrow function, escucha el clic y oculta el bBTN·
  btn.style.display = "none"; 
  setTimeout(() => {
    btn.style.display = "block";
  }, 2000);
});


//Crear un array de 10 nombres.

let CoffeeOrigins = ["Colombia", "Ethiopia", "Brazil", "Costa Rica", "Guatemala", "Kenya", "Indonesia"]

//Crear una función que imprima en pantalla una lista con los nombres del array de nombres.

const lista = document.getElementById("origins");
const coffeeOrigins = ["Colombia", "Brasil", "Etiopía", "Costa Rica", "Guatemala", "Kenia", "Indonesia"];

coffeeOrigins.forEach(origen => {
  const item = document.createElement("li");
  item.textContent = origen;
  lista.appendChild(item);
});


//Crear un array de números.

let numbers = ["22","33","44","55","66","77","88"]

//Crear una función que pinte en pantalla cuántos números tiene el array de números.

const counter = document.getElementById("count");
let i = 0;

numbers.forEach(element => {
  i++;
});

counter.textContent = i;

//Crea los nodos necesarios para imprimir un formulario.

const form = document.createElement('form');

const input1 = document.createElement('input');
input1.type = 'text';
input1.placeholder = 'Nombre';

const input2 = document.createElement('input');
input2.type = "text";
input2.placeholder = "Ciudad"


form.appendChild(input1);
form.appendChild(input2);
document.body.appendChild(form);

//Crea los nodos necesarios para imprimir una tabla.
//Crea array de objetos 10 objetos con su respectivos key:value. Cada objeto deberá tener las siguientes keys:
//id, name, status, species, type, gender
//El value de cada key lo asignas tú
//Imprime cada elemento del objeto dentro de la tabla que creaste anteriormente.