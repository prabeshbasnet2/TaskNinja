import TodoItem from "./TodoItem";

function TodoList({ todos, onDelete, onToggle, onUpdate }) {
  return (
    <ul className="list-group">
      {todos.map((todo) =>          
        <TodoItem key={todo.id} todo={todo}
          onDelete={() => onDelete(todo.id)}   
          onToggle={() => onToggle(todo.id)}  
          onUpdate={onUpdate}
        />
      )}
    </ul>
  );
}

export default TodoList;