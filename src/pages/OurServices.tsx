import { RiTerminalWindowLine } from "react-icons/ri"
import {BiCodeBlock} from 'react-icons/bi'
import "../styles/cards.css"
import { IoSettingsSharp } from "react-icons/io5"
import {HiOutlineSpeakerphone} from "react-icons/hi"

const OurServices = () => {

  return (
    <>
      <h2 className="flex justify-start pl-5 pb-3 mt-10">Our Services</h2>
      <p className="text-gray-400 flex justify-start pl-5 mb-3">Please select which service you are interested in</p>
      <form className="grid grid-cols-2">
      <div className="relative input-container p-4 m-4 border rounded-3xl border-slate-300 cursor-pointer checked:border border-red-500">
      <label htmlFor="dev" className="cursor-pointer text-[#170f49]">Development
        <input type="checkbox" name="dev" id="dev" hidden/>
        <BiCodeBlock color="#4a3aff" className="absolute h-8 w-8 left-3 top-6"/>
        </label>
      </div>
      <div className="relative input-container p-4 m-4 border rounded-3xl border-slate-300 cursor-pointer ">
        <label htmlFor="web" className="cursor-pointer text-[#170f49]">Web Design
        <input type="checkbox" name="web" id="web" hidden/>
        <RiTerminalWindowLine color="#4a3aff" className="absolute h-8 w-8 left-3 top-6"/>
        </label>
      </div>
      <div className="relative input-container p-4 m-4 border rounded-3xl border-slate-300 cursor-pointer">
        <label htmlFor="marketing" className="cursor-pointer text-[#170f49]">Marketing
          <input type="checkbox" name="marketing" id="marketing" hidden/>
          <HiOutlineSpeakerphone color="#4a3aff" className="absolute h-8 w-8 left-3 top-6"/>
        </label>
      </div>
      <div className="relative input-container p-4 m-4 border rounded-3xl border-slate-300 cursor-pointer">
        <label htmlFor="other" className="cursor-pointer text-[#170f49]">Other
          <input type="checkbox" name="other" id="other" hidden/>
          <IoSettingsSharp color="#4a3aff" className="absolute h-8 w-8 left-3 top-6"/>
        </label>
      </div>
      </form>
      </>
    )
  }

export default OurServices

