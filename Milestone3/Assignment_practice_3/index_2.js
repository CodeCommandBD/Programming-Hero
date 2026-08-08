const EmployeeProfileGenerator = (profileMsg) => {

    if(typeof profileMsg !== 'object' || !profileMsg.name || !profileMsg.age || !profileMsg.department){
        return "Invalid"
    }

    return `My name is ${profileMsg.name}. I am ${profileMsg.age} years old. I work in ${profileMsg.department}`

};

let employeeProfile = {
  name: "Jodu",
  age: 25,
  department: "Marketing",
};

console.log(EmployeeProfileGenerator(employeeProfile));
