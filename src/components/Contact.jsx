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
                          <label className="font-large">
                              Phone number
                          </label>
                          <div className="relative mt-2">
                              {/* <div className="absolute inset-y-0 left-3 my-auto flex items-center border-r pr-2">
                                  <select className="text-sm bg-transparent outline-none rounded-lg h-full">
                                      <option>91+</option>
                                
                                  </select>
                              </div> */}
                              <input
                                  type="number"
                                  placeholder="Please Add Number"
                                  required
                                  className="w-full pl-[1rem] pr-3 py-2 place appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                              />
                          </div>
                      </div>
                      
<button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown button <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
<div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
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