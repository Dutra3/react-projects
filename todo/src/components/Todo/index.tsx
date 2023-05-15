
interface TodoProps {
  todo:
    {
      id: number,
      text: string,
      category: string,
      isCompleted: boolean,
    }
}

const Todo = ({ todo }: TodoProps) => {
  return (
    <div className="todo">
    <div className="content">
        <p>{todo.text}</p>
        <p className="category">({todo.category})</p>
    </div>
    <div>
        <button>Completar</button>
        <button>X</button>
    </div>
</div>
  )
}

export { Todo };