
interface User {
    name: string,
    age: number
}

const roni : User = {
    name:'roni',
    age: 25
}

const joni : User = {
    name:'joni',
    age: 25
}

function printEmployee(employee: User): void {
    console.log(`Name: ${employee.name}, Age: ${employee.age}`);
}

printEmployee({name: 'shanto', age: 25});

