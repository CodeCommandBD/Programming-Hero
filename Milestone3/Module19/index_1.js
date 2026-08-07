/*
    Problem: user lookup by id

    finduserById(users, id) - find and return the single user object whose id matches. If no user matchs, return "user not found"

    Input: 
        users = [
            {id: 1, name: "Rafi"},
            {id: 2, name: "karim"},
        ]
*/


const finduserById = (users, id) => {
    let findId = users.find((user)=>{       
        return user.id === id
    })
    return findId
}


const users = [
  { id: 1, name: "Rafi" },
  { id: 2, name: "karim" },
];

console.log(finduserById(users, 2));
