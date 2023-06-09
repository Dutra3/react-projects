
import { BsFillTrashFill } from 'react-icons/bs';
import styles from '../ProjectCard/ProjectCard.module.css';


interface ServiceCardProps {
	id: number;
	name: string;
	cost: number;
	description: string;
	handleRemove: string;
}

const ServiceCard = ({ id, name, cost, description, handleRemove }: ServiceCardProps) => {

	const removeService = (event) => {
		event.preventDefault();
		handleRemove(id, cost);
	}

	return (
		<div className={styles.project_card}>
			<h4>{name}</h4>
			<p>
				<span>Custo total:</span> R${cost}
			</p>
			<p>{description}</p>
			<div className={styles.project_card_actions}>
				<button onClick={removeService}>
					<BsFillTrashFill /> Excluir
				</button>
			</div>
		</div>
	);
};

export { ServiceCard };