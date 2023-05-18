const Budget = () => {

  return (
    <>
      <h2 className="flex justify-start pl-5 pb-3 mt-10">What's your project budget?</h2>
      <p className="text-gray-400 flex justify-start pl-5 mb-3">Please select the project budget range you have in mind.</p>
      <form className="grid grid-cols-2">
      <div className="relative input-container p-4 m-4 border rounded-3xl border-slate-300 cursor-pointer">
      <label htmlFor="prices" className="cursor-pointer text-black">$10.000 - $20.000
        <input id="prices" type="radio" name="radio-list" className="absolute left-7 w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
      </label>
      </div>
      <div className="relative input-container p-4 m-4 border rounded-3xl border-slate-300 cursor-pointer ">
        <label className="cursor-pointer text-black">$10.000 - $20.000
          <input id="prices" type="radio" name="radio-list" className="absolute left-7 w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        </label>
      </div>
      <div className="relative input-container p-4 m-4 border rounded-3xl border-slate-300 cursor-pointer">
      <label className="cursor-pointer text-black">$20.000 - $50.000
        <input id="prices" type="radio" name="radio-list" className="absolute left-7 w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
      </label>
      </div>
      <div className="relative input-container p-4 m-4 border rounded-3xl border-slate-300 cursor-pointer">
      <label className="cursor-pointer text-black">$50.000 +
        <input id="prices" type="radio" name="radio-list" className="absolute left-7 w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        </label>
      </div>
      </form>
    </>
  )
}

export default Budget