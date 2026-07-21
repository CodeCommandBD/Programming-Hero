// 1. Create an array with 3 items of your choice. Log it.
const arr = ["one", "two", "three"];

console.log(arr);

console.log("===========");
console.log("===========");

// 2. Log the length of the array from Task 1.
// Expected: 3

const arr2 = ["one", "two", "three"];

console.log(arr2.length);

console.log("===========");
console.log("===========");

// 3. Log the item at index 0 and index 2 of the array.

const arr3 = ["one", "two", "three"];

console.log(arr3[0]);
console.log(arr3[2]);

console.log("===========");
console.log("===========");

// 4. Change the item at index 1 to a new value. Log the array.

const arr4 = ["one", "two", "three"];

arr4[1] = "four";

console.log(arr4);

console.log("===========");
console.log("===========");

// 5. Add one item to the end of the array. Log the array.

const arr5 = ["one", "two", "three"];

arr5.push("four");

console.log(arr5);

console.log("===========");
console.log("===========");

// 6. Remove the last item from the array. Log the array and the removed value.

const arr6 = ["one", "two", "three"];

arr6.pop();

console.log(arr6);

console.log("===========");
console.log("===========");

// 7. Add one item to the start of the array. Log the array.

const arr7 = ["one", "two", "three"];

arr7.unshift("zero");

console.log(arr7);

console.log("===========");
console.log("===========");

// 8. Remove the first item from the array. Log the array and the removed value.

const arr8 = ["one", "two", "three"];

arr8.shift();

console.log(arr8);

console.log("===========");
console.log("===========");

// 9. Check whether the array contains a specific value. Log true or false.

const arr9 = ["one", "two", "three"];

console.log(arr9.includes("two"));

console.log("===========");
console.log("===========");

// 10. Find the position of a specific value in the array. Log the number.

const arr10 = ["one", "two", "three"];

console.log(arr10.indexOf("two"));

console.log("===========");
console.log("===========");

// 11. Loop through the array with a for loop and log each item.

const arr11 = ["one", "two", "three"];

for (let i = 0; i < arr11.length; i++) {
  console.log(arr11[i]);
}

console.log("===========");
console.log("===========");

// 12. Loop through the array with a while loop and log each item.

const arr12 = ["one", "two", "three"];

let item = 0;

while (item < arr12.length) {
  console.log(arr12[item]);
  item++;
}

// ##################################### Intermediate #######################################
// ##################################### Intermediate #######################################
// ##################################### Intermediate #######################################

// 1. Combine two arrays into one new array. Log the result.

const array1 = ["one", "two", "three"];
const array2 = ["four", "five", "six"];

console.log(array1.concat(array2));

console.log("===========");
console.log("===========");

// 2. Take a portion of an array (not the whole thing) without changing the original. Log the result.

const array3 = ["four", "five", "six", "seven", "eight", "nine"];

console.log(array3.slice(2, 4));

console.log("===========");
console.log("===========");

// 3. Turn an array of words into a single sentence string.
// Expected: a string like "word word word"

const array4 = ["my", "name", "is", "shanto"];

console.log(array4.join(" "));

console.log("===========");
console.log("===========");
// 4. Check two variables (one array, one not) and log whether each is an array.
// Expected: true then false, or false then true depending on order
const array5 = ["my", "name", "is", "shanto"];
const array6 = "not an array";

console.log(Array.isArray(array5));
console.log(Array.isArray(array6));

console.log("===========");
console.log("===========");

// 5. Reverse an array of at least 5 items. Log the result.

const array7 = ["my", "name", "is", "shanto", "kumar"];

console.log(array7.reverse());

console.log("===========");
console.log("===========");

// 6. Sort an array of names alphabetically. Log the result.

const array8 = ["my", "name", "is", "shanto", "kumar"];

console.log(array8.sort());

console.log("===========");
console.log("===========");

// 7. Sort an array of numbers in ascending order, keeping numeric order correct (not string order).

const numarr = [5, 4, 2, 4, 8, 6, 4, 2, 5];

numarr.sort((a, b) => a - b);

console.log(numarr);

console.log("===========");
console.log("===========");

// 8. Given an array of numbers, log only the values greater than 10, using a loop.

const numarr2 = [5, 41, 20, 45, 80, 16, 44, 2, 5];

numarr2.forEach((value) => {
  if (value > 10) {
    console.log(value);
  }
});
console.log("===========");

for (const num of numarr2) {
  if (num > 10) {
    console.log(num);
  }
}

console.log("===========");
console.log("===========");

// 9. Given an array of numbers, calculate and log the total sum, using a loop.

const numar3 = [5, 6, 4, 2, 8];

let sum = 0;
let sum2 = 0;
let sum3 = 0;

for (let i = 0; i < numar3.length; i++) {
  sum += numar3[i];
}

console.log(sum);

console.log("===========");

numar3.forEach((value) => {
  sum2 += value;
});
console.log(sum2);

console.log("===========");

for (let add of numar3) {
  sum3 += add;
}

console.log(sum3);

console.log("===========");
console.log("===========");

// ############################### Advanced ##################################
// ############################### Advanced ##################################
// ############################### Advanced ##################################

// 1. Given an array of numbers, remove duplicates and log the unique values only.

const numar4 = [5, 6, 4, 2, 8, 5, 4];

let realdata = [];

numar4.forEach((value) => {
  if (!realdata.includes(value)) {
    realdata.push(value);
  }
});

console.log(realdata);

console.log("===========");
console.log("===========");

// 2. Given an array of mixed values (numbers and strings), separate them into two arrays and log both.

const allThings = [5,6,4,'shanto', 'kumar','das',6,4,'my', 'name']

let numStore = [];
let charStore = [];

allThings.forEach((value)=>{
    if(typeof value === "string"){
        charStore.push(value)
    }else if(typeof value === "number"){
        numStore.push(value)
    }
})

console.log(charStore);
console.log(numStore);

console.log("===========");
console.log("===========");

// 3. Given an array of numbers, find the largest and smallest value without using Math.max or Math.min directly on the whole array (use a loop).

const numar5 = [5, 6, 4, 2, 8, 10, 15];

let largestNum = numar5[0]
let smallestNum = numar5[0]

for(let num of numar5){
    if(num > largestNum){
        largestNum = num
    }else if(num < smallestNum){
        smallestNum = num
    }
}

console.log(largestNum);
console.log(smallestNum);


console.log("===========");
console.log("===========")

// 4. Flatten a nested array (array containing arrays) into a single flat array.
// Expected: [1,2,3,4,5,6] from something like [1,[2,3],[4,[5,6]]]

// builin method 
const arr15 = [1,[2,3],[4,[5,6]]]
console.log(arr15.flat(Infinity));

console.log("===========");
console.log("===========")

// 5. Rotate an array left by one position (first item moves to the end). Log the result.
// Expected: [2,3,4,5,1] from [1,2,3,4,5]

const position = [1,2,3,4,5]

let joinposi = position.shift()

position.push(joinposi)

console.log(position);

