/*let myArray = ["element1", "element2", "element3", "element4"]

 function myFunction (element, index, array) {
    console.log("element: " + element)
    console.log("Index: " + index)
    console.log("Array: " + array)
}

myArray.forEach(myFunction); */


// TESTING FOREACH

let donuts = ["Jelly donut", "chocolate donut","clasic donut","brownie donut"]

/* function holes (donut) {
    donut += " holes";
    donut = donut.toUpperCase();
    console.log(donut);
}

donuts.forEach(holes); */

//VERSION CORTA

/* donuts.forEach( (donut) => { // OTHER OPTION: FUNCTION (DONUT) 
    donut += " holes";
    donut = donut.toUpperCase();
    console.log(donut);
} ) */

let map = donuts.map( (donut) => {
    donut += " hole";
    return donut
}
)
console.log(map)

