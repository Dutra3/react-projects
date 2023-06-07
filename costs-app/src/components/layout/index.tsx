

import { ReactNode } from 'react';
import styles from './Container.module.css';

interface ContainerProps {
	children: ReactNode;
	customClass: string;
}

const Container = ({children, customClass}: ContainerProps) => {
	return (
		<div className={`${styles.container} ${styles[customClass]}`}>
			{children}
		</div>
	);
};

export { Container };