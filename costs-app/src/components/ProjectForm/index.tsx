import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Input } from '../Form/Input';
import { Select } from '../Form/Select';
import { SubmitButton } from '../Form/SubmitButton';
import styles from './ProjectForm.module.css';

interface ProjectProps {
    name?: string;
    budget?: string;
    category?: {
        id: string,
        name: string
    };
    cost?: number;
    services?: [];
    id?: number;
}

interface ProjectFormProps {
    handleSubmit: (project: ProjectProps) => void;
    btnText: string;
    projectData?: ProjectProps;
}

const ProjectForm = ({ handleSubmit, btnText, projectData }: ProjectFormProps) => {
    const [categories, setCategories] = useState<Array<{ id: number; name: string; }>>([]);
    const [project, setProject] = useState<ProjectProps>(projectData);

    const getCategories = () => {
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
    }

    useEffect(getCategories, []);

    const submit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(`inside projectForm`, project)
        handleSubmit(project);
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setProject({...project, [event.target.name]: event.target.value});
    }

    const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
        setProject({...project,
            category: {
                id: event.target.value,
                name: event.target.options[event.target.selectedIndex].text,
            },
        });
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input
                type='text'
                text='Nome do projeto'
                name='name'
                placeholder='Insira o nome do projeto'
                handleOnChange={handleChange}
                value={project?.name ? project.name : ''}
            />
            <Input
                type='number'
                text='Orçamento do projeto'
                name='budget'
                placeholder='Insira o orçamento total'
                handleOnChange={handleChange}
                value={project?.budget ? project.budget : ''}
            />
            <Select
                name='category_id'
                text='Selecione a categoria'
                categories={categories}
                handleOnChange={handleSelect}
                value={project?.category ? project.category.id : ''}
            />
            <SubmitButton text={btnText} />
        </form>
    );
};

export { ProjectForm };