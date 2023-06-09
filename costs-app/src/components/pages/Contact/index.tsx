import { Container } from '../../Commom/Container';
import styles from './Contact.module.css';

const Contact = () => {
	return (
		<Container customClass='column'>
			<div className={styles.contact_container}>
				<h1>Contact: dutrasoftware@gmail.com</h1>
			</div>
		</Container>
		
	);
};

export { Contact };