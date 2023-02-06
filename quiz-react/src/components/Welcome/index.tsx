
import { useContext } from 'react';
import { QuizContext } from '../../context/quiz';
import Quiz from '../../assets/quiz.svg';
import './Welcome.css';

const Welcome = () => {
    const [quizState, dispatch] = useContext<any>(QuizContext);

    return (
        <div id="welcome">
            <h2>Seja bem-vindo</h2>
            <p>Clique no botao abaixo para comecar: </p>
            <button onClick={() => dispatch({type: "CHANGED_STAGE"})}>Iniciar</button>
            <img src={Quiz} alt="Inicio do Quiz" />
        </div>
    );
};

export { Welcome };