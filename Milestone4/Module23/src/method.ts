class Student {
    name: string;
    email: string;
    age: number

    constructor(name:string,email: string, age: number){
        this.name = name,
        this.email =email,
        this.age = age
    }

    getInfo(): string{
        const info = `name: ${this.name}\nEmail: ${this.email}`

        return  info
    }

}

const rafi = new Student("rafi", "rafi@gmail.com",26)
const sadia = new Student("sadia", "sadia@gmail.com",25)

console.log(sadia);
console.log(sadia.getInfo());



/*
    Tea store
*/

class TeaStore {
    title: string
    soldItems:any = []

    constructor (title: string){
        this.title = title
    }

    buy(name:string, price:number){
        this.soldItems.push({name, price})
    }

    totalsold(){
        const total = this.soldItems.reduce((acc:number, item:any)=>{
            return acc + item.price
        },0)
        return total
    }
}

const shop1 = new TeaStore("adda")

shop1.buy('Tea',150)
shop1.buy('cake',250)

console.log(shop1.totalsold());
