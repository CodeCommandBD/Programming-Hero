const userObj: {
  name: string;
  email?: string;
} = {
  name: "Amina",
};

if (userObj.email) {
  console.log(`Name: ${userObj.name} Email: ${userObj.email}`);
} else {
  console.log(`Name: ${userObj.name} Email: Not Provided`);
}
