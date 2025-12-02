// --- 2. Acceso a Elementos ---
// Los índices comienzan en 0 (Zero-based indexing).
// [0] -> Primer elemento
// [length - 1] -> Último elemento
const techStack = ["HTML", "CSS", "JavaScript"]; 
console.log(`Accediendo al segundo elemento: ${ techStack[1] }`);
console.log(`Accediendo al último elemento: ${ techStack[ techStack.length - 1 ] }`);
// --- 3. Modificación de Elementos ---
techStack[1] = "Sass"; // Cambiando "CSS" por "Sass"
console.log("Después de la modificación:", techStack); // ["HTML", "Sass", "JavaScript"]


/* ================================================================
   BLOQUE 2: MÉTODOS DE ARRAYS (Add/Remove) 
   ================================================================
   JavaScript nos da métodos para manipular la lista como una pila o cola.
*/
const shoppingList = ["Leche", "Huevos"];
// 1. push(): Agrega al FINAL (El más usado)
// Retorna la nueva longitud del array.
shoppingList.push("Pan"); 
console.log("Push:", shoppingList); // ["Leche", "Huevos", "Pan"]
// 2. unshift(): Agrega al INICIO (Mueve todos los índices, es más lento)
shoppingList.unshift("Café");
console.log("Unshift:", shoppingList); // ["Café", "Leche", "Huevos", "Pan"]

// --- Eliminar Elementos ---
// 3. pop(): Elimina el ÚLTIMO y lo devuelve
const removedItem = shoppingList.pop();
console.log(`Eliminado con pop: ${removedItem}`); // "Pan"
console.log("Lista actual:", shoppingList);
// 4. shift(): Elimina el PRIMERO y lo s
const firstRemoved = shoppingList.shift();
console.log(`Eliminado con shift: ${firstRemoved}`); // "Café"

// --- Método splice() ---
// Permite eliminar o agregar elementos en cualquier posición
const colors = ["Rojo", "Verde", "Azul", "Amarillo", "Morado", "Naranja"];

// TODO EJERCICIO RÁPIDO:
// 1. Crea un array 'guestList' con 2 nombres.
// 2. Agrega un invitado al final.
// 3. Agrega un invitado al principio
// 4. Elimina al segundo invitado (índice 1) y agrega a otro en su lugar.
// 4. Muestra la lista final.

const sports = ["Soccer","Baseball"];

//const setArray = (final, initial, second, newSecond) => {
    sports.push("Bascketball");
    sports.unshift("Golf");
    sports.splice(1,1, "Tenis");
//}
console.log("Lista de deportes: ", sports.join(", "));




/*================================================================
   BLOQUE 3: ESTRUCTURAS DE DATOS - PILAS Y COLAS 
   ================================================================
   Las pilas y colas son estructuras de datos que organizan cómo se 
   almacenan y acceden a los elementos.
   1. LIFO (Last-In, First-Out) - Pila (Stack)
   Concepto: El último elemento en entrar es el primero en salir.
*/
// Navegamos a sitios (push)
const historyStack = [];
historyStack.push("google.com");
historyStack.push("youtube.com");
historyStack.push("github.com");
console.log("Historial actual:", historyStack);



/*   2. FIFO (First-In, First-Out) - Cola (Queue)
   Concepto: El primer elemento en entrar es el primero en salir.
*/
const printQueue = [];
printQueue.push("thesis.pdf");
printQueue.push("meme.png");
printQueue.push("invoice.docx");
console.log("Cola de impresión:", printQueue); // ["thesis.pdf", "meme.png", "invoice.docx"]
// La impresora termina el primer trabajo (shift)
const printingNow = printQueue.shift();
console.log(`Imprimiendo: ${printingNow}`); // thesis.pdf (El primero que llegó)

/* ================================================================
 Ejercicio:
   Crea un array llamado 'taskList' para gestionar tareas.
   1. Agrega 3 tareas usando 'push'.
   2. Muestra la lista completa de tareas.
   3. Las tareas normales se atienden en orden de llegada (FIFO)
   4. No dan un tarea URGENTE que debe ser atendido inmediatamente.
    Por lo que debes poner al inicio de la lista.
   5. Muestra la lista actualizada.
   6. Atiende (elimina) la primera tarea de la lista y muéstrala.
*/

