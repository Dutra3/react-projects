

import { useEffect, useState } from 'react';
import styles from './Message.module.css';

interface MessageProps {
    type: string;
    message: string;
}

const Message = ({ type, message }: MessageProps) => {
    const [visible, setVisible] = useState<boolean>(false);


    useEffect(() => {
        if(!message) {
            setVisible(false);
            return
        }

        setVisible(true)

        const timer = setTimeout(() => {
            setVisible(false);
        }, 3000)

        return () => clearTimeout(timer);
    }, [message]);

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