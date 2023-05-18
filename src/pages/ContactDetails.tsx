import {CiUser, CiMail} from 'react-icons/ci'
import {IoPhonePortraitOutline} from "react-icons/io5"
import {TbBuilding} from "react-icons/tb"

const ContactDetails = () => {

  return (
    <>
   
      <h2 className="flex justify-start pl-5 pb-3 mt-10">Contact Details</h2>
      <p className="text-gray-400 flex justify-start pl-5 mb-3">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
   
    <div className="grid grid-cols-2 justify-items-center mt-5">
      <label className="relative grid justify-items-start mb-5" htmlFor="name" id="name">Name
        <input className="w-full mt-3 p-3 rounded-3xl border-solid border-2 border-slate-100" type="text" name="name" id="name" placeholder="John Carter"/>
        <CiUser className="absolute top-12 right-4 h-8 w-8 text-slate-300"/>
      </label>
      <label className="relative grid justify-items-start mb-5" htmlFor="email" placeholder="Email address">Email
        <input className="mt-3 p-3 rounded-3xl border-solid border-2 border-slate-100" type="email" name="email" placeholder="Email address"/>
        <CiMail className="absolute top-12 right-4 h-8 w-8 text-slate-300" />
      </label>
      <label className="relative grid justify-items-start mb-5" htmlFor="number">Phone Number
        <input className="mt-3 p-3 rounded-3xl border-solid border-2 border-slate-100" type="tel" name="number" placeholder="(123) 456 - 7890"/>
        <IoPhonePortraitOutline className="absolute top-12 right-4 h-7 w-7 text-slate-300"/>
      </label>
      <label className="relative grid justify-items-start mb-5" htmlFor="company" >Company
        <input className="mt-3 p-3 rounded-3xl border-solid border-2 border-slate-100" type="text" name="company" placeholder="Company name"/>
        <TbBuilding className="absolute top-12 right-4 h-8 w-8 text-slate-300"/>
      </label>
    </div>
    </>
  )
}

export default ContactDetails