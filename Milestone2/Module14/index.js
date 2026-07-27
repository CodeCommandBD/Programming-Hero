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



console.log("=======================");
console.log("=======================");

// =========== Bug four ===========
// =========== Bug four ===========


// return the sum of all number from 1 to n (inclusive)
function sumRange(n){
    for(let i=1; i < n ; i++){ // only use less than  . but we should use less than or equal <=
        let total = 0; // we cannot defined variable in the loop
        total += i;
        return total; // we cannot use return in the loop
    }

}

console.log(sumRange(5));


console.log("=======================");
console.log("=======================");

// =========== Bug five ===========
// =========== Bug five ===========

// return the sum of all number in the array

function sumArry(num){
    let total= 0;
    for(let i = 0; i <= num.length; i++){  // akhane <= dewa te 0 1 2 3 ei 4ta value print hobe jar ses value undefined then jokhon undefined.toFixed(2) hobe tkhn e error. solve hocce i < num.lenght.

        total += num[i].toFixed(2)   //toFixed use korle string e convert hoy. tai Number e wrap kore number e conver kore dite hobe Number(num[i].toFixed(2))
    }
    return total
}

// console.log(sumArry([10,20,20.2244 ]));

console.log("=======================");
console.log("=======================");

// =========== Bug six ===========
// =========== Bug six ===========


// count how many even numbers are present in the array


function countEven(num){
    let count = 0;
    for(let i = 0; i < num.length; i++){ //akhane comma use kora jabe na semicolne use korte hobe
        if(num[i] % 2 === 0){
            count++;
            i++ // ei i++ remove kore dite hobe 
        }
    }
    return count;
}

console.log(countEven([2,5,4,7,8,10]));



console.log("=======================");
console.log("=======================");

// =========== Bug seven ===========
// =========== Bug seven ===========

// problem one: getLastTwo(arr)
// purpose: should return the last 2 elements of the array as a new array 

//function getLastTwo(arr)={ // function e equal use kora jay na
    //return arr.slice(arr.length -1 , arr.length ) // ekhne length -2  hobe last duita element dorte gele
    //return result.toUpperCase(); // 2nd time return not working
// }

// console.log(getLastTwo([10,20,30,40]));


//  Problem 2: findIndexOfValue(arr, target)
//  purpose: should return the index of target inside arr, or -1 if not found.

function findIndexOfValue(arr, target){
    for(let i = 0; i <=arr.length; i++){
        if(arr[i].toString() === target.toString()){
            return i;
        }
    }
    return -1;
}

console.log(findIndexOfValue([10,20,30], 10));
