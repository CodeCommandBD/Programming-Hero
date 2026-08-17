type Student = {
  name: string;
  age: number;
  email: string;
  gpa: number;
  isActive?: boolean;
};

const student1: Student = {
  name: "John Doe",
  age: 20,
  email: "johndoe@example.com",
  gpa: 3.8,
};



type product = {
  name: string;
  price: number;
  category: string;
  inStock: boolean;
};

const product1: product[] = [
  {
    name: "Laptop",
    price: 1200,
    category: "Electronics",
    inStock: true,
  },
  {
    name: "Smartphone",
    price: 800,
    category: "Electronics",
    inStock: false,
  }
];
