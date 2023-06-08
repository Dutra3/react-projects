

import { Input } from '../Input';
import { Select } from '../Select';
import { SubmitButton } from '../SubmitButton';
import styles from './ProjectForm.module.css';

interface ProjectFormProps {
    btnText: string;
}

const ProjectForm = ({ btnText }: ProjectFormProps) => {
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
            <Select name='category_id' text='Selecione a categoria' />
            <SubmitButton text={btnText} />
        </form>
    );
};

export { ProjectForm };