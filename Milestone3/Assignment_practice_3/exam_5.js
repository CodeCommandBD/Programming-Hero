/*
    problem: swap & rest extractor
    
    swap two variables and extract first/rest elements from an array using destructing, no temp variable.

    ex: [a,b] = [b,a]
    ex: [first, ...rest] = [10,20,30,40] -> first = 10 , rest =[20,30,40]
*/

const swapArr = (a, b) => {
    return [b , a]
}

const extract = (a, b,  arr) => {
        [a,b] = [b, a]

        let [first, ...rest] = arr


        return {
            swaped: [a,b],
            extractFirst: first,
            extractRest: rest
        }
        
}

console.log(extract(10,20,[30,40,50,60]));

console.log(swapArr(10,20));
