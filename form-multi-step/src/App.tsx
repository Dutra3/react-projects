import React, { useState } from "react";
import { UserForm } from "./components/UserForm";
import { ReviewForm } from "./components/ReviewForm";
import { Thanks } from "./components/Thanks";
import { Steps } from "./components/Steps";
import { useForm } from "./hooks/useForm";
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { FiSend } from 'react-icons/fi';
import './App.css';

const formTemplate = {
    name: "",
    email: "",
    phone: "",
    review: "",
    comment: "",
}

function App() {
    const [data, setData] = useState();

    const updateFieldHandler = (key: string, value: string) => {
        setData((prev) => {
            return {...prev, [key]: value};
        });
    };

    const formComponents = [
        <UserForm data={data} updateFieldHandler={updateFieldHandler}/>,
        <ReviewForm data={data} updateFieldHandler={updateFieldHandler}/>,
        <Thanks data={data} />
    ];
    const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } = useForm(formComponents);

  return (
    <div className="app">
        <div className="header">
            <h2>Deixe sua avaliacao</h2>
            <p>
                Ficamos felizes com a sua compra, utilize o formulario abaixo para avaliar o produto
            </p>
        </div>
        <div className="form-container">
            <Steps currentStep={currentStep}/>
            <form onSubmit={(event: React.FormEvent<HTMLFormElement>) => changeStep(currentStep + 1, event)}>
                <div className="inputs-container">
                    {currentComponent}
                </div>
                <div className="actions">
                    {!isFirstStep && (
                        <button type="button" onClick={(event: any) => changeStep(currentStep - 1, event)}>
                            <GrFormPrevious />
                            <span>Voltar</span>
                        </button>
                    )}
                    {!isLastStep ? (
                        <button type="submit">
                            <span>Avancar</span>
                            <GrFormNext />
                        </button>
                    ) : (
                        <button type="button">
                            <span>Enviar</span>
                            <FiSend />
                        </button>
                    )}
                </div>
            </form>
        </div>
    </div>
  )
}

export default App
