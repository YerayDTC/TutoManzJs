//** Desestructuración de objetos

const user = {
    name: "Manz",
    role: "streamer",
    life: 99
}

const { name, role, life } = user;

console.log(name);
console.log(role, life);

/*En este ejemplo, separamos las propiedades name, role y life en variables individuales, 
«sacándolas» de user. Observa también, que en lugar de hacer varios console.log() 
como tenemos en las dos últimas líneas, podemos hacer lo siguiente: */

console.log({ name, role, life });

/*En esta línea, «volvemos a estructurar» en un objeto, 
uniendo las diferentes variables en un objeto a la hora de mostrarlo por consola.
Además, ten en cuenta que también es posible renombrar las propiedades si lo deseamos: */

const { name, role: type, life } = user;

console.log({ name, type, life });

/*Ten en cuenta que, para los casos en los que una de esas propiedades 
no exista (o tenga un valor undefined), también podemos establecerle un valor 
por defecto como solemos hacer en los parámetros de una función, de la siguiente forma: */

const { name, role = "normal user", life = 100 } = user;

console.log({ name, role, life });

/*Esto hará que, si no existe la propiedad role en el objeto user,
se cree la variable role con el  "normal user". */

//** Reestructurando nuevos objetos

/*Esta característica de desestructuración podemos aprovecharla a nuestro favor, 
para reutilizar objetos y recrear nuevos objetos a partir de otros,
basándonos en objetos ya existentes, añadiéndole nuevas propiedades o incluso sobreescribiendo antiguas. */

const user = {
    name: "Manz",
    role: "streamer",
    life: 99
}

const fullUser = {
    ...user,
    power: 25,
    life: 50
}

/*En este ejemplo, creamos un nuevo objeto fullUser con las mismas propiedades de user, 
sin embargo, además de poseer las anteriores, añadimos la nueva propiedad power 
y sobreescribimos la propiedad life con el valor 50. 

Ten en cuenta que en el caso de hacer ...user al final (en lugar de al principio), 
le estarías dando preferencia a las propiedades de user, 
que sobreescribirían las propiedades definidas anteriormente en el caso de coincidir.*/

//** Haciendo copias de objetos

/*Hasta ahora hemos puesto ejemplos muy sencillos, 
donde siempre entran en juego valores primitivos (números, strings, booleanos...), 
con los que no hay mucho problema porque en Javascript se pasan por valor. Sin embargo, 
valores más complejos (no primitivos: objetos, arrays, etc...) se pasan por referencia.

Vamos a explicar esto partiendo del ejemplo anterior:*/

const user = {
    name: "Manz",
    role: "streamer",
    life: 99,
    features: ["learn", "code", "paint"]
}

const fullUser = {
    ...user,
    power: 25,
    life: 50
}

/*Observa que ahora tenemos en user una propiedad features que contiene un, 
el cuál es un tipo de dato más complejo en Javascript. 
Ahora fijémonos en el objeto fullUser. Cuando hacemos la desestructuración ...user, 
estamos separando todas las propiedades de user y añadiéndolas a nuestro fullUser una por una.
Todas las propiedades originales se pasan por valor (se copia el valor en el nuevo objeto), 
sin embargo, el array es un tipo de dato complejo, y 
Javascript lo que hace es poner una referencia al valor original. En resumen, 
los tipos de datos complejos no son copias, son referencias (algo así como accesos directos). 

Vamos a verlo en código, partiendo del ejemplo anterior:*/

console.log(user.features);       // ["learn", "code", "paint"]
console.log(fullUser.features);   // ["learn", "code", "paint"]

fullUser.features[0] = "program";

console.log(fullUser.features);   // ["program", "code", "paint"]
console.log(user.features);       // ["program", "code", "paint"]

/*Como se puede ver, hemos cambiado el primer elemento del array features del objeto fullUser, 
sin embargo, si comprobamos el contenido del objeto user, comprobaremos que también ha cambiado. 
Esto ocurre porque realmente la propiedad features del objeto fullUser es una referencia 
a la propiedad features del objeto user, y es realmente la que se está modificando, 
alterando así ambos objetos. 

Para solucionar esto, podemos hacer lo siguiente:*/

const user = {
    name: "Manz",
    role: "streamer",
    life: 99,
    features: ["learn", "code", "paint"]
}

const fullUser = {
    ...structuredClone(user),
    power: 25,
    life: 50
}