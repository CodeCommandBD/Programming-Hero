
let val2:unknown = ["TypeScript", "is", "awesome"];

let result: string = (val2 as string[]).join(' ')

console.log(result);

let result2: string = (<string[]>val2).join(' ')

console.log(result2);
