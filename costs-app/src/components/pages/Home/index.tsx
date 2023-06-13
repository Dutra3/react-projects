import { LinkButton } from '../../Commom/LinkButton';
import styles from './Home.module.css';
import savings from '../../../assets/savings.svg';

const Home = () => {
	return (
		<section className={styles.home_container}>
			<h1>
				Bem vindo ao <span>Costs</span>
			</h1>
			<p>COmece a gerencias os seus projetos agora mesmo!</p>
			<LinkButton to='/newproject' text='Criar Projeto' />
			<img src={savings} alt="Costs" />
		</section>
	);
};

export { Home };