const extractUserInfo = (api) => {
  const {
    user: { name, age },
    hobbies: [firstHobby = "nothing yet"],
  } = api;

  if (!name) {
    return "Invalid";
  }

  return `${name} (${age}) likes ${firstHobby}`
};

let api = extractUserInfo({
  user: { name: "Sadia", age: 22 },
  hobbies: ["reading", "coding"],
});
let api2 = extractUserInfo({
  user: { name: "moniya", age: 22 },
  hobbies: []
});

console.log(api);
console.log(api2);
