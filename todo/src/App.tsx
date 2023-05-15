import {useState} from "react";
import { Todo } from "./components/Todo";
import { TodoForm } from "./components/TodoForm";
import './App.css';


const App = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: "Criar funcionalidade X no sistema",
            category: "Trabalho",
            isCompleted: false,
        },
        {
            id: 2,
            text: "Ir para a academia",
            category: "Pessoal",
            isCompleted: false,
        },
        {
            id: 3,
            text: "Estudar React",
            category: "Estudo",
            isCompleted: false,
        }
    ]);

    const addTodo = (text: string, category: string) => {
        const newTodos = [...todos, {
          id: Math.floor(Math.random() * 100000),
          text,
          category,
          isCompleted: false
        }];

        setTodos(newTodos);
    }

    return (
    <div className="app">
        <h1>Lista de Tarefas</h1>
        <div className="todo-list">
            {todos.map((todo) => (
               <Todo key={todo.id} todo={todo} />
            ))}
        </div>
        <TodoForm addTodo={addTodo} />
    </div>
  )
}

export { App }
