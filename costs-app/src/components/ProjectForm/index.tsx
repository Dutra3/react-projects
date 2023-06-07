

const ProjectForm = () => {
    return (
        <form>
            <div>
                <input type="text" placeholder="Insira o nome do projeto" />
            </div>
            <div>
                <input type="number" placeholder="Insira o orcamento total" />
            </div>
            <div>
                <select name="categoy_id" id="">
                    <option value="">Selecione a categoria</option>
                </select>
            </div>
            <div>
                <input type="submit" value="Criar projeto" />
            </div>
        </form>
    );
};

export { ProjectForm };