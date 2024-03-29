import { useState } from "react";

interface TodoFormProps {
	addTodo: (value: string, category: string) => void;
}

const TodoForm = ({ addTodo }: TodoFormProps) => {
	const [value, setValue] = useState("");
	const [category, setCategory] = useState("");

	const handleSubmit = (event: { preventDefault: () => void; }) => {
		event.preventDefault();
		if (!value || !category) {
			return;
		}

		addTodo(value, category);
		setValue("");
		setCategory("");
	};

	return (
		<div className="todo-form">
			<h2>Criar tarefa:</h2>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Digite o titulo"
					value={value}
					onChange={(event) => setValue(event.target.value)}
				/>
				<select value={category} onChange={(event) => setCategory(event.target.value)}>
					<option value="">Selecione uma categoria</option>
					<option value="Trabalho">Trabalho</option>
					<option value="Pessoal">Pessoal</option>
					<option value="Estudo">Estudo</option>
				</select>
				<button type="submit">Criar tarefa</button>
			</form>
		</div>
	);
};

export { TodoForm };