import Datepicker from 'flowbite-datepicker/Datepicker';
export default () => {

  return (
      <main className="relative py-28 bg-gray-900 rounded-lg">
          <div className="relative z-10 max-w-screen-lg mx-auto text-gray-600 sm:px-4 md:px-8">
              <div className="max-w-lg space-y-3 px-4 sm:mx-auto sm:text-center sm:px-0">
                  <h3 className="text-cyan-400 font-semibold">
                     Finages 24 x 7
                  </h3>
                  <p className="text-white text-3xl font-semibold sm:text-4xl">
                  Apply here for assistance
                  </p>
                  <p className="text-gray-300">
                      We’d love to help you out.
                  </p>
              </div>
              <div className="mt-12 mx-auto px-4 p-8 bg-white sm:max-w-lg sm:px-8 rounded-xl">
                  <form
                      onSubmit={(e) => e.preventDefault()}
                      className="space-y-5"
                  >
                      <div>
                          <label className="font-medium">
                              Full name
                          </label>
                          <input
                              type="text"
                              required
                              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                          />
                      </div>
                      <div>
                          <label className="font-medium">
                              Email
                          </label>
                          <input
                              type="email"
                              required
                              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                          />
                      </div>
                    

                      <div>
                          <label className="font-medium">
                              Average Monthly Income
                          </label>
                          <input
                              type="number"
                              placeholder="0-1,00,000"
                              required
                              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                          />
                      </div>
                      
<div class="relative max-w-sm">
  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
  </div>
  <input datepicker type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date"/>
</div>

<div inline-datepicker data-date="02/25/2022"></div>


                      <div>
                          <label className="font-medium">
                          Pan Number
                          </label>
                          <input
                              type="number"
                              placeholder="XXXXXXXXXX"
                              required
                              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                          />
                      </div>
                      <div>
                          <label className="font-large">
                              Phone number
                          </label>
                          <div className="relative mt-2">
                              <input
                                  type="number"
                                  placeholder="Please Add Number"
                                  required
                                  className="w-full pl-[1rem] pr-3 py-2 place appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                              />
                          </div>
                      </div>
                      
                      
<button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" 
class="text-white bg-gray-700 hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-white-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Select Occupation <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
<div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Self Employed</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Salaried</a>
      </li>

    </ul>
</div>


           


                      <div>
                          <label className="font-medium">
                              Message
                          </label>
                          <textarea required className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"></textarea>
                      </div>
                      <button
                          className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150">
                          Submit
                      </button>
                  </form>
              </div>
          </div>
          <div className='absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]' style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}></div>
      </main>
  )
}