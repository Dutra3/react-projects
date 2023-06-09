import { ChangeEvent, FormEvent, useState } from 'react';
import { Input } from '../Form/Input';
import { SubmitButton } from '../Form/SubmitButton';
import styles from '../ProjectForm/ProjectForm.module.css';

interface ServiceProps {
    name: string;
    cost: number;
    description: string;
    id: string;
}

interface ProjectProps {
    name: string;
    budget: string;
    category: {
        id: string,
        name: string
    };
    cost: number;
    services: Array<ServiceProps>;
    id: number;
}

interface ServiceFormProps {
    handleSubmit: (projectData: ProjectProps) => false | undefined;
    btnText: string;
    projectData: ProjectProps;
}

const ServiceForm = ({ handleSubmit, btnText, projectData }: ServiceFormProps) => {
    const [service, setService] = useState<ServiceProps>({
        name: '',
        cost: 0,
        description: '',
        id: '',
    });

    const submitService = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        projectData.services.push(service);
        handleSubmit(projectData);
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setService({...service, [event.target.name]: event.target.value})
    }

    return (
        <form onSubmit={submitService} className={styles.form}>
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