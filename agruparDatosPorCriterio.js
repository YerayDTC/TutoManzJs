// ** Agrupar datos por criterio
const users = [
    { name: "ManzDev", type: "streamer", color: "indigo" },
    { name: "afor_digital", type: "streamer", color: "blue" },
    { name: "BlurSoul_", type: "moderator", color: "indigo" },
    { name: "felixicaza", type: "moderator", color: "blue" },
    { name: "pheralb", type: "moderator", color: "green" },
    { name: "omaaraguirre", type: "viewer", color: "orange" },
    { name: "LuisLlamas_es", type: "viewer", color: "orange" },
    { name: "ZeroBl", type: "viewer", color: "black" }
];

/*Imaginemos que queremos crear una nueva estructura de datos donde tengamos los usuarios separados por un criterio concreto. 
Esto puede ser una tarea complicada de realizar, sin embargo, 
Javascript incorpora nuevas funciones para hacerlo de forma muy sencilla. */

// ** Agrupar por criterio

/*En principio, tenemos dos métodos apropiados para esta tarea. Ambos son idénticos, 
la diferencia es que uno crea un Objeto y otro crea un Map:

            Método	                                                    Descripción
Object.groupBy(datos, criterio)	                    Agrupa en un OBJECT los datos por el criterio indicado.
Map.groupBy(datos, criterio)	                    Agrupa en un MAP los datos por el criterio indicado.

Por parámetro, pasaremos la estructura de datos  y en el segundo parámetros una  que hará de callback 
para definir cuál es el criterio que vamos a escoger. Veamos algunos ejemplos. */

// ** El método Object.groupBy()
/*Mediante el método Object.groupBy() podemos crear un objeto, donde las propiedades serán los valores de los criterios indicados. 
Por ejemplo, tomemos la estructura de usuarios que definimos al principio del artículo: */

const usersByType = Object.groupBy(users, user => user.type);

// usersByType:
{
    moderator: (3)[{ ...}, { ...}, { ...}],
        streamer: (2)[{ ...}, { ...}],
            viewer: (3)[{ ...}, { ...}, { ...}]
}

const usersByColor = Object.groupBy(users, user => user.color);

// usersByColor:
{
    black: (1)[{ ...}],
        blue: (2)[{ ...}, { ...}],
            green: (1)[{ ...}],
                indigo: (2)[{ ...}, { ...}],
                    orange: (2)[{ ...}, { ...}]
}

// ** El método Map.groupBy()
/*Hay que tener presente que aunque hemos creado objetos a partir de la agrupación, 
también podemos hacerlo con una estructura de datos similar llamada Map. Para ello, en lugar de Object usamos Map: */

const usersByType = Map.groupBy(users, user => user.type);

// usersByType:
{
    0: { "streamer" => [{ ...}, { ...}] },
    1: { "moderator" => [{ ...}, { ...}, { ...}] },
    2: { "viewer" => [{ ...}, { ...}, { ...}] },
    size: 3
}

Object.fromEntries(usersByType);

/*De hecho, observa que utilizando el método Object.fromEntries() 
puedes convertir el Map resultante en un Object como el obtenido con Object.groupBy(). */

// ** Agrupar por criterio (legacy)
/*En el caso de no poder utilizar estos nuevos métodos, o simplemente tener curiosidad como sería hacerlo sin ellos, 
puedes observar el siguiente ejemplo, donde agrupamos sin necesidad de los métodos .groupBy(): */

const types = [...new Set(users.map(user => user.type))]
const usersByType = {}
types.forEach(type => (usersByType[type] = users.filter(user => user.type === type)))

/*Como puedes ver, se trata de una forma un poco más tediosa e imperativa, pero conseguimos el mismo resultado:

1️⃣ Primero obtenemos los tipos de los usuarios en un Set para que no se repitan
2️⃣ Luego, desestructuramos para convertirlo en un 
3️⃣ Creamos un objeto vacío usersByType
4️⃣ Por cada uno de los tipos, filtramos los usuarios
5️⃣ Y los metemos en el objeto, indexado por dicho tipo */
