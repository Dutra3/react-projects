
const TodoForm = () => {
  return (
    <div className="todo-form">
      <h2>Criar tarefa:</h2>
      <form>
        <input type="text" placeholder="Digite o titulo" />
        <select>
          <option value="">Selecione uma categoria</option>
          <option value="work">Trabalho</option>
          <option value="personal">Pessoal</option>
          <option value="study">Estudo</option>
        </select>
        <button type="submit">Criar tarefa</button>
      </form>
    </div>
  )
}

export { TodoForm }