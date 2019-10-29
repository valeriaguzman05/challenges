let uno = "1";
let cero = "0";
let width = 6;
let length = 6; 

let gridToPrint =""; 

for(l = 1 ; l <= length ; l++){
    let line=""
    if(l%2 || 0) { 
        for(w = 1 ; w <= width ; w++) {
            if(w%2 || 0) {
                line += "0"
            } else {
                line += "1"
            }
        }
    } else {
        for (w = 1; w <= width; w++) {
            if(w%2 || 0) {
                line += "1"
            } else {
                line += "0"
            }  
        }           
    }
    gridToPrint= gridToPrint + line + "\n"
}
console.log(gridToPrint)