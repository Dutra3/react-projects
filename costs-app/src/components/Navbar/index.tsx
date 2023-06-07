import { Link } from 'react-router-dom';
import { Container } from '../layout';
import styles from './Navbar.module.css';
import logo from '../../assets/costs_logo.png';

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<Container customClass=''>
				<Link to='/'><img src={logo} alt='Costs' /></Link>
				<ul className={styles.list}>
					<li className={styles.item} ><Link to='/'>Home</Link></li>
					<li className={styles.item} ><Link to='/projects'>Meus Projetos</Link></li>
					<li className={styles.item} ><Link to='/company'>Empresa</Link></li>
					<li className={styles.item} ><Link to='/contact'>Contato</Link></li>
				</ul>
			</Container>
		</nav>
	);
};

export { Navbar };