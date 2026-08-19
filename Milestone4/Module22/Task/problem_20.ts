// Define a User type or interface where the name (string) property is required, but the email (string) property is optional.

// Write a function that accepts this User object as a parameter.

// The function should print the user's name and email. If the email is missing, it should print "Not provided" instead.

// Input 1: { name: "Amina" }
// Expected Output 1: "Name: Amina, Email: Not provided"

// Input 2: { name: "Rahim", email: "rahim@mail.com" }
// Expected Output 2: "Name: Rahim, Email: rahim@mail.com"



interface User { 
    name: string
    email?: string
}

const info = (item: User):string => {
    if(!item.email){
        return `Name: ${item.name}, Email: Not provided`
    }else{
        return `Name: ${item.name}, Email: ${item.email}`
    }
}

console.log(info({name: "Amina"}));
