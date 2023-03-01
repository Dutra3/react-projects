
interface UserFormProps {
    data: {
        name: string,
        email: string,
        phone: string,
        review: string,
        comment: string,
    };
    updateFieldHandler: Function;
}

const UserForm = ({ data, updateFieldHandler }: UserFormProps) => {
    return (
        <div>
           <div className="form-control">
               <label htmlFor="name">Nome: </label>
               <input
                   type="text"
                   name="name"
                   id="name"
                   placeholder="Digite o seu nome"
                   required
                   value={data.name || ""}
                   onChange={(event) => updateFieldHandler("name", event.target.value)}
               />
           </div>
            <div className="form-control">
                <label htmlFor="email">E-mail: </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Digite o seu e-mail"
                    required
                    value={data.email || ""}
                    onChange={(event) => updateFieldHandler("email", event.target.value)}
                />
            </div>
            <div className="form-control">
                <label htmlFor="phone">Telefone: </label>
                <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Digite o seu telefone"
                    required
                    value={data.phone || ""}
                    onChange={(event) => updateFieldHandler("phone", event.target.value)}
                />
            </div>
        </div>
    );
};

export { UserForm };