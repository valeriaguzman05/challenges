let n = 3; //definir tamaño de la cuadrícula
let c = true; //inicializar el valor que vamos a togglear

for(i=0 ; i<(n*n) ; i++) { //iterar para cada número

    if((i%n)===0) { //si es el final de una fila

        console.log(); //salto de línea

        if((n&1)===0) { //chequeo de número par (0 es par, 1 es non)
            c = !c; //si la cuadrícula es de tamaño par y estamos en el final de una fila, se necesita otro toggle
        }
    }

    c = !c; //toggle
    process.stdout.write(c ? "1" : "0"); //imprimir 1 o 0 según el valor toggleado
}

console.log("\n"); //imprimir un salto de línea más para presentación