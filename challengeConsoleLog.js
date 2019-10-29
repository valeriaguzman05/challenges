let uno = "1";
let cero = "0";
let width = 10;
let length = 5; 

for(l = 1 ; l <= length ; l++){
    let line=""
    if(l%2 !== 0) { 
        for(w = 1 ; w <= width ; w++) {
            if(w%2 !== 0) {
                line += cero
            } else {
                line += uno
            }
        }
    } else {
        for (w = 1; w <= width; w++) {
            if(w%2 !== 0) {
                line += uno
            } else {
                line += cero
            }  
        }           
    }
    console.log(line)
}
