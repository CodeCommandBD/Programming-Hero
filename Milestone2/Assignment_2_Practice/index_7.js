// A-07  —  Student Report Card Generator         🟡 Medium


// Concepts Used:  Objects · Functions · Conditionals
// Scenario:  Given a single student object with name and three subject marks (bangla, english, math), write a function generateReportCard(student) that returns a NEW object containing the student's name, total, average, and grade (A+ for 90+, A for 80+, B for 70+, F below 70).
// Return "Invalid" if:
// student is not an object
// bangla is not a number
// english is not a number
// math is not a number

// Expected Output:
//    student = { name:'Ayan', bangla:78, english:85, math:92 }
//    Report: { name:'Ayan', total:255, average:85, grade:'A' }

// Hints:
//   1.  Access marks with student.bangla, student.english, student.math
//   2.  Build and return a brand-new object — don't modify the original student object



function generateReportCard(student){
    if(typeof student !== "object" || Array.isArray(student) || student === null){
        return "Invalid"
    }else if(typeof student.bangla !== 'number' || typeof student.english !== 'number' || typeof student.math !== 'number'){
        return "Invlid"
    }
    let sum = 0

    for(let key in student){
       
    }
    console.log(sum);
    

    return{
        name: student.name,
        total: student,
    }

    
    
}
const student = { name:'Ayan', bangla:78, english:85, math:92 }

console.log(generateReportCard(student));
