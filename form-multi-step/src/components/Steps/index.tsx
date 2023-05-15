
import { AiOutlineUser, AiOutlineStar } from 'react-icons/ai';
import { FiSend } from 'react-icons/fi';
import './Step.css';

const Steps = ({ currentStep }: any) => {
    return (
        <div className="steps">
            <div className="step active">
                <AiOutlineUser />
                <p>Identificacao</p>
            </div>
            <div className={`step ${currentStep >= 1 ? "active" : ""}`}>
                <AiOutlineStar />
                <p>Avaliacao</p>
            </div>
            <div className={`step ${currentStep >= 2 ? "active" : ""}`}>
                <FiSend />
                <p>Envio</p>
            </div>
        </div>
    );
};

export { Steps };