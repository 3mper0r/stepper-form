
import {CgCheckO} from "react-icons/cg"

const FormSubmission = ({handleClick, currentStep}) => {

  return (
    <>
    <div className="flex justify-center">
    <CgCheckO color="#4a3aff" fontSize={55} className="mt-5"/>
    </div>
    <h2 className="justify-center pl-5 pb-3 mt-10 text-xl">Submit your quote request</h2>
    <div className="flex justify-center">
      <p className="pl-5 pr-5 mb-5 text-gray-400 max-w-[40ch]">Please review all the information you previously typed in the past steps and if all is okay, submit your message to receive a project quote in 24 - 48 hours</p>
    </div>
    <div className="flex justify-center">
      <button className="primary">Submit</button>
    </div>
    <div className="flex justify-start mt-16">
      <button 
        onClick={() => handleClick()}
        className={`secondary ml-4 cursor-pointer rounded-xl border-2 border-slate-300 transition duration-200 ease-in-out ${currentStep === 1 ? " cursor-not-allowed opacity-0 " : {currentStep}}`}
        >Previous Step
      </button>
    </div>
    </>
  )
}

export default FormSubmission