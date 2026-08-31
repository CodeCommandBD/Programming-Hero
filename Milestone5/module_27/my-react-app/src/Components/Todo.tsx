
interface TodoType{
    name: string
    isDone: boolean
}

const Todo = ({name, isDone}: TodoType) => {
 return isDone === true ? <h3>{name} </h3>: <p>not working</p>
}

export default Todo