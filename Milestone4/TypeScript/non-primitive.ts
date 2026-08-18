const numbers: number[] = [1, 2, 3, 4, 5];
const strings: string[] = ["one", "two", "three", "four", "five"];

numbers.push(6);

console.log("Numbers:", numbers);
console.log("Strings:", strings);



// object type with properties
// object type with properties
// object type with properties


const person: {
  name: string;
  age: number;
  isEmployed: boolean;
} = {
  name: "Alice",
  age: 30,
  isEmployed: true,
};

console.log("Person Age:", person.age);



// tuple type 
// tuple type 
// tuple type 

// বিভিন্ন ধরণের নির্দিষ্ট দৈর্ঘ্যের অ্যারে

const location2: [number, number] = [40.7128, -74.0060]; // Latitude and Longitude

console.log("Location:", location2);

const coordinates: [number, number, string] = [34.0522, -118.2437, "Los Angeles"]; // Latitude, Longitude, City Name

console.log("Coordinates:", coordinates);