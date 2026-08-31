interface userCardType {
    name: string
    isLoading: boolean
}

const UserCard = ({name, isLoading}:userCardType) => {
  return (
    <div>
        <h2>{name}</h2>
    </div>
  )
}

export default UserCard