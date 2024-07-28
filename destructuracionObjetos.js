//** Desestructuración de objetos

console.log("Desestructuración de objetos", "\n");
const user1 = {
    name1: "Manz",
    role1: "streamer",
    life1: 99
}

const { name1, role1, life1 } = user1;

console.log(name1);
console.log(role1, life1);

/*En este ejemplo, separamos las propiedades name, role y life en variables individuales, 
«sacándolas» de user. Observa también, que en lugar de hacer varios console.log() 
como tenemos en las dos últimas líneas, podemos hacer lo siguiente: */

console.log({ name1, role1, life1 });

/*En esta línea, «volvemos a estructurar» en un objeto, 
uniendo las diferentes variables en un objeto a la hora de mostrarlo por consola.
Además, ten en cuenta que también es posible renombrar las propiedades si lo deseamos: */

const user2 = {
    name2: "Manz",
    role2: "streamer",
    life2: 99
}

const { name2, roleDefined: type2, life2 } = user2;

console.log({ name2, type2, life2 });

/*Ten en cuenta que, para los casos en los que una de esas propiedades 
no exista (o tenga un valor undefined), también podemos establecerle un valor 
por defecto como solemos hacer en los parámetros de una función, de la siguiente forma: */

const user3 = {
    name3: "Manz"
}

const { name3, role3 = "normal user", life3 = 100 } = user3;

console.log({ name3, role3, life3 }, "\n");

/*Esto hará que, si no existe la propiedad role en el objeto user,
se cree la variable role con el  "normal user". */

// //** Reestructurando nuevos objetos

// /*Esta característica de desestructuración podemos aprovecharla a nuestro favor, 
// para reutilizar objetos y recrear nuevos objetos a partir de otros,
// basándonos en objetos ya existentes, añadiéndole nuevas propiedades o incluso sobreescribiendo antiguas. */

console.log("Reestructurando nuevos objetos", "\n");

const user4 = {
    name: "Manz",
    role: "streamer",
    life: 99
}

const fullUser4 = {
    ...user4,
    power: 25,
    life: 50
}

console.log(user4);
console.log((fullUser4), "\n");

// /*En este ejemplo, creamos un nuevo objeto fullUser con las mismas propiedades de user, 
// sin embargo, además de poseer las anteriores, añadimos la nueva propiedad power 
// y sobreescribimos la propiedad life con el valor 50. 

// Ten en cuenta que en el caso de hacer ...user al final (en lugar de al principio), 
// le estarías dando preferencia a las propiedades de user, 
// que sobreescribirían las propiedades definidas anteriormente en el caso de coincidir.*/

// //** Haciendo copias de objetos

// /*Hasta ahora hemos puesto ejemplos muy sencillos, 
// donde siempre entran en juego valores primitivos (números, strings, booleanos...), 
// con los que no hay mucho problema porque en Javascript se pasan por valor. Sin embargo, 
// valores más complejos (no primitivos: objetos, arrays, etc...) se pasan por referencia.

// Vamos a explicar esto partiendo del ejemplo anterior:*/

console.log("Haciendo copias de objetos", "\n");

const user5 = {
    name: "Manz",
    role: "streamer",
    life: 99,
    features: ["learn", "code", "paint"]
}

const fullUser5 = {
    ...user5,
    power: 25,
    life: 50
}

console.log(user5);
console.log((fullUser5), "\n");

// /*Observa que ahora tenemos en user una propiedad features que contiene un, 
// el cuál es un tipo de dato más complejo en Javascript. 
// Ahora fijémonos en el objeto fullUser. Cuando hacemos la desestructuración ...user, 
// estamos separando todas las propiedades de user y añadiéndolas a nuestro fullUser una por una.
// Todas las propiedades originales se pasan por valor (se copia el valor en el nuevo objeto), 
// sin embargo, el array es un tipo de dato complejo, y 
// Javascript lo que hace es poner una referencia al valor original. En resumen, 
// los tipos de datos complejos no son copias, son referencias (algo así como accesos directos). 

// Vamos a verlo en código, partiendo del ejemplo anterior:*/

console.log(user5.features);       // ["learn", "code", "paint"]
console.log(fullUser5.features);   // ["learn", "code", "paint"]

fullUser5.features[0] = "program";

console.log(fullUser5.features);   // ["program", "code", "paint"]
console.log(user5.features);       // ["program", "code", "paint"]

// /*Como se puede ver, hemos cambiado el primer elemento del array features del objeto fullUser, 
// sin embargo, si comprobamos el contenido del objeto user, comprobaremos que también ha cambiado. 
// Esto ocurre porque realmente la propiedad features del objeto fullUser es una referencia 
// a la propiedad features del objeto user, y es realmente la que se está modificando, 
// alterando así ambos objetos. 

