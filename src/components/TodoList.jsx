import TodoItem from "./TodoItem";

function TodoList({todos, onDelete, onToggle}){
return(
<ul className="list-group">
    {todos.map((todo, i) => 
    <TodoItem key={i} todo={todo}
        onDelete={() => onDelete(i)} 
        onToggle={() => onToggle(i)} 
        />
    )}
    </ul>
    );
}
export default TodoList;