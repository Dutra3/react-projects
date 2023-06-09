import { Container } from "../../Commom/Container"
import styles from './Company.module.css';

const Company = () => {
	return (
		<Container customClass="column">
			<div className={styles.company_container}>
				<div>
					<h1>Company DutraSoftware Ltda</h1>
				</div>
				<div>
					<p>CNPJ: 32.508.190/0001-49</p>
				</div>
			</div>
		</Container>
	);
};

export { Company };