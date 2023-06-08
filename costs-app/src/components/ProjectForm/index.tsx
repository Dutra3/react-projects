

import { useState } from 'react';
import { Input } from '../Form/Input';
import { Select } from '../Form/Select';
import { SubmitButton } from '../Form/SubmitButton';
import styles from './ProjectForm.module.css';

interface ProjectFormProps {
    btnText: string;
}

const ProjectForm = ({ btnText }: ProjectFormProps) => {
    const [categories, setCategories] = useState<Array<{ id: number; name: string; }>>([]);


    fetch('http://localhost:5000/categories', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then((resp) => resp.json())
    .then((data) => {
        setCategories(data);
    })
    .catch((err) => console.log(err));

    return (
        <form className={styles.form}>
            <Input
                type='text'
                text='Nome do projeto'
                name='name'
                placeholder='Insira o nome do projeto'
            />
            <Input
                type='number'
                text='Orçamento do projeto'
                name='budget'
                placeholder='Insira o orçamento total'
            />
            <Select 
                name='category_id' 
                text='Selecione a categoria' 
                options={categories}
            />
            <SubmitButton text={btnText} />
        </form>
    );
};

export { ProjectForm };