// Para solucionar esto, podemos hacer lo siguiente:*/

const user6 = {
    name6: "Manz",
    role6: "streamer",
    life6: 99,
    features6: ["learn", "code", "paint"]
}

const fullUser6 = {
    ...structuredClone(user6),
    power: 25,
    life: 50
}

console.log(user6);
console.log((fullUser6), "\n");

// /*Observa que la diferencia es que, en lugar de hacer el ...user, 
// utilizamos la función structuredClone() a la cuál le pasamos el objeto a copiar. 
// Esta función hará, ahora si, una copia, devolviendo un nuevo objeto, y no la referencia.

// Podemos comprobarlo haciendo lo mismo de antes: */

console.log(user6.features6);       // ["learn", "code", "paint"]
console.log(fullUser6.features6);   // ["learn", "code", "paint"]

fullUser6.features6[0] = "program";

console.log(fullUser6.features6);   // ["program", "code", "paint"]
console.log(user6.features6,"\n");       // ["learn", "code", "paint"]

/*Comprueba que, ahora sí, el objeto modificado ha sido fullUser, 
sin embargo, user no ha sido alterado. */

// ** Estructuras anidadas
/*Como ves, esto suele pasar sobre todo cuando tenemos estructuras anidadas. 
Imaginemos que tenemos el siguiente objeto: */

console.log("Estructuras anidadas","\n");

const user7 = {
    name7: "Manz",
    role7: "streamer",
    attributes7: {
        height7: 183,
        favColor7: "blueviolet",
        hairColor7: "black"
    }
}

/*Si queremos «sacar» la propiedad attributes podríamos hacerlo como vimos anteriormente, 
y al ser propiamente un objeto, lo extraeríamos como tal. 
Sin embargo, si queremos sacar una de sus propiedades, podemos hacerlo de la siguiente forma: */

console.log(user7);

// Extraemos propiedad attributes (objeto con 3 propiedades)
const { attributes7 } = user7;
console.log(attributes7);

// Extraemos propiedad height (number)
const { attributes7: { height7 } } = user7;
console.log(height7);

// Extraemos propiedad height (number) y la cambiamos por nombre size
const { attributes7: { height7: size } } = user7;
console.log(size);

console.log(user7);

// ** Desestructuración (rest)

console.log("Desestructuración (rest) \n");

/*Al igual que vimos en el tema de desestructuración con arrays, 
podemos hacer las operaciones equivalentes con objetos. 
Por ejemplo, observa como hacemos una operación rest: */

const user8 = {
    name8: "Manz",
    role8: "streamer",
    life8: 99
}

const { name8, ...rest } = user8;

/*En este caso, la propiedad name la desestructuramos como variable 
y en el caso de rest la desestructuramos como un objeto que 
contiene las propiedades role y life. */

// ** Parámetros desestructurados 

console.log("Parámetros desestructurados, \n");

/*La desestructuración de parámetros es algo muy interesante a la hora de simplificar código, 
ya que podemos separar en variables individuales un objeto 
que en un ámbito específico es muy complejo de utilizar, 
y sería mucho más sencillo usarlo como variable.

Esto se ve mejor en un ejemplo, partamos del siguiente código: */

const user9 = {
    name9: "Manz",
    role9: "streamer",
    life9: 99
}

function show9(data) {
    const stars = "⭐".repeat(data.life9 / 20);
    return `Nombre: ${data.name9} (${data.role9}) ${stars}`;
}

console.log(show9(user9));   // "Nombre: Manz (streamer) ⭐⭐⭐⭐"

/*El punto clave en este ejemplo es el parámetro data de la función show(). 
Localiza donde se define y donde lo utilizamos en el interior de la función show. 
Ahora, lo que vamos a hacer es desestructurar los parámetros para que sea más fácil de escribir: */

const user10 = {
    name10: "Manz",
    role10: "Streamer",
    life10: 100
}

function show10( { name10, role10, life10 } ) {
    const stars = "⭐".repeat(life10 / 20);
    return `Nombre: ${name10} (${role10}) ${stars}`;
}

console.log(show10(user10));   // "Nombre: Manz (Streamer) ⭐⭐⭐⭐⭐"

/*Como ves, en lugar de definir data en los parámetros, 
desestructuramos definiendo sólo las propiedades que vamos a utilizar, 
en este caso todas, por lo que establecemos { name, role, life }. 
Luego, en su interior, en lugar de estar indicando el prefijo data. 
continuamente, hacemos simplemente referencia a la variable.

Si lo necesitasemos, también podríamos usar rest en este caso.

Recuerda que la desestructuración solo funciona para estructuras de datos. 
Si tienes un objeto que contiene métodos o elementos del DOM, 
por ejemplo, no se copiarán y lanzará una excepción. */

