import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import logo from "./assets/taskninja.jpg";

function App() {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    setTodos((prev) => [...prev, { text, completed: false }]);
  };

  const toggleTodo = (index) => {
    setTodos((prev) =>
      prev.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (index) => {
    setTodos((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <img src={logo} alt="Logo" className="img-fluid" />
          <TodoInput onAdd={addTodo} />
          <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
// import { useEffect, useState } from "react";
// import Button from "./components/Button";


// function App() {
//   useEffect(() => {console.log("Component Mounted");})

//   const[age, setAge] = useState(0);
//   const[name, setName] = useState("");
//   return (
//     <div>
//       <h1>Guess {name}'s age</h1>
//       <h2>Hello {name}</h2>
//       <div class="mb-5">
//       <input type="text" placeholder="set name" value={name} onChange={(e) => setName(e.target.value)}/>
//       <p>{age}</p>
//       </div>

//       <div class = "m-5">
//       <input type="number" placeholder="input age" value={age} onChange={(e) => setAge(e.target.value)}/>
//       <br />
//       <Button label="Increase Age" onClick={() => setAge(age + 1)}></Button>
//       <br />
//       <Button label="Decrease Age" onClick={() => setAge(age - 1)}></Button>
//       <br />
//       <Button label="Reset Age!" onClick={() => setAge(age - age)}></Button>
//       </div>

//       <div class="m-5">
//       {age == 28 ? <p class="text-danger">You guessed correctly </p> : <p class="text-success">Nope!</p>}
//       </div>
//     </div>
//   );
// }

// export default App;