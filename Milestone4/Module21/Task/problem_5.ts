
const info = (data:{name: string, email?: string}):string  => {
    
    return `Name: ${data.name} Email: ${data.email || "Not provided"} `

}

const userInfo = {
    name: 'shanto',
    email: 'shan@gmail.com'
}

console.log(info(userInfo));
