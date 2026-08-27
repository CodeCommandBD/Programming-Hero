interface Responses<T> {
  data: T;
  status: number;
}

const transResponse: Responses<string> = {
  data: "data",
  status: 552,
};

const transResponse2: Responses<boolean> = {
  data: true,
  status: 552,
};

const getApi = <T>(value: T): T => {
  return value;
};

console.log(getApi("shanto"));

// advance generic with coluser
const userState = <T>(init: T) => {
  let value: T = init;

  const getValue = (): T => value;

  const setValue = (newVal: T): void => {
    value = newVal;
  };

  return [getValue, setValue] as const;
};

const [counter, setCounter] = userState(0);

// console.log(counter()); // Prints: 0
// setCounter(5);           // Pass required argument
// console.log(counter()); // Prints: 5


// enum

enum Day {
    sunday,
    Moday,
    Friday
}


let offDay =  Day.Friday

console.log(offDay);

enum Role{
    Admin = 'admin'
}

console.log(Role.Admin);


// as const 

let value: unknown;
let myValue = value as string;

interface User{
    name: string;
    email: string
}
