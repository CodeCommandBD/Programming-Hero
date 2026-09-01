import "./App.css";
import Todo from "./Components/Todo";
import Book from "./Components/Book";
import User from "./Components/User";

function App() {
  const studentStyle = {
    margin: "50px",
    border: "2px solid red",
    borderRadius: "10px",
    padding: "10px",
  };
  const book = ["one", "math", "eng"];
  return (
    <>
      <div style={studentStyle}>
        <User></User>
        <Todo name="did you took tea?" isDone={false}></Todo>
        <Todo name="facebook scrolling" isDone={true}></Todo>
        {book.map((item) => {
          return (
            <div key={item}>
              <Book name={item}></Book>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
