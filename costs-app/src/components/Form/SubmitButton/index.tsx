import styles from './SubmitButton.module.css';

interface SubmitButtonProps {
    text: string;
}

const SubmitButton = ({ text }: SubmitButtonProps) => {
    return (
        <div>
            <button className={styles.btn}>{text}</button>
        </div>
    );
};

export { SubmitButton };