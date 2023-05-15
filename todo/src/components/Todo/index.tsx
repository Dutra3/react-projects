
interface TodoProps {
  todo:
    {
      id: number,
      text: string,
      category: string,
      isCompleted: boolean,
    };
  removeTodo: (id: number) => void;
  completeTodo: (id: number) => void;
}

const Todo = ({ todo, removeTodo, completeTodo }: TodoProps) => {
  return (
    <div 
      className="todo" 
      style={{textDecoration: todo.isCompleted ? "line-through" : ""}}
    >
      <div className="content">
        <p>{todo.text}</p>
        <p className="category">({todo.category})</p>
      </div>
      <div>
        <button className="complete" onClick={() => completeTodo(todo.id)}>
          {todo.isCompleted ? "Desmarcar" : "Completar"}
        </button>
        <button className="remove" onClick={() => removeTodo(todo.id)}>X</button>
      </div>
    </div>
  );
};

export { Todo };