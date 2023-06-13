import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Message } from "../../Message";
import { Container } from "../../Commom/Container";
import { LinkButton } from "../../Commom/LinkButton";
import { ProjectCard } from "../../ProjectCard";
import { Loading } from "../../Commom/Loading";
import styles from './Projects.module.css';
import ProjectService from "../../../service/ProjectService";

interface ProjectProps {
    id: number;
    name: string;
    budget: number;
    category: {name: string}
}

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [removeLoading, setRemoveLoading] = useState(false);
    const [projectMessage, setProjectMessage] = useState('');

    const location = useLocation();
    let message = '';

    if(location.state) {
        message = location.state.message;
    }

    const getProjects = () => {
        ProjectService.getProjectsData()
        .then((resp) => resp.json())
        .then((data) => {
            setProjects(data);
            setRemoveLoading(true);
        })
        .catch((err) => console.log(err))
    }

    const removeProject = (id: number) => {
        ProjectService.deleteProject(id)
        .then((resp) => resp.json())
        .then(() => {
            setProjects(projects.filter((project: ProjectProps) => project.id !== id));
            setProjectMessage('Projeto removido com sucesso!')
        })
        .catch((err) => console.log(err))
    };

    useEffect(getProjects, []);

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/newproject" text="Criar Projeto" />
            </div>
            {message && <Message type="success" message={message} />}
            {projectMessage && <Message type="success" message={projectMessage} />}
            <Container customClass="start">
                {projects.length > 0 && 
                    projects.map((project: ProjectProps) => (
                        <ProjectCard 
                            id={project.id}
                            name={project.name} 
                            budget={project.budget}
                            category={project.category.name}
                            key={project.id}
                            handleRemove={removeProject}
                        />
                    ))}
                {!removeLoading && <Loading />}
                {removeLoading && projects.length === 0 && (
                    <p>Não há projetos cadastrados!</p> 
                )}
            </Container>
        </div>
    );
};

export { Projects };