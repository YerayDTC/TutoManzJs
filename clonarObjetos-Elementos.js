import _ from 'lodash-es';

// ** Clonar objetos o elementos
/*En Javascript, así como en muchos otros lenguajes, 
necesitaremos en ocasiones copiar o clonar elementos de nuestro código, 
de forma que podamos cambiar uno y dejar intacto el original. Para ello, 
Javascript (al igual que en otros lenguajes) tiene dos mecanismos para copiar elementos:

🥂 Copia por valor (Duplica el contenido)
🔮 Copia por referencia (Hace referencia a dónde está el contenido)*/

// ** Copia por valor
/*El primero de ellos, la copia por valor, se realiza con los tipos de datos más básicos, 
es decir, los tipos de datos primitivos, es decir: , , , etc. 
Esto ocurre así porque son estructuras simples y rápidas de copiar.

La copia por valor significa que simplemente se crea una nueva variable o constante 
y se asigna el mismo valor que tiene la variable original. 
Lo que a efectos prácticos cualquiera imaginaría como una copia: */

let originalValue1 = 42;

// Creamos una copia del valor de originalValue
let copy1 = originalValue1;

originalValue1;    // 42
copy1;             // 42

// Alteramos el valor de copy1
copy1 = 55;

originalValue1;    // 42
copy1;             // 55

/*Como puedes ver, todo ocurre de forma predecible. 
Al alterar el valor de copy, este es modificado y por otro lado, 
el valor de originalValue sigue siendo el valor original. */

// ** Copia por referencia
/*El segundo mecanismo es la copia por referencia, y es un poco más complejo. 
En Javascript, como en otros lenguajes, al almacenar la información en una variable, 
esta se guarda en una dirección de memoria.

Con estructuras de datos más complejas como ,  u otros, esta información no se copia por valor, 
puesto que podríamos tener estructuras muy complejas 
donde pueden haber muchos niveles de profundidad (array que contiene arrays,
que a su vez cada uno de ellos contienen arrays y a su vez cada uno de ellos contienen arrays...).

Para simplificar el proceso, lo que se hace con estos tipos de datos más complejos, 
es que la copia será una referencia al elemento original, algo que es mucho más práctico y rápido, 
pero con lo que hay que tener mucho cuidado:
 */

let originalValue2 = { name: "ManzDev" };

// Creamos una supuesta copia del valor de originalValue2
let copy2 = originalValue2;

originalValue2;    // { name: "ManzDev" }
copy2;             // { name: "ManzDev" }

// Alteramos el valor de copy2
copy2.name = "Niv3k_el_pato";

originalValue2;    // { name: "Niv3k_el_pato" }
copy2;             // { name: "Niv3k_el_pato" }

/*Como puedes ver, la modificar la propiedad name de copy, 
también se altera la propiedad name de originalValue puesto que copy solo 
es una referencia a la estructura original, es decir, está ligado a originalValue. 
Al cambiar cualquiera de ellos, se modificará el otro. */

// ** Clonando variables o constantes
/*Y entonces... ¿Qué puedo hacer para clonar o copiar estructuras de datos complejas sin este problema? 
Antes de nada tenemos que conocer dos conceptos importantes:

🎈 Clonación superficial (Shallow clone): Se llama así cuando realizamos una clonación 
de una estructura de datos y sólo se copia su primer nivel, mientras que segundo y niveles más profundos, 
se crean referencias.

🧨 Clonación profunda (Deep clone): Se llama así cuando realizamos una clonación 
de una estructura de datos a todos sus niveles.

Observa esta estructura de datos: */

const data = {
    name: "ManzDev",        // Se clona en superficial y en profundidad
    tired: false,           // Se clona en superficial y en profundidad
    likes: ["css", "javascript", "html", "vue"], // Sólo en profundidad
    numbers: [4, 8, 15, 16, 23, 42]              // Sólo en profundidad
};

console.log("Este es el data original ", data, "\n");

// Si realizamos una clonación superficial, solo clonaríamos los tipos de datos básicos (los dos primeros).

// ! Los dos últimos, al ser estructuras complejas en sí mismas, no se realizaría una clonación, 
/* sino que sería una referencia al elemento original, 
modificando ambos si alteramos uno de sus elementos, como vimos anteriormente. 

Si realizamos una clonación profunda, no tendríamos este problema, se clonarían todos los elementos, 
independientemente del nivel de profundidad.*/

// const copy3 = data;

// copy3.name = "Niv3k_el_pato";

// console.log("Clonacion superficial ", copy3);
// copy3.likes.push("React"); 
// console.log("Clonacion superficial de copy3 ", copy3);
// console.log("\n");
// console.log("Clonacion superficial de data ", data);



// ** Clonando elementos en Javascript

//Tradicionalmente, hay varias aproximaciones, vamos a explicarlas, junto a sus ventajas y desventajas:

