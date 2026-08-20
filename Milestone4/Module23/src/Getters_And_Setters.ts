class User {
    private _name: string
    private _age: number
    private _email: string

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

const rafi = new User('shanto', 25, 'shnato@gmail.com')

rafi.age = 18
console.log(rafi);
