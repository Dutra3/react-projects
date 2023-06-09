
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Message } from "../../Message";
import { Container } from "../../Commom/Container";
import { LinkButton } from "../../Commom/LinkButton";
import { ProjectCard } from "../../ProjectCard";

import styles from './Projects.module.css';

interface ProjectProps {
    id: number;
    name: string;
    budget: number;
    category: {name: string}
}

const Projects = () => {
    const [projects, setProjects] = useState([]);

    const location = useLocation();
    let message = '';

    if(location.state) {
        message = location.state.message;
    }

    useEffect(() => {
        fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setProjects(data);
        })
        .catch((err) => console.log(err))
    }, []);

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/newproject" text="Criar Projeto" />
            </div>
            {message && <Message type="success" message={message} />}
            <Container customClass="start">
                {projects.length > 0 && 
                    projects.map((project: ProjectProps) => (
                        <ProjectCard 
                            id={project.id}
                            name={project.name} 
                            budget={project.budget}
                            category={project.category.name}
                            key={project.id}
                        />
                    ))}
            </Container>
        </div>
    );
};

export { Projects };