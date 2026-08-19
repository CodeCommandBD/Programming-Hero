
class Animal {
    private _name;

    constructor(name: string){
        this._name = name
    }

    makesound():void{
        
    }
}


class Cat extends Animal {
    makesound(): void {
        console.log('mew mew');
    }
}
const cat = new Cat ('tommy')

// console.log(cat);
// cat.makesound();


class Dog extends Animal {
    makesound(): void {
        console.log('bak bak');
    }
}
const dog = new Dog ('doggy')

// console.log(dog);
// dog.makesound();


// ===================================================
// ===================================================
// ===================================================
// ===================================================

class Shape{
    area():number{
        return 0
    }

}

class Circle extends Shape{
    radius: number

    constructor (radius: number) {
        super()
        this.radius = radius
    }

    area(): number {
        return 3.1416 * this.radius * this.radius
    }
}

const circle = new Circle(5)

console.log(circle.area());


class Rectangle extends Shape{
    height: number
    width: number


    constructor (height:number, width: number){
        super()
        this.height = height
        this.width = width
    }

    area(): number {
        return this.height * this.width
    }
}

const rectangle = new Rectangle(5, 5)

console.log(rectangle.area());
