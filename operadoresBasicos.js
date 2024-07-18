//**Módulo */
const numbers = [10, 20, 30, 40, 50, 60, 70, 80];

for (let i = 0; i < numbers.length; i++) {
  const mod = i % 2;
  console.log(numbers[i], numbers[mod]);
}

console.log('\n');

/*Observa que en el console.log() estamos mostrando numbers[i] y luego numbers[mod].
Si ejecutas este código, comprobarás que en el primer caso, se van mostrando los valores del array numbers, 
es decir, 10, 20, 30... y así hasta 80. Sin embargo, en el segundo caso del console.log(),
donde utilizamos mod como índice, se repiten los dos primeros: 10, 20, 10, 20, 10, 20....

Esto ocurre porque en la línea const mod = i % 2 hemos hecho el módulo sobre 2 
y no estamos dejando que ese índice crezca más de 2, 
los valores que va a tomar mod en el bucle serán 0, 1, 0, 1, 0, 1..., 
puedes comprobarlo cambiando el console.log() y mostrando los valores i y mod. 

Ejemplo:
console.log(numbers[i], numbers[mod]);
// Sustituyendo los valores actuales de i y mod
console.log(numbers[2], numbers[0]);
// Valores del array en esas posiciones
console.log(30, 10);
*/

//** Operador de exponenciación */
const a = 2;
const b = 5;

console.log(Math.pow(a, b));    // 32
console.log(a ** b);            // 32
console.log(a * a * a * a * a); // 32
console.log('\n');

/*
En este caso, estamos haciendo la operación 25, es decir, 2 * 2 * 2 * 2 * 2.
En el caso de la exponenciación, simplemente podemos utilizar el operador **. 
Antiguamente, la exponenciación se hacía a través del método Math.pow(), 
sin embargo, ahora podemos hacerlo a través de este operador, con idéntico resultado: */


//** Operadores de asignación */
/*Nombre	Operador	Descripción
Asignación	c = a + b	Asigna el valor de la parte derecha (en este ejemplo, una suma) a c.
Suma y asignación	a += b	Es equivalente a a = a + b.
Resta y asignación	a -= b	Es equivalente a a = a - b.
Multiplicación y asignación	a *= b	Es equivalente a a = a * b.
División y asignación	a /= b	Es equivalente a a = a / b.
Módulo y asignación	a %= b	Es equivalente a a = a % b.
Exponenciación y asignación	a **= b	Es equivalente a a = a ** b. */

//** Operador ternario */

/*El operador ternario es una especie de if compacto que tienen la mayoría de los lenguajes de programación, donde en lugar de utilizar un if / else tradicional, para escribir en varias líneas, podemos hacerlo mediante el operador ternario. Su estructura es la siguiente: (condición) ? valor verdadero : valor falso.

Veamos como la utilizaríamos, comparándolo con un if:*/

// Condicional if (sin operador ternario)
let rol;
let nombre;
if (nombre === "Manz") {
  rol = "streamer";
} else {
  rol = "user";
}
console.log(rol);
console.log('\n');


// Con operador ternario
const role = nombre === "Manz" ? "streamer" : "user";
console.log(role);
/*
En este caso, name === "Manz" sería la condición,
"streamer" el valor si la condición es verdadera, y
"user" el valor si la condición es falsa.Como puedes ver,
el operador ternario permite escribir código mucho más compacto en muchas situaciones.

► Condicionales y operador ternario*/

console.log('\n');


//** Asignación lógica
/*Igual que tenemos la posibilidad de realizar asignaciones
como += que son la mezcla de una asignación con una operación de suma, 
también podemos hacer lo propio con el operador lógico de asignación ||=,
que une un operador lógico con una asignación.
Observa el siguiente fragmento de código: */

let nombreUsuario = "";

if (!nombreUsuario) {
  nombreUsuario = "Manz";
}

/*Este código, podemos simplificarlo utilizando el operador lógico OR de asignación ||=: */

let userName = "";      // o null, false o undefined

userName ||= "Manz"     // Ahora es "Manz"
userName ||= "Paco"     // Sigue siendo "Manz"
userName ||= false      // Sigue siendo "Manz"

console.log('\n');


/*Con ||= conseguimos que si el valor inicial de userName
es un valor que se evalua como falso como null, undefined,
0, false o "", entonces realizará la asignación con el valor de la derecha.
En caso contrario, si ya tiene un valor establecido que no es falso, no hará nada. */

//** Operador Nullish coalescing */
/*El operador nullish coalescing (unión nula) es un operador lógico 
muy similar al operador OR, pero con ciertos matices y diferencias.
A grandes rasgos, se puede decir que el operador a ?? b devuelve b
sólo cuando a es undefined o null.

Dicho de otra forma, funciona igual que el operador OR, 
pero sólo para valores que sean undefined o null, en lugar de la amplia 
gama de valores que se pueden evaluar como falso.

Veamoslo con un ejemplo para ver la diferencia con el anterior: */

42 || 50          // 42
42 ?? 50          // 42 (ambos se comportan igual)

false || 50       // 50 (false es un valor falsy, devuelve el segundo)
false ?? 50       // false (la parte izquierda no es null ni undefined, devuelve el primero)

0 || 50           // 50 (0 es un valor falsy, devuelve el segundo)
0 ?? 50           // 0 (la parte izquierda no es null ni undefined, devuelve el primero)

null || 50        // 50 (null es un valor falsy, devuelve el segundo)
null ?? 50        // 50 (devuelve el segundo)

undefined || 50   // 50 (undefined es un valor falsy, devuelve el segundo)
undefined ?? 50   // 50 (devuelve el segundo)

