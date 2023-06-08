
import { ChangeEventHandler } from 'react';
import styles from './Select.module.css';

interface SelectProps {
    text: string;
    name: string;
    categories: { id: number; name: string; }[]
    handleOnChange: ChangeEventHandler<HTMLSelectElement>;
    value: string
}

const Select = ({text, name, categories, handleOnChange, value}: SelectProps) => {

    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <select 
                name={name} 
                id={name} 
                onChange={handleOnChange} 
                value={value || ''}
            >
                <option value="">Selecione uma opção</option>
                {categories.map((categorie) => (
                    <option value={categorie.id} key={categorie.id}>
                        {categorie.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export { Select };