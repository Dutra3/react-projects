
import { useContext } from "react";
import { QuizContext } from "../../context/quiz";
import WellDone from '../../assets/welldone.svg';
import './GameOver.css';

const GameOver = () => {
    const [quizState, dispatch] = useContext<any>(QuizContext);

    return (
        <div id="gameover">
            <h2>Fim de Jogo!</h2>
            <p>Pontuacao: {quizState.score}</p>
            <p>Voce acertou {quizState.score} de {quizState.questions.length} perguntas.</p>
            <img src={WellDone} alt="FIm do Quiz" />
            <button onClick={() => dispatch({type: "NEW_GAME"})}>Tela Inicial</button>
        </div>
    );
};

export { GameOver };