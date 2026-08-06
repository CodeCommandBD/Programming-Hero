/*
    Problem: Arrow Function with Multiple Conditions
    Write an arrow function that assigns a grade based on marks . 90+ -> "A+" , 80 - 89 ->"A" , 60-79 -> "B", below 60 -> "Fail"
*/

const getGrade = (mark)=>{
    if(mark >= 90){
        return "A+"
    }else if(mark >=80){
        return "A"
    }else if(mark >=60){
        return "B"
    }else{
        return "Fail"
    }
}

console.log(getGrade(50));
