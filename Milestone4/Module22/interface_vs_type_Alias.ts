type userRole = "admin" | "user" | "Guest"

interface User {
    name:string,
    role: userRole,
    email: string
}

