// Problem statement:
// 1. Create a 'UserAccount' interface with userName (string), age (number), and an OPTIONAL property 'isPremium' (boolean).
// 2. Create two user objects. One should have 'isPremium: true', and the other should NOT have the 'isPremium' property at all.
// 3. Write an arrow function named 'checkStatus'. This function will take a 'UserAccount' object as a parameter.
// 4. Inside the function, use an if-else condition:
//    - If the user is premium, log: "[userName] is a Premium Member! 🎉"
//    - If the user is NOT premium (or property is missing), log: "[userName] is a Regular Member."

// Inputs to use for your objects:
// User 1: userName: "Rakib", age: 24, isPremium: true
// User 2: userName: "Siam", age: 22

// Expected Output:
// Rakib is a Premium Member! 🎉
// Siam is a Regular Member.

// Write your code below:
// ...

interface UserAccount {
  userName: string;
  age: number;
  isPremium?: boolean;
}

let user1: UserAccount = {
  userName: "Rakib",
  age: 25,
  isPremium: true,
};

let user2: UserAccount = {
  userName: "siam",
  age: 22,
};

const checkStatus = (account: UserAccount) => {
  if (!account.isPremium) {
    console.log(`${account.userName} is a Regular Member`);
  } else {
    console.log(`${account.userName} is a primium Member`);
  }
};

checkStatus(user1);
checkStatus(user2);
