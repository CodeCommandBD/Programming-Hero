// Task 2: Profile Segregator (Object Destructuring Rest + Object.entries)

// Function Name Must be: segregateProfile

// ইউজারের প্রোফাইল থেকে শুধু প্রয়োজনীয় ডেটা আলাদা করে, বাকি সব ডেটাকে একটি লিস্টে রূপান্তর করতে হবে।


const segregateProfile = (profileObj) => {
    if(!profileObj.name){
        return "Invalid Profile"
    }

    let {name , email, ...otherDetails} = profileObj

    let extraInfo = Object.entries(otherDetails).map(([key, value])=>{
        return `${key} : ${value}`
    })


    return {
        userName: name,
        extraInfo: extraInfo
    }

}

console.log(segregateProfile({name: "Rafi", email: "r@mail.com", age: 22, country: "BD"}));

console.log(segregateProfile({name: "Sadia", email: "s@mail.com"}));

console.log(segregateProfile({email: "test@mail.com", age: 30}));

