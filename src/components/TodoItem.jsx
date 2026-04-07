function TodoItem({ todo, onDelete, onToggle }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
    
    <div className="d-flex align-items-center">
        <input
        type="checkbox"
        className="form-check-input me-2"
        checked={todo.completed}
        onChange={onToggle}
        />

        <span
        style={{
            textDecoration: todo.completed ? "line-through" : "none",
        }}
        >
        {todo.text}
        </span>
    </div>

    <button className="btn btn-sm btn-danger" onClick={onDelete}>
        Delete
    </button>

    </li>
  );
}

export default TodoItem;