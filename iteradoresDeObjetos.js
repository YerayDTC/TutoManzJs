// ** Iteradores de objetos

/* Un iterador es un concepto que se repite, y en el ámbito de la programación, 
se suele referir a algo que te permite recorrer una estructura de datos por todos 
sus apartados o miembros.

En muchos casos, se presenta la situación en la que necesitamos recorrer un objeto, 
a través de las propiedades de su estructura, como si fueran los elementos de un array. 
Sin embargo, al ser un objeto parece que no es posible. */

// ** Iteradores de objetos
/*Sin embargo, existen unos métodos denominados Object.keys(), Object.values() y Object.entries() 
que nos van a permitir realizar esta tarea. En primer lugar, 
observa que son métodos de una Clase estática, por lo que tienes que escribir siempre el Object. 
y no ejecutar el método sobre el objeto en sí, como solemos hacerlo.

Veamos de que métodos se trata: */

/*              Método	                    Descripción
           ARRAY Object.keys(obj) 	        Itera el obj y devuelve sus propiedades o keys.
           ARRAY Object.values(obj) 	        Itera el obj y devuelve los valores de sus propiedades.
           ARRAY Object.entries(obj) 	    Itera el obj y devuelve un  con los pares[key, valor].
           OBJECT Object.fromEntries(array) 	Construye un objeto con un array de pares[key, valor].
           
En cualquiera de los 3 casos, devuelven siempre un .*/

// ** Convertir un objeto a array
/* Todo esto puede parecer complejo, pero en realidad es muy sencillo. 
Veamos un ejemplo para entender como funcionan: */

const user1 = {
    name: "Manz",
    life: 99,
    power: 10,
    talk: function () {
        return "Hola!";
    }
};

Object.keys(user1);        // ["name", "life", "power", "talk"]
Object.values(user1);      // ["Manz", 99, 10, ƒ]
Object.entries(user1);     // [["name", "Manz"], ["life", 99], ["power", 10], ["talk", ƒ]]

/*Expliquemos este código:

Con el método Object.keys() obtenemos un  de las claves (propiedades, índices, keys) del objeto.
Con el método Object.values() obtenemos un  de los valores de las claves anteriores, en el mismo orden.
Con el método Object.entries() obtenemos un  de entradas. Cada entrada es un  del par clave-valor, es decir, la propiedad del objeto original y su valor correspondiente.
Ten en cuenta que como un  también es un , podemos utilizar estos métodos también para recorrerlos, sólo que en este caso los índices del array son las posiciones (0, 1, 2, 3...). Veamos un ejemplo: */

const animals = ["Gato", "Perro", "Burro", "Gallo", "Ratón"];

Object.keys(animals);     // [0, 1, 2, 3, 4]
Object.values(animals);   // ["Gato", "Perro", "Burro", "Gallo", "Ratón"]
Object.entries(animals);  // [[0, "Gato"], [1, "Perro"], [2, "Burro"], [3, "Gallo"], [4, "Ratón"]]
// console.log(animals);

/*Así pues, los casos más interesantes suelen ser estructuras de OBJETOS y, quizás en algunos casos, de ARRAY. */

// ** Convertir un array a objeto
/*De la misma forma, también se puede hacer la operación inversa. Para ello, usaremos el método Object.fromEntries(). 
En esta ocasión, vamos a partir de dos  keys y values, donde el primero tiene la lista de propiedades en  
y el segundo tiene la lista de valores.

El objetivo es, a partir de esos dos arrays (que deben ser del mismo tamaño), 
generar el objeto inicial user que teníamos antes: */

const keys = ["name", "life", "power", "talk"];
const values = ["Manz", 99, 10, function(){return "Hola"}];

const entries = [];
for (let i of Object.keys(keys)) {
    const key = keys[i];
    const value = values[i];
    entries.push([key, value]);
}

const user2 = Object.fromEntries(entries); // {name: 'Manz', life: 99, power: 10, talk: ƒ}

// console.log(user2)

/*Observa que partimos de un ARRAY vacío entries. Con Object.keys(keys) obtenemos una lista de números de 0 al tamaño del array keys. 
Esto nos servirá de posición para ir recorriendo los arrays keys y values en el interior del bucle for..of.

De esta forma, en cada iteración del bucle generamos un par key, 
value, que meteremos en un array e insertaremos en entries. De esta forma, 
regeneramos la estructura de entradas de Object.entries() que es la que necesitamos para que, 
mediante Object.fromEntries() podamos regenerar el objeto user con las keys de keys y los valores de values.

Otra forma, más compacta, pero que quizás requiere más experiencia, sería la siguiente: */

const keys3 = ["name", "life", "power", "talk"];
const values3 = ["Manz", 99, 10, function () { return "Hola" }];

const entries3 = values.map((value, index) => [keys[index], value]);
const user3 = Object.fromEntries(entries);

/*En este caso hacemos exactamente lo mismo, pero utilizamos el método .map() 
del tema de las array functions para simplificar el bucle. */
