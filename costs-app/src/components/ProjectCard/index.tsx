

import { BsPencil, BsFillTrashFill } from 'react-icons/bs';
import styles from './ProjectCard.module.css';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
    id: number
    name: string;
    budget: number;
    category: string;
    handleRemove: any;
}


const ProjectCard = ({ id, name, budget, category, handleRemove }: ProjectCardProps) => {
	return (
		<div className={styles.project_card}>
            <h4>{name}</h4>
            <p>
                <span>Orcamento:</span> R${budget}
            </p>
            <p className={styles.category_text}>
                <span className={`${styles[category.toLowerCase()]}`}></span> {category}
            </p>
            <div className={styles.project_card_actions}>
                <Link to='/'>
                    <BsPencil /> Editar
                </Link>
                <button>
                    <BsFillTrashFill /> Excluir
                </button>
            </div>
        </div>
	);
};

export { ProjectCard };