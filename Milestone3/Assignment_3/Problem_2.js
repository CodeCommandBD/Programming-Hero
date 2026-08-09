function filterActiveUsers(users) {
  // console.log(users.length);

  if (!Array.isArray(users) || users.length === 0) {
    return "Invalid";
  }


  for (let user of users) {
    // console.log(user.isActive);
    if (user.isActive === undefined) {
      return "Invalid";
    }
  }

  let activeUser = users.filter((user) => {
    return user.isActive === true;
  });

  return activeUser
}

let user = [
  { name: "A", isActive: true },
  { name: "B", isActive: false },
];

console.log(filterActiveUsers(user));
