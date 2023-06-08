
import { ChangeEventHandler } from 'react';
import styles from './Select.module.css';

interface SelectProps {
    text: string;
    name: string;
    options: { id: number; name: string; }[]
    handleOnChange: ChangeEventHandler<HTMLInputElement>;
    value: string
}

const Select = ({text, name, options, handleOnChange, value}: SelectProps) => {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name}>
                <option value="">Selecione uma opção</option>
            </select>
        </div>
    );
};

export { Select };