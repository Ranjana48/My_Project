import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import Items from "./components/Items";
import "./App.css";
function App() {
  const todo_items = [
    {
      name: "Buy Milk",
      Date: "4/10/2024",
    },

    {
      name: "Go to College",
      Date: "4/10/2024",
    },
    {
      name: "Start study",
      Date: "right now",
    },
  ];

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <Items todo_items={todo_items} />
    </center>
  );
}

export default App;
