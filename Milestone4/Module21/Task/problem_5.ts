
const info = (data:{name: string, email?: string}):string  => {
    
    return `Name: ${data.name} Email: ${data.email || "Not provided"} `

}

console.log(info({name:'shnto'}));
