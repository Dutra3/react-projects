import React, { useState } from "react";

export function useForm(steps: JSX.Element[]) {
    const [currentStep, setCurrentStep] = useState(0);

    const changeStep = (index: number, event: React.FormEvent<HTMLFormElement>) => {
        if (event) event.preventDefault();

        if (index < 0 || index >= steps.length) return;

        setCurrentStep(index);
    };

    return {
        currentStep,
        currentComponent: steps[currentStep],
        changeStep,
        isLastStep: currentStep + 1 === steps.length,
        isFirstStep: currentStep === 0,
    };
}