import { useNavigate } from 'react-router-dom';
import { ProjectForm } from '../../ProjectForm';
import styles from './NewProject.module.css';

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

const NewProject = () => {
	const navigate = useNavigate();

	const createPost = (project: ProjectProps) => {
		console.log(`inside newproject`, project)
		project.cost = 0;
		project.services = [];

		fetch('http://localhost:5000/projects', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(project),
		})
		.then((resp) => resp.json())
		.then(() => {
			navigate('/projects', { state: {message: 'Projeto criado com sucesso!'} })
		})
		.catch((err) => console.log(err))
	};

	return (
		<div className={styles.newproject_container}>
			<h1>Criar Projeto</h1>
			<p>Crie seu projeto para depois adicionar os serviços</p>
			<ProjectForm handleSubmit={createPost} btnText='Criar Projeto' />
		</div>
	);
};

export { NewProject };