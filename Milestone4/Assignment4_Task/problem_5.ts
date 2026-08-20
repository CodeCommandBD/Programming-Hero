
interface Employee {
    name: string
    onDuty: boolean
}

const findOnDutyEmployees = (emplyee: Employee[]):Employee[] =>{
    const onDutyEmp:Employee[] = emplyee.filter((emp)=>{
        emp.onDuty === true
    })
    return onDutyEmp
}

console.log(findOnDutyEmployees([{name: "hamia", onDuty: true}, {name: 'mula', onDuty: false}]));
