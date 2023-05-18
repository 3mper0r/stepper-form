import { Outlet } from "react-router-dom"
import ProjectQuote from "./ProjectQuote"
import StepperControl from "./StepperControl"

const Layout = () => {
  return (
    <>
    <ProjectQuote/>
    <div className="shadow mt-6 rounded-3xl">
      <div className="form-pages">
          <Outlet/>
      </div>
    </div>

    </>
  )
}

export default Layout