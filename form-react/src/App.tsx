import {FormEvent, useEffect, useState} from "react";
import { BsTrash, BsBookmarkCheck, BsBookmarkCheckFill } from "react-icons/bs";
import { FaSpinner } from "react-icons/fa";
import './App.css'

interface TodoProps {
    id: number,
    title: String,
    time: String,
    done: boolean,
}

const API = "http://localhost:5000";

const App = () => {
    const [title, setTitle] = useState("");
    const [time, setTIme] = useState("");
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);

            const response = await fetch(API + "/todos")
                .then((res) => res.json())
                .then((data) => data)
                .catch((error) => console.log(error));

            setLoading(false);
            setTodos([]) //add response
        };

        loadData();
    }, []);

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        const todo = {
            id: Math.random(),
            title,
            time,
            done: false,
        };

        await fetch(API + "/todos", {
            method: "POST",
            body: JSON.stringify(todo),
            headers: {
                "Content-Type": "application/json"
            }
        });

        setTodos((prevState) => [...prevState, todo]);

        setTitle("");
        setTIme("");
    };

    const handleDelete = async (id: number) => {
        await fetch(API + "/todos/" + id, {
            method: "DELETE",
        });

        setTodos((prevState) => prevState.filter((todo: TodoProps) => todo.id !== id));
    }

    const handleEdit = async (todo: TodoProps) => {
        todo.done = !todo.done;

        const data = await fetch(API + "/todos/" + todo.id, {
            method: "PUT",
            body: JSON.stringify(todo),
            headers: {
                "Content-Type": "application/json",
            }
        });

        setTodos((prevState) => prevState.map((todo: TodoProps) => todo.id !== id));
    }

    if(loading) {
        return <FaSpinner />
    }

    return (
        <div className="app">
            <div className="todo-header">
                <h1>React Todo</h1>
            </div>
            <div className="form-todo">
                <h2>Insira a sua proxima tarefa: </h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="title">O que voce vai fazer?</label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Titulo da tarefa"
                            onChange={(event) => setTitle(event.target.value)}
                            value={title || ""}
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="time">Duracao: </label>
                        <input
                            type="text"
                            name="time"
                            placeholder="Tempo estimado (em horas)"
                            onChange={(event) => setTIme(event.target.value)}
                            value={time || ""}
                            required
                        />
                    </div>
                    <input type="submit" value="Criar tarefa" />
                </form>
            </div>
            <div className="list-todo">
                <h2>Lista de tarefas: </h2>
                {todos.length === 0 && <p>Não há tarefas!</p>}
                {todos.map((todo: TodoProps) => (
                    <div className="todo" key={todo.id}>
                        <h3 className={todo.done ? "todo-done" : ""}>{todo.title}</h3>
                        <p>Duracao: {todo.time}</p>
                        <div className="actions">
                            <span onClick={() => handleEdit(todo)}>
                                {!todo.done ? <BsBookmarkCheck /> : <BsBookmarkCheckFill />}
                            </span>
                            <BsTrash onClick={() => handleDelete(todo.id)}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App
