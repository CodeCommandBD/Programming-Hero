class Student {
    name: string;
    email: string;
    age: number

    constructor(name:string,email: string, age: number){
        this.name = name,
        this.email =email,
        this.age = age
    }

}

const rafi = new Student("rafi", "rafi@gmail.com",26)

console.log(rafi);
