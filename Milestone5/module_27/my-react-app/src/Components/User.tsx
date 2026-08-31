import UserCard from "./UserCard"

interface UserType {
    name: string,
    isLoging: boolean,
}

const users: UserType[] = [
    {name: "mora chok", isLoging: true},
    {name: "biral mara", isLoging: false},
    {name: "basor ghor", isLoging: true}
]



const User = () => {
  return (
    <div>
        {
            users.map((item)=>{
                return <div>
                        <UserCard name= {item.name} isLoading={item.isLoging}></UserCard>
                </div>
            })
        }
    </div>
  )
}

export default User