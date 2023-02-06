import { useContext, useEffect } from 'react';
import { GameOver } from '../../components/GameOver';
import { Question } from '../../components/Question';
import { Welcome } from '../../components/Welcome';
import { QuizContext } from '../../context/quiz';
import './Home.css'

const Home = () => {
  const [quizState, dispatch] = useContext<any>(QuizContext);

  useEffect(() => {
    dispatch({type: "REORDER_QUESTIONS"});
  }, [])

  return (
    <div className="home">
        <h1>QUiz de Programacao</h1>
        {quizState.gameStage === "Start" && <Welcome />}
        {quizState.gameStage === "Playing" && <Question />}
        {quizState.gameStage === "End" && <GameOver />}
    </div>
  );
};

export { Home };
