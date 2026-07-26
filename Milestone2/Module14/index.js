// Bug one 

function checkAduit(age){
    if(age = 18){   // bug here we use assignment oparetor witch value set in age
        return "adult"
    }

    return "minor"
}

console.log(checkAduit(19));


// ========= solve ==============
// ========= solve ==============

function checkAduit2(age){
    if(age >= 18){   
        return "adult"
    }

    return "minor"
}

console.log(checkAduit2(15));