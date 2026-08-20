type Role = "admin" | "editor" | 'viewer'

const canEdit = ( user: Role): boolean =>{
    if(user === "admin" || user === "editor") return true
    return false
}

console.log(canEdit('admin'));
console.log(canEdit('editor'));
console.log(canEdit('viewer'));
