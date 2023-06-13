import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';


const Footer = () => {
	return (
		<footer className={styles.footer}>
			<ul className={styles.social_list}>
				<li className={styles.item}><FaFacebook /></li>
				<li className={styles.item}><FaInstagram /></li>
				<li className={styles.item}>
					<Link target='_blank' to="https://www.linkedin.com/in/gabrieldutra23/?locale=en_US">
						<FaLinkedin />
					</Link>
				</li>
			</ul>
			<p className={styles.copy_right}>
				<span>Costs</span> &copy; 2023
			</p>
		</footer>
	);
};

export { Footer };