import { useEffect, useState } from 'react';
import styles from './Message.module.css';

interface MessageProps {
	type: string;
	message: string;
}

const Message = ({ type, message }: MessageProps) => {
	const [visible, setVisible] = useState<boolean>(false);

	const handleVisibility = () => {
		let timer: NodeJS.Timeout;

		if (message) {
			setVisible(true);
			timer = setTimeout(() => {
				setVisible(false);
			}, 3000);
		} else {
			setVisible(false);
		}

		return () => clearTimeout(timer);
	};

	useEffect(handleVisibility, [message]);

	return (
		<>
			{visible && (
				<div className={`${styles.message} ${styles[type]}`}>
					{message}
				</div>
			)}
		</>
	);
};

export { Message };