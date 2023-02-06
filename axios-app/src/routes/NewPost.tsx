import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { blogFetch } from '../axios/config';
import './NewPost.css';

const NewPost = () => {
    const [title, setTitle] = useState<String>();
    const [body, setBody] = useState<String>();
    const navigate = useNavigate();

    const createPost = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const post = { title, body, userId: 1};

        await blogFetch.post(`/posts`, {
            body: post,
        });

        navigate("/");
    };

    return (
        <div className="new-post">
            <h2>Inserir novo Post:</h2>
            <form onSubmit={(event) => createPost(event)}>
                <div className="form-control">
                    <label htmlFor="title">Titulo:</label>
                    <input 
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Digite o titulo"
                        onChange={(event) => setTitle(event.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="body">Conteudo:</label>
                    <textarea 
                        name="body"
                        id="body"
                        placeholder="Digite o conteudo"
                        onChange={(event) => setBody(event.target.value)}
                    ></textarea>
                </div>
                <input type="submit" value="Criar Post" className="btn" />
            </form>
        </div>
    );
};

export { NewPost };