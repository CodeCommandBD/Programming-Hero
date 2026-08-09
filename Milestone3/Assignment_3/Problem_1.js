const studentIntroduction = (student) => {
    if(typeof student !== 'object' || student === null){
        return "Invalid"
    }
    
    let {name, age, course} = student
    
    // console.log(name);
    

    if(!name || !age || !course){
        return "Invalid"
    }

    return `My name is ${name}. I am ${age} years old. I am learning ${course}.`


}

let info = { name: "Rafi", age: 18, course: "JavaScript" };

console.log(studentIntroduction(info));
