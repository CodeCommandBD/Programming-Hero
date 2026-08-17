const person = ({
  name,
  age,
  ...rest
}: {
  name: string;
  age: number;
  [key: string]: any;
}) => {
  return `
Name: ${name}
Age: ${age}
email: ${rest.email}
skills: ${rest.skills.join(", ")}
active: ${rest.active}
    `;
};

const userInfos = {
  name: "Amina",
  age: 22,
  email: "amina@email.com",
  skills: ["HTML", "CSS", "TypeScript"],
  active: true,
};

console.log(person(userInfos));
