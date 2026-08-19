// Problem statement: Create HasId interface (id: number). Write findById<T extends HasId> that searches an array for a matching id. Write a call that violates the constraint and comment on the error.
// Input: [{ id: 1, name: "A" }, { id: 2, name: "B" }], search id: 2
// Output: { id: 2, name: "B" }; commented line shows constraint-violation error (e.g. passing an object without id).


interface HasId {
    id: number
}

const findById = <T extends HasId> (arr: T[], targetId: number): T | undefined =>{
    return arr.find((item)=>item.id === targetId)
} 

const items = [
    { id: 1, name: "A" }, 
    { id: 2, name: "B" }
];

console.log(findById(items, 2));