let string1 = "Amor";
let string2 = "Rom a";

// CONVERTIR EL STRING EN MAYUSCULAS USADO TOUPPERCASE() 
// Y LUEGO SEPARAR LOS ELEMENTOS EN UN ARRAY  CON SPLIT ()

let upperCaseString1 = string1.toUpperCase().split("");
let upperCaseString2 = string2.toUpperCase().split("");

//console.log(upperCaseString1)
//console.log(upperCaseString2)

// CREAR ARRAYS SIN ELEMENTOS VACIOS USANDO FILTER()

let array1 = upperCaseString1.filter(upperCaseString1 => upperCaseString1 != " " ).sort()
let array2 = upperCaseString2.filter(upperCaseString2 => upperCaseString2 != " " ).sort()

console.log(array1)
console.log(array2)

// COMPARAR EL LENGTH DE LOS ARREGLOS, SI NO SON IGUALES LA CONSOLA MUESTRA "FALSE"

if( array1.length !== array2.length) {
    console.log(false)
    console.log("No es anagrama")
} else {
    for ( i = 0 ; i < array1.length ; i++) {
        array1[i] === array2[i];
    }
    console.log(true)
    console.log("Es anagrama")
}