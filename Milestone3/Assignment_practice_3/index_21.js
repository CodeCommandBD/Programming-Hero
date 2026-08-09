const generateFinalResult = (studentData, ...marks) =>{
    if(!studentData?.id){
        return "Invalid Student"
    }
    let {name, school = "Programming Hero"} = studentData
    
    let totalScore = marks.reduce((total, item)=>{
        return total + item.score
    },0)

    // console.log(totalScore);
    

    let status = ""

    if(totalScore >= 150){
        status = "Pass"
    }else{
        status = "Fail"
    }


    return `${name} from ${school} scored ${totalScore} and status is: ${status}`
    
    
}

const student1 = { id: 101, name: "Rafi" };
// Function Call:

console.log(generateFinalResult(student1, { subject: "Math", score: 80 }, { subject: "English", score: 75 }));


// Expected Output: "Rafi from Programming Hero scored 155 and status is: Pass"