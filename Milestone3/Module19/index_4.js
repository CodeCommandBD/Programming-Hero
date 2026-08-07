/*
    problem : Assignment life (closures)

    Real-life scenario: On Programming Hero, every student gets 3 LiVES. Each time you submit on assignment late for 60 mark, you can't submit late assignment for 60 marks. you want ONE function that can create a fresh, independent life-counter.
    
    creteLifeCounter() - returns a function. Every time you call that returned function (on a Late submission), it decreases a PRIVATE Lives count by 1 and returns the remaining lives. There is NO global variable storing  lives - it lives only  inside the closure.

    Input: 
        const rahimLives = createLifeCounter()
        rahimLives() // late submission
        rahimLives() // late submission
*/

const  creteLifeCounter = () =>{
    let count = 3

    return () =>{
      if(count > 0){
          count --
      }
      return count
    }

    
}

let rahimLives = creteLifeCounter()
let shantoLives = creteLifeCounter()
let rahulLives = creteLifeCounter()
let moriumLives = creteLifeCounter()



console.log(rahimLives());
console.log(rahimLives());

console.log(shantoLives());
console.log(shantoLives());

console.log(rahulLives());

console.log(moriumLives());





