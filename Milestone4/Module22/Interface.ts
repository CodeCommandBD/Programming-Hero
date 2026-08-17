interface Students {
  name: string;
  age: number;
  email: string;
  gpa: number;
  isActive?: boolean;
}

const student3: Students = {
  name: "John Doe",
  age: 20,
  email: "johndoe@example.com",
  gpa: 3.8,
  isActive: true
};

const teams: Students[] = [
    student3,
    {
      name: "Jane Smith",
      age: 22,
      email: "janesmith@example.com",
      gpa: 3.9,
      isActive: false
    }
]