type Userprofile = [string, number]

const infor = (item: Userprofile):string => {
    return `${item[0]} is ${item[1]} years old`
}

console.log(infor(["Amina",22]));
