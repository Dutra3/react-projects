import { useState, KeyboardEvent } from 'react';
import { BsSearch } from 'react-icons/bs';
import styles from './Search.module.css';

interface SearchProps {
    loadUser: (userName: string) => Promise<void>
}

const Search = ({loadUser}: SearchProps) => {
    const [userName, setUserName] = useState("");

    const handleKeyDown = (event: KeyboardEvent) => {
        if(event.key === "Enter") {
            loadUser(userName);
        }
    }

    return (
        <div className={styles.search}>
            <h2>Busque por um usuario:</h2>
            <p>Conheca seus melhores repositorios</p>
            <div className={styles.search_container}>
                <input 
                    type="text" 
                    placeholder="Digite o nome do usuario" 
                    onChange={(event) => setUserName(event.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <button onClick={() => loadUser(userName)}>
                    <BsSearch />
                </button>
            </div>
        </div>
    );
};

export { Search };