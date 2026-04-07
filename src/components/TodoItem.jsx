import { useState } from "react";

function TodoItem({ todo, onDelete, onToggle, onUpdate }) {
    const[isEditing, setIsEditing] = useState(false);
    const[text, setText] = useState(todo.text);

    const handleSave = () => {
    if (!text.trim()) return;
    onUpdate(todo.id, text);
    setIsEditing(false);
    };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSave();
    if (e.key === "Escape") setIsEditing(false);
  };


    return (
    <li className="list-group-item d-flex justify-content-between align-items-center gap-2">
      <input
        type="checkbox"
        className="form-check-input flex-shrink-0"
        checked={todo.completed}
        onChange={onToggle}
      />

      {isEditing ? (
        <input
          type="text"
          className="form-control form-control-sm flex-grow-1"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      ) : (
        <span className="flex-grow-1 text-start" style={{
          textDecoration: todo.completed ? "line-through" : "none",
          wordBreak: "break-word",
        }}>
          {todo.text}
        </span>
      )}

      <div className="d-flex gap-1 flex-shrink-0">
        {isEditing ? (
          <>
            <button className="btn btn-sm btn-success" onClick={handleSave}>Save</button>
            <button className="btn btn-sm btn-secondary" onClick={() => setIsEditing(false)}>Cancel</button>
          </>
        ) : (
          <>
            <button className="btn btn-sm btn-secondary" onClick={() => setIsEditing(true)}>Edit</button>
            <button className="btn btn-sm btn-danger" onClick={onDelete}>Delete</button>
          </>
        )}
      </div>
    </li>
  );
}

export default TodoItem;