//? Estrategia - Clonación superficial - Clonación profunda - Tipos de datos avanzados - Nativo	Más info
/*
Asignación =	❌ No	❌ No	❌ No	✅ Sí	
Usar Object.assign()	✅ Sí	❌ No	❌ No	✅ Sí
Usar spread ...	✅ Sí	❌ No	❌ No	✅ Sí	Copias con spread
Serializar con JSON.parse()	✅ Sí	✅ Sí	⚠️ Solo tipos básicos
⚠️ No funciones/DOM	✅ Sí	JSON
Usar _.cloneDeep() de Lodash	✅ Sí	✅ Sí	✅ Tipos avanzados
⚠️ No DOM	❌ No	cloneDeep
Usar structuredClone()	✅ Sí	✅ Sí	✅ Tipos avanzados
⚠️ No funciones/DOM	✅ Sí	Este post
Veamos un ejemplo de cada uno sobre el elemento data anterior. En primer lugar, 
veamos las formas que permiten clonación superficial, pero no clonación profunda: */

// ❌ Esto no realiza una clonación, es una referencia al original
const copy3 = data;
console.log("❌ Esto no realiza una clonación, es una referencia al original ",copy3, "\n");
// ❌ Sólo superficial (Hay que crear objeto con el mismo tipo)
const copy4 = {};
Object.assign(copy4, data);
console.log("❌ Sólo superficial (Hay que crear objeto con el mismo tipo) ",copy4, "\n");


// ❌ Sólo superficial
const copy5 = { ...data };
console.log("❌ Sólo superficial ",copy5, "\n");

/*El ... (spread) o el Object.assign() pueden interesarnos si necesitamos un mecanismo rápido de clonación, 
tenemos estructuras de un solo nivel y no nos interesan tipos de datos avanzados, sino datos primitivos.

Ahora veamos las formas donde podemos realizar clonación profunda y copiar los elementos 
incluso a niveles de profundidad mayores y no sólo el primer nivel (como ocurre en la clonación superficial): */

// ✅ El truco de JSON funciona, ❌ pero estamos limitados a los tipos de JSON
const string = JSON.stringify(data);
const copy6 = JSON.parse(string);
console.log("✅ El truco de JSON funciona, ❌ pero estamos limitados a los tipos de JSON ", copy6, "\n");

// ✅ Con Lodash, ten en cuenta que necesitaremos descargar/parsear librería externa
import { cloneDeep } from "lodash-es";
const copy7 = cloneDeep(data);
console.log("✅ Con Lodash, ten en cuenta que necesitaremos descargar/parsear librería externa ", copy6, "\n");

// ✅ Con structuredClone, ciertos tipos (funciones, DOM) devuelven excepción
const copy8 = structuredClone(data);
console.log("✅ Con structuredClone, ciertos tipos (funciones, DOM) devuelven excepción ", copy6, "\n");

/*Como conclusión:

Usa ... (spread) o Object.assign() si trabajas con datos primitivos y un sólo nivel de profundidad.
Usa JSON.parse() y JSON.stringify() en el mismo caso. Útil si necesitas navegadores muy antiguos.
Usa structuredClone() si quieres un clonado moderno, que soporte diferentes niveles de profundidad.
Usa cloneDeep() de Lodash si requieres clonado de funciones y no te supone un coste incluir dependencias externas.
Por aquí tienes una tabla resumen donde puedes ver que tipos de datos puede clonar cada uno 
de los métodos que permiten clonación profunda: */

// ? Tipo de dato	...spread / Object.assign()	JSON.parse()	_.cloneDeep()	structuredClone()
/*
Tipos básicos (primitivos)
NUMBER - ✅ Sí	✅ Sí	✅ Sí	✅ Sí
STRING - ✅ Sí	✅ Sí	✅ Sí	✅ Sí
BOOLEAN -✅ Sí	✅ Sí	✅ Sí	✅ Sí
undefined	✅ Sí	⚠️ null	✅ Sí	✅ Sí
null	✅ Sí	✅ Sí	✅ Sí	✅ Sí
Tipos complejos (no primitivos)
ARRAY - ❌ No, referencia	✅ Sí	✅ Sí	✅ Sí
OBJECT - ❌ No, referencia	✅ Sí	✅ Sí	✅ Sí
DATE - ❌ No, referencia	⚠️ string	✅ Sí	✅ Sí
BIGINT❌ No, referencia	❌ Devuelve TypeError	✅ Sí	✅ Sí
REGEXP -❌ No, referencia	⚠️ {} vacío	✅ Sí	✅ Sí
MAP/SET - ❌ No, referencia	⚠️ {} vacío	✅ Sí	✅ Sí
SYMBOL - ❌ No, referencia	✅ Sí	✅ Sí	❌ Devuelve DOMException
FUNCTION/CLASS - ❌ No, referencia	⚠️ null	✅ Sí	❌ Devuelve DOMException
Elemento del DOM	❌ No, referencia	⚠️ {} vacío	❌ No, referencia	❌ Devuelve DOMException


En principio, en estructuras de datos no deberían existir elementos del DOM ni funciones, 
por lo que structuredClone() debería ser la mejor opción. No obstante, si lo que deseas 
es clonar ciertas estructuras que además contienen funciones o elementos del DOM, lo mejor sería decantarse por cloneDeep().

Ten en cuenta que aunque puede ser atractivo el método _.cloneDeep() por soportar todos los tipos de datos, 
también hay que tener en cuenta que no se trata de un método nativo del navegador, 
sino que se trata de una librería externa, que debe cargarse, parsearse y ejecutarse 
y que con estructuras muy complejas puede ser lenta o pesada. */

