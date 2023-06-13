import { useNavigate } from 'react-router-dom';
import { ProjectForm } from '../../ProjectForm';
import styles from './NewProject.module.css';
import ProjectService from '../../../service/ProjectService';

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
		project.cost = 0;
		project.services = [];

		ProjectService.createProject(project)
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