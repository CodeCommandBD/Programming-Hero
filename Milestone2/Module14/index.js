// =========== Bug one ===========
// =========== Bug one ===========

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

console.log("=======================");
console.log("=======================");



// =========== Bug two ===========
// =========== Bug two ===========

//  broken conditional (2) 

function canApply(age, hasNID){
    if(age == 18 || hasNID){  // here we used or oparetor . it is not correct
        return "Eligible"
    }
    return "not Eligible"
}

// console.log(canApply(15, true));

// ========= solve ==============
// ========= solve ==============

function canApply2(age, hasNID){
    if(age >= 18 && hasNID){  
        return "Eligible"
    }
    return "not Eligible"
}


console.log(canApply2(19, true));


console.log("=======================");
console.log("=======================");

// =========== Bug three ===========
// =========== Bug three ===========

// condition
// -- scholarship: 90% or more attendance AND 80 or more assignment marks.
// -- Final Exam: 80% or more attendance AND 50 or more assignment marks.
//  -- otherwise, not Eligible .

function canAttendFinalExam(attendance, assignmentMark){
    if(attendance > 90 && assignmentMark > 80){ // here we use only greater than only . we sholud use >= .
        return "eligible with scholarship"
    }else if(attendance > 80 || assignmentMark > 50){ // here we use only greater than and use or oparetor . thats why wrong . solve is use >= and also use &&
        return "Eligible for Final Exam";
    }else{
        return "Not Eligible"
    }
}

console.log(canAttendFinalExam(90, 80));

