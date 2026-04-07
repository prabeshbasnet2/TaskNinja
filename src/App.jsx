import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import logo from "./assets/taskninja.jpg";

function App() {
  const [todos, setTodos] = useState(() => {
  const storedTodos = localStorage.getItem("todos");
  if (!storedTodos) return [];

  return JSON.parse(storedTodos).map((todo) => ({
    ...todo,
    id: todo.id ?? Date.now() + Math.random(), // patch for old missing ids
  }));
});

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    setTodos((prev) => [...prev, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, newText) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <img src={logo} alt="Logo" className="img-fluid" />
          <TodoInput onAdd={addTodo} />
          <TodoList
            todos={todos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onUpdate={updateTodo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;