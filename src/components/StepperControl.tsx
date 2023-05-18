export default function StepperControl({ handleClick, currentStep }) {
    return (
      <div className="mt-4 flex justify-between">
        <button 
            onClick={() => handleClick()} 
            className={`secondary ml-6 mt-6 rounded-xl border-2 border-slate-300 transition duration-200 ease-in-out ${currentStep === 1 ? "opacity-0 " : ""}`}
            >Previous Step
        </button>
        <button className="primary mr-6 mt-6" onClick={() => handleClick("next")}>Next Step</button>
      
      </div>
    );
  }