import { useState } from "react";
import { Title } from "./components/Title";
// import ToDo from "./components/ToDo/ToDo";
import ToDoInputs from "./components/ToDoInput/ToDoInputs";
import ToDoList from "./components/ToDoList/ToDoList";

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (title) => {
    const lastId = todos.length > 0 ? todos[todos.length - 1].id : 0;

    const newTodo = {
      id: lastId +1,
      title,
      completed: false
    }
    const todoList = [...todos]
    todoList.push(newTodo);
    setTodos(todoList);
  }

  return (
    <div className="bg-gray-900 min-h-screen h-full font-roboto text-gray-100 flex items-center justify-center py-20 px-5">
      <div className="container flex flex-col max-w-xl">
        <Title />
        <ToDoInputs addTodo={addTodo}/>
        <ToDoList todos={todos} />
      </div>
    </div>
  );
}

export default App;