function grid (x, y, width, length) {
    let line=""
    for(l = 1 ; l <= length ; l++){
    if(l%2 || 0) { 
        for(w = 1 ; w <= width ; w++) {
            if(w%2 || 0) {
                line += x
            } else {
                line += y
            }
        }
    } else {
        for (w = 1; w <= width; w++) {
            if(w%2 || 0) {
                line += y
            } else {
                line += x
            }  
        }           
    }
    
} return(line)
}

console.log(grid("2", "3", 5, 5))