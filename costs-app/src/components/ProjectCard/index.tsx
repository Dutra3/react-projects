import { Link } from 'react-router-dom';
import { BsPencil, BsFillTrashFill } from 'react-icons/bs';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
    id: number
    name: string;
    budget: number;
    category: string;
    handleRemove: (id: number) => void;
}

const ProjectCard = ({ id, name, budget, category, handleRemove }: ProjectCardProps) => {
    
    const remove = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        handleRemove(id);
    }

	return (
		<div className={styles.project_card}>
            <h4>{name}</h4>
            <p>
                <span>Orçamento:</span> R${budget}
            </p>
            <p className={styles.category_text}>
                <span className={`${styles[category.toLowerCase()]}`}></span> {category}
            </p>
            <div className={styles.project_card_actions}>
                <Link to={`/project/${id}`}>
                    <BsPencil /> Editar
                </Link>
                <button onClick={remove}>
                    <BsFillTrashFill /> Excluir
                </button>
            </div>
        </div>
	);
};

export { ProjectCard };