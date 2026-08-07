/*
    problem : custom sort - descending numbers

    sortDescending(nums) - sort an array of numbers from largest to smallest, using a comparator callback passed to. sort(). Return a NEW array - don't mutate the original nums array.

    Input: [1,10,2,25,3]
    output: [25,10,3,2,1]
*/

const sortDescending = (nums) => {
    let newNum = [...nums]
    let sortNum = newNum.sort((a,b)=>{
      return   b - a
    })

    console.log(sortNum);
    
}
let original = [1,10,2,25,3]

console.log(sortDescending(original));

console.log(original);