/* ================================================================
 Ejercicio:
   Crea un array llamado 'taskList' para gestionar tareas.
   1. Agrega 3 tareas usando 'push'.
   2. Muestra la lista completa de tareas.
   3. Las tareas normales se atienden en orden de llegada (FIFO)
   3.1 Retira (elimina) la primera tarea de la lista y muéstrala.
   4. No dan un tarea URGENTE que debe ser atendido inmediatamente.
    Por lo que debes poner al inicio de la lista.
   5. Muestra la lista actualizada.
   6. Atiende (elimina) la primera tarea de la lista y muéstrala.
*/

const tasckList = [];
tasckList.push("Barrer");
tasckList.push("Trapear");
tasckList.push("Acomodar"); // Se agregaron 3 elementos al arreglo con el metodo push

console.log("Tareas: "+ tasckList); // Se muestran en consola los 3 elementos del arreglo

tasckList.shift(); // Se elimina el primer elemento del arreglo con el metodo shift

console.log("Tareas: "+ tasckList); // Se muestran en consola los elementos del arreglo, ya no aparece el que era el primer elemento

tasckList.unshift("Cocinar"); // Se añade un nuevo elemento al inicio de la cola

console.log("Tareas: "+ tasckList); // Se muestran en consola los elementos del arreglo, ahora con el elemento cocinar como primer elemento 

tasckList.shift(); // Se elimina el primer elemento con el metodo shift

console.log("Tareas: "+ tasckList); // Se muestra en consola el arreglo como quedo al final ahora solo con 2 elementos



// ------------------- Uso de break en ciclos ----------------------------
// break detiene la ejecución de la iteración en curso y termina el ciclo.
for(let i = 1; i <=10 ; i++ ) {
    if(i === 6) {
        console.log("¡Se alcanzó el número 6");
        break; 
    }
      console.log(`(con break) Número ${i}`);
}


// =============================================
let iteracion = 0;
for (  ;   ;  ){
    console.log( `Núm de iteración: ${iteracion}` ); // 0 , 1, 2, 3, 4
    iteracion++;
    if ( iteracion === 5 ){
        break;
    }
}

// =====================================================
let myIteration; 
for (myIteration = 0; myIteration <= 5; myIteration++) {
    console.log("For loop", myIteration ); // 0 , 1, 2
     if( myIteration === 2) break;  
}
console.log("Final", myIteration); //  2

// =====================================================
 let jiteration;
for ( jiteration = 0; jiteration < 3; jiteration++ ) {
   console.log("For loop", jiteration ); //
}
console.log("Final", jiteration); //



// =====================================================
let k;
for ( k = 0; k < 5; k++ ); 
{
   console.log("Valor de", k ); // 5
}
console.log("Final", k); // 5




// --- 2. Ciclo WHILE (Basado en condición) ---
// Úsalo cuando NO sabes cuántas veces se repetirá, depende de algo externo.
// Cuidado: Si la condición nunca es falsa, creas un bucle infinito (Infinite Loop).
/*
while(  confirm("¿Quieres tu número de la suerte")  ){
    const numeroSuerte = Math.random(); // 0....1.0(sin incluir 1.0)
    console.log("Tu número de la suerte es: " + numeroSuerte);
}
console.log("Gracias por participar");*/


// Imprimier los números del 1 al 5 (usando WHILE)
for(let i = 1; i <=5 ; i++ ) {
    console.log(`Número ${i}`);
}

let i = 1;
while (i <= 5)
{
    console.log("Valor de i: ", i)
    i++;
}


const countries = ["México", "USA", "Canadá", "Japón"];
// Usando FOR LOOP
for (let index = 0; index < countries.length; index++) {
   const element = countries[index];
   console.log(`(for) País en índice ${index}: ${element}`);   
}

//Si no se requieren los indices, podemos uilizar un for of en vez de un for normal con el array.length

for(const country of countries)
{
    console.log(`(for of) Pais ${country}`);
}


// TODO: RETO FINAL (Simulación de Cajero)
// Tienes un array de movimientos: [100.00, -50.00, 200.00, -100.00]
// 1. Usa un ciclo FOR, o WHILE o FOR-OF para recorrer los movimientos.
// 2. Suma los valores a una variable 'totalBalance'.
// 3. Imprime el balance final.
const transactions = [100.00, -50.00, 200.00, -100.00, 500.00];
let totalBalance = 0;

for(let i = 0; i < transactions.length; i++)
{
    totalBalance += transactions[i];
    //console.log(totalBalance);
}

console.log(`El balance final es: ${totalBalance}`);