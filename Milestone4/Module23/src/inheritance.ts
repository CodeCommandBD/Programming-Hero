// parent class
class User {
    private _name: string
    private _age: number
    protected _email: string

    constructor (name: string, age: number, email: string) {
        this._name = name
        this._age = age 
        this._email = email
    }

    get age(){
        return this._age
    }

    set age(age: number){
        if(age < 0 || age > 100){
            throw new Error("Age is not valid")
        }
        this._age = age
    }
}


// child class
class Student extends User {

   private _fee: number;

   constructor (name: string, age: number, email: string,fee:number) {
    super(name,age,email)
    this._fee = fee
   }
}
const studentinfo = new Student('rafi', 16, 'shanto@gmail.com', 500) 

console.log(studentinfo);
