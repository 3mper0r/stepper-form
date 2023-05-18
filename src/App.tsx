
import Budget from './pages/Budget'
import ContactDetails from './pages/ContactDetails'
import OurServices from './pages/OurServices'
import FormSubmission from './pages/FormSubmission'
import './styles/index.css'
import { useState } from 'react'
import Stepper from './components/Stepper'
import StepperControl from './components/StepperControl'
import { UseContextProvider } from './contexts/StepperContext'

function App() {

  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    "",
    "",
    "",
    "",
  ];

  const displayStep = (step: number) => {
    switch (step) {
      case 1:
        return <ContactDetails />;
      case 2:
        return <OurServices />;
      case 3:
        return <Budget />;
      case 4:
        return <FormSubmission handleClick={handleClick} currentStep={currentStep} />;
      default:
    }
  };

  const handleClick = (direction: string) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <div className="mx-auto rounded-2xl bg-white pb-2 shadow-xl md:w-1/2">
      {/* Stepper */}
      <div className="horizontal container mt-5 ">
        <Stepper steps={steps} currentStep={currentStep} />

        <div className=" ">
          <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
        </div>
      </div>

      {/* navigation button */}
      {currentStep !== steps.length && (
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      )}
    </div>
  );
}


export default App
