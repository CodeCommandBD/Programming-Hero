interface Student {
    name: string
    marks: number[]
}

interface Result {
    name: string;
    avg: number;
    result: string
}
const getStudentResult = (student: Student):Result => {
    
    const total: number = student.marks.reduce((acc, item)=>{
        return acc + item
    },0)
    
    const avg: number = total / student.marks.length

    const result: string = avg >=40 ? "Passed" : "Failed"
    
    return {
        name: student.name,
        avg,
        result
    }
        
}

console.log(getStudentResult({
    name: "Rafi",
    marks: [80, 75, 90, 85]
}));


console.log(getStudentResult({
    name: "Nabil",
    marks: [30, 35, 40, 25]
}));
