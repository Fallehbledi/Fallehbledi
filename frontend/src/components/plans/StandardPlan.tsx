

const StandardPlan = () => {
    return (
      
      <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-[#058f1a] dark:text-white">
      <h3 className="mb-4 text-2xl font-semibold">Standard</h3>
      <p className="font-light text-[#fff] sm:text-[15px]">Relevant for multiple users, extended & premium support.</p>
      <div className="flex justify-center items-baseline my-8">
          <span className="mr-2 text-5xl font-extrabold">TND20</span>
          <span className="text-[#fff]">/month</span>
      </div>
      <ul role="list" className="mb-8 space-y-4 text-left">
          <li className="flex items-center space-x-3">
              <svg className="flex-shrink-0 w-5 h-5 text-[#fff] dark:text-[#fff]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
              <span>Individual configuration</span>
          </li>
          <li className="flex items-center space-x-3">
              <svg className="flex-shrink-0 w-5 h-5 text-[#fff] dark:text-[#fff]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
              <span>No setup, or hidden fees</span>
          </li>
          <li className="flex items-center space-x-3">
              <svg className="flex-shrink-0 w-5 h-5 text-[#fff] dark:text-[#fff]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
              <span>Team size: <span className="font-semibold">10 developers</span></span>
          </li>
          <li className="flex items-center space-x-3">
              <svg className="flex-shrink-0 w-5 h-5 text-[#fff] dark:text-[#fff]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
              <span>Premium support: <span className="font-semibold">24 months</span></span>
          </li>
         
      </ul>
      <a href="#" className="text-[#058f1a] bg-[#fff] hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:focus:ring-primary-900">Get started</a>
  </div>
  
    )
  }
  
  export default StandardPlan