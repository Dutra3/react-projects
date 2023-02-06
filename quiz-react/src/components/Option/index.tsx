
import { useContext } from 'react';
import { QuizContext } from '../../context/quiz';
import './Option.css';

interface OptionProps {
    option: string;
    selectOption: Function;
    answer: string;
}

const Option = ({ option, selectOption, answer }: OptionProps) => {
    const [quizState, dispatch] = useContext<any>(QuizContext);

    return (
        <div 
        className={`option ${quizState.answerSelected && option === answer ? 'correct' : ""}
        ${quizState.answerSelected && option !== answer ? 'wrong' : ""}`} 
        onClick={() => selectOption()}
        >
            <p>{option}</p>
        </div>
    );
};

export { Option };