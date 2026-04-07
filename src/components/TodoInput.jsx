import { useState } from "react";

function TodoInput({onAdd}){
    const[text, setText] = useState("");

    const handleAdd = () => {
        if(!text.trim()) return;

        onAdd(text);
        setText("");
    }

    const handleKeyDown = (e) => {
    if (e.key === "Enter") handleAdd();
  };

    return (
    <div className="input-group mb-3">
    <input
        type="text"
        className="form-control"
        placeholder="Enter task"
        value={text}
        onKeyDown={handleKeyDown}
        onChange={(e) => setText(e.target.value)
        }
    />
    <button className="btn btn-primary" onClick={handleAdd}>
        Add
    </button>
    </div>
  );
}

export default TodoInput;