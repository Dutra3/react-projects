import { useState } from 'react';
import { Input } from '../Form/Input';
import { SubmitButton } from '../Form/SubmitButton';
import styles from '../ProjectForm/ProjectForm.module.css';

interface ServiceFormProps {
    handleSubmit: string;
    btnText: string;
    projectData: string;
}


const ServiceForm = ({ handleSubmit, btnText, projectData }: ServiceFormProps) => {
    const [service, setService] = useState({});

    const submit = (event) => {
        event.preventDefault();
        projectData.services.push(service);
        handleSubmit(projectData);
    }

    const handleChange = (event) => {
        setService({...service, [event.target.name]: event.target.value})
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input 
                type='text'
                text='Nome do servico'
                name='name'
                placeholder='Insira o nome do servico'
                handleOnChange={handleChange}
            />
             <Input 
                type='number'
                text='Custo do servico'
                name='cost'
                placeholder='Insira o valor total'
                handleOnChange={handleChange}
            />
             <Input 
                type='text'
                text='Descricao do servico'
                name='description'
                placeholder='Descreva o servico'
                handleOnChange={handleChange}
            />
            <SubmitButton text={btnText} />
        </form>
    );
};

export { ServiceForm };