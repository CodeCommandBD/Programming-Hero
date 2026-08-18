// optional property in object type literals
// optional property in object type literals
// optional property in object type literals

const book: {
  name: string;
  author: string;
  year: number;
  isUsed?: boolean; // Optional property
} = {
  name: "1984",
  author: "George Orwell",
  year: 1948,
};
console.log("Book Name:", book.name);

// literal type in object type literals
// literal type in object type literals
// literal type in object type literals

const math: {
  pai: 3.14; // Literal type
  e: 2.71; // Literal type
} = {
  pai: 3.14,
  e: 2.71,
};
console.log("Math Constants:", math.pai, math.e);
