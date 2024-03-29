import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Container } from '../../Commom/Container';
import { Loading } from '../../Commom/Loading';
import { ProjectForm } from '../../ProjectForm';
import { Message } from '../../Message';
import { ServiceForm } from '../../ServiceForm';
import { ServiceCard } from '../../ServiceCard';
import styles from './Project.module.css';
import ProjectService from '../../../service/ProjectService';

interface ServiceProps {
    name: string;
    cost: string;
    description: string;
    id: string;
}

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

const Project = () => {
    const [project, setProject] = useState({});
    const [services, setServices] = useState<ServiceProps | []>([]);
    const [showProjectForm, setShowProjectForm] = useState(false);
    const [showServiceForm, setShowServiceForm] = useState(false);
    const [message, setMessage] = useState<string | undefined>();
    const [type, setType] = useState<string>('');
    const { id } = useParams();

    const getProject = () => {
        ProjectService.getProjectData(id)
        .then((resp) => resp.json())
        .then((data) => {
            setProject(data);
            setServices(data.services);
        })
        .catch((err) => console.log(err))
    }

    const editProject = (project: ProjectProps) => {
        setMessage('');

        if(parseFloat(project.budget) < project.cost) {
            setMessage('O orçamento não pode ser menor que o custo do projeto!');
            setType('error');

            return false;
        }

        ProjectService.updateProject(project)
        .then((resp) => resp.json())
        .then((data) => {
            setProject(data);
            setShowProjectForm(false);
            setMessage('Projeto atualizado!');
            setType('success')
        })
        .catch((err) => console.log(err));
    };

    const createService = (project) => {
        setMessage('');

        const lastService = project.services[project.services.length - 1];
        lastService.id = uuidv4();

        const lastServiceCost = lastService.cost;
        const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost);

        if(newCost > parseFloat(project.budget)) {
            setMessage('Orçamento ultrapassado, verifique o valor do serviço');
            setType('error');
            project.services.pop();

            return false;
        }

        project.cost = newCost;

        ProjectService.updateProject(project)
        .then((resp) => resp.json())
        .then(() => {
            setShowServiceForm(false);
        })
        .catch((err) => console.log(err));
    }

    const removeService = (id: string, cost: string) => {
        const servicesUpdated = project.services.filter(
            (service: ServiceProps) => service.id !== id
        );

        const projectUpdated = project;
        
        projectUpdated.services = servicesUpdated;
        projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost);

        ProjectService.updateProject(projectUpdated)
        .then((resp) => resp.json())
        .then(() => {
            setProject(projectUpdated);
            setServices(servicesUpdated);
            setMessage('Serviço removido com sucesso!');
            setType('success')
        })
        .catch((err) => console.log(err))
    }

    const toggleProjectForm = () => {
        setShowProjectForm(!showProjectForm);
    };

    const toggleServiceForm = () => {
        setShowServiceForm(!showServiceForm);
    };

    useEffect(getProject, [id]);

    return (
        <>
        {project.name ? (
            <div className={styles.project_details}>
                <Container customClass='column'>
                    {message && <Message type={type} message={message} />}
                    <div className={styles.details_container}>
                        <h1>Projeto: {project.name}</h1>
                        <button className={styles.btn} onClick={toggleProjectForm}>
                            {!showProjectForm ? 'Editar projeto' : 'Fechar'}
                        </button>
                        {!showProjectForm ? (
                            <div className={styles.project_info}>
                                <p>
                                    <span>Categoria:</span> {project.category.name}
                                </p>
                                <p>
                                    <span>Total de Orçamento:</span> R${project.budget}
                                </p>
                                <p>
                                    <span>Total Utilizado:</span> R${project.cost}
                                </p>
                            </div>
                        ) : (
                            <div className={styles.project_info}>
                                <ProjectForm 
                                    handleSubmit={editProject} 
                                    btnText='Concluir edicao' 
                                    projectData={project}
                                />
                            </div>
                        )}
                    </div>
                    <div className={styles.service_form_container}>
                        <h2>Adicione um serviço:</h2>
                        <button className={styles.btn} onClick={toggleServiceForm}>
                            {!showServiceForm ? 'Adicionar serviço' : 'Fechar'}
                        </button>
                        <div className={styles.project_info}>
                            {showServiceForm && (
                                <ServiceForm 
                                    handleSubmit={createService}
                                    btnText='Adicionar Servico'
                                    projectData={project}
                                />
                            )}
                        </div>
                    </div>
                    <h2>Servicos</h2>
                    <Container customClass='start'>
                        {services.length > 0 && 
                           services.map((service: ServiceProps) => (
                                <ServiceCard 
                                    id={service.id}
                                    name={service.name}
                                    cost={service.cost}
                                    description={service.description}
                                    key={service.id}
                                    handleRemove={removeService}
                                />
                           )) 
                        }
                        {services.length === 0 && <p>Não há serviços cadastrados!</p> }
                    </Container>
                </Container>
            </div>
        ) : (
            <Loading />
        )}
        </>
    );
};

export { Project };