/*Dependiendo del caso, podría interesarnos utilizar el operador ?? o el operador ||.
Veamos un ejemplo algo diferente. Imagina que tenemos un objeto data donde 
tenemos almacenado la cantidad de balas que le quedan a un personaje de un videojuego.

Si necesitamos mostrar al usuario visualmente en el menú que se ha quedado sin balas,
quizás nos podría interesar utilizar el operador ||. Por otro lado,
si lo que queremos es mostrar el total numérico de balas, 
quizás nos interesaría más utilizar el operador ??. */

const dataa = { ammo: 0 }
dataa.ammo || "Sin balas";     // "Sin balas"
dataa.ammo ?? "Sin balas";     // 0

const data = {}
data.ammo || "Sin balas";     // "Sin balas"
data.ammo ?? "Sin balas";     // "Sin balas"

//Ten en cuenta que en el segundo caso, la propiedad ammo es undefined, ya que no está definida.


//** Asignación lógica nula */
/*Al igual que pasó con el operador OR lógico, 
también tenemos una mezcla del nullish coalescing y una asignación.
Este operador es bastante interesante para algunas operaciones muy frecuentes en Javascript.

Existen ciertos casos donde, si una variable tiene valores null
o undefined (valores nullish) y sólo en esos casos, queremos cambiar su valor.
Veamos como se haría sin utilizar la asignación lógica nula 
y como podríamos resumirlo utilizándola:
 */

// Sin asignación lógica nula
if (x === null || x === undefined) {
  x = 50;
}

// Con asignación lógica nula
x ??= 50; //** si x es null o undefined, x = 50 */

/*Como puedes ver, utilizando el operador ??= podemos simplificar mucho nuestro código.
Recuerda que a ??= b es equivalente a a ?? (a = b). 
Esto puede ser super útil para simplificar casos como el siguiente: */

const resetConfig = (data) => {
  data.life ??= 100;
  data.level ??= 1;
  return data;
}

resetConfig({ life: 25, level: 4 });      // { life: 25, level: 4 }
resetConfig({ life: null, level: 2 });    // { life: 100, level: 2 }
resetConfig({});                          // { life: 100, level: 1 }

/* Observa que la función resetConfig() obtiene un objeto por parámetro 
y en el caso de tener una de las propiedades life o level a null o no existir 
(o valer undefined), las reseteará al valor indicado. */


//**Optional chaining - Accede a propiedades sin errores */

/*En muchas situaciones es posible que nos encontremos 
ante un código que asume que tenemos un dato concreto 
(o una estructura de datos) y al intentar realizar una tarea 
sobre dicha estructura, obtengamos un error inesperado.
Por ejemplo, observa este fragmento de código: */

const userr = {
  name: "ManzDev",
  role: "streamer",
  attrs: {
    life: 100,
    power: 25
  }
}

console.log(userr.attrs.life);   // 100

/*Simplemente accedemos a la propiedad life del objeto attrs. 
Ahora, analiza el siguiente ejemplo donde asumimos que existe un objeto attrs, 
cuando realmente no lo tiene: */

const useer = {
  name: "ManzDev",
  role: "streamer"
}

console.log(useer.attrs.life);

/*En este caso, al acceder a user.attrs nos devolverá undefined, 
ya que no existe el objeto attrs. Por lo tanto, si intentamos acceder 
a la propiedad life de undefined nos devolverá un error, ya que no podemos 
acceder a una propiedad de algo que no existe: */

/* Este error en Javascript es muy frecuente.
Una forma de solucionar este error sería ser más estricto con las 
estructuras de datos y nuestro código en general y utilizar herramientas 
como TypeScript para que así nuestro código sea más predecible.Si no es 
nuestro caso(que no lo es en este punto de nuestro aprendizaje), lo ideal sería 
comprobar si ese elemento existe antes de intentar acceder a un método o propiedad: */

const user = {
  name: "ManzDev",
  role: "streamer"
}

if (user.attrs) {
  console.log(user.attrs.life);
}

/*Aquí no tendríamos problemas ya que en el if estamos comprobando 
si existe la propiedad attrs en user, y de existir, ejecutariamos 
el código en cuestión. Sin embargo, el código se complica y se hace 
más verboso de leer. Esto se puede evitar con Optional chaining. */

//** ¿Qué es el Optional chaining? */

/*Un operador muy interesante es Optional chaining (encadenamiento opcional).
Este operador nos permite acceder a propiedades o métodos, 
aunque su elemento padre no exista, ya que realiza una comprobación previa.

Nuevamente, seguimos con nuestro ejemplo anterior donde 
el objeto user no tiene una propiedad attrs. Sin utilizar 
Optional chaining podríamos hacer lo siguiente: */

user.attrs.power     // TypeError: Cannot read properties of undefined (reading 'power')
user.attrs.life      // TypeError: Cannot read properties of undefined (reading 'life')

user.attrs && console.log(user.attrs.life);   // Comprobamos si existe attrs antes

/*En esta última línea, estamos haciendo algo similar al if que hicimos antes, 
pero ahora lo hacemos con un operador lógico AND (&&).

Con el optional chaining añadimos una interrogación ? justo antes del punto 
de la propiedad a la que queremos acceder. Esto lo que hará es indicar 
a Javascript que esa propiedad es opcional y puede que no exista:
 */

console.log(user.attrs?.power)    // undefined
console.log(user.attrs?.life)     // undefined

/*Como puedes ver, ahora podemos hacer el intento de acceso 
sin que nos lance un error. En el caso de que esa propiedad attrs no exista, 
nos devolverá undefined, pero si attrs existe, entonces nos devolverá el valor 
de life o power (o undefined si no existen). */
