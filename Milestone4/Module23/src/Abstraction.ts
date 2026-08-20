
abstract class Shape{
   abstract area():number
   
   describe(){
    console.log('oke ');
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




