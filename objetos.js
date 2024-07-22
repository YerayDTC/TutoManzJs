// ** OJO: Hay ciertos casos en los que sólo se puede utilizar la notación con corchetes, 
// ** como por ejemplo cuando se utilizan espacios en el nombre de la propiedad. 
// ** Es imposible hacerlo con la notación con puntos. 


/*La acción de convertir JSON a objeto Javascript se le suele denominar parsear. 
Es una acción que analiza un  que contiene un JSON válido y devuelve un objeto 
Javascript con dicha información correctamente estructurada. Para ello, 
utilizaremos el mencionado método JSON.parse(): */

const json = `{
    "name": "Manz",
    "life": 99
}`;

const user2 = JSON.parse(json);

user2.name;  // "Manz"
user2.life;  // 99

console.log(`user2.name = ${user2.name} user2.life = ${user2.life}`);
console.log("\n");

/*Como se puede ver,  user es un objeto generado a partir del JSON almacenado 
en la variable  json y podemos consultar sus propiedades 
y trabajar con ellas sin problemas. */




const user = {
    name: "Manz",
    life: 99,
    talk: function () {
        return "Hola!";
    },
};

JSON.stringify(user);       // '{"name":"Manz","life":99}'
console.log(JSON.stringify(user))

/*Observa que, como habíamos dicho, las funciones no están soportadas por JSON, 
por lo que si intentamos convertir un objeto que contiene métodos o funciones, 
JSON.stringify() no fallará, pero simplemente devolverá un  omitiendo 
las propiedades que contengan funciones (u otros tipos de datos no soportados). */

/*Además, se le puede pasar un segundo parámetro al método .stringify(), 
que será un  que actuará de filtro a la hora de generar el objeto. 
Observa el siguiente ejemplo: */

const user3 = {
    name: "Manz",
    life: 99,
    power: 10,
};

JSON.stringify(user3, ["life"])            // '{"life":99}'
JSON.stringify(user3, ["name", "power"])   // '{"name":"Manz","power":10}'
JSON.stringify(user3, [])                  // '{}'
JSON.stringify(user3, null)                // '{"name":"Manz","life":99,"power":10}'

/*Observa que el penúltimo caso, no se conserva ninguna propiedad, 
mientras que el último, se conserva todo.
Por último, también podemos añadir un tercer parámetro en el método .
() que indicará el número de espacios que quieres usar al crear el  
del JSON resultante. Observa que hasta ahora, el  está minificado y aparece 
todo junto en la misma línea.
Observa lo que ocurre en los siguientes casos: */

const user4 = {
    name: "Manz",
    life: 99
};

JSON.stringify(user4, null, 2);
// {
//   "name": "Manz",
//   "life": 99
// }

JSON.stringify(user4, null, 4);
// {
//     "name": "Manz",
//     "life": 99
// }

JSON.stringify(user4, ["name"], 1);
// {
//  "name": "Manz"
// }

/*En el primer caso, json2, el resultado se genera indentado a 2 espacios. 
En el segundo caso, json4, el resultado se genera indentado a 4 espacios. 
En el tercer y último caso, json1, se filtran las propiedades, 
dejando sólo "name" y se genera indentando a 1 espacio. */

/*Leyendo JSON externo
Ten en cuenta que los ejemplos realizados hasta ahora, 
estamos convirtiendo un  a  y viceversa. Normalmente los contenidos JSON 
suelen estar almacenados en un archivo externo, que habría que leer desde nuestro código Javascript.

Para ello, hoy en día se suele utilizar la función fetch() para hacer peticiones 
a sitios que devuelven contenido JSON. También se podría 
leer ficheros locales con contenido .json. En cualquier caso, 
estos temas puedes encontrarlos en el tema Peticiones HTTP 
que encontrarás en este sitio, algunos temas más adelante. */