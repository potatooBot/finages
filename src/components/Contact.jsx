import Datepicker from 'flowbite-datepicker/Datepicker';
import { useState } from 'react';
const Contact= () => {
  const [userData,setUserData]=useState({
    name:"",
    email:"",
    phone:"",
    income:"",
    pan:"",


  });
  let name,value;
  const postUserData=(event)=>{
name= event.target.name;
value=event.target.value;
setUserData({... userData,[name]:value});
  }
  //Firebase
  const submitData =(event)=>{
event.preventDefault();
const  {name,phone,email,income,pan}=userData;
const res =fetch(
"https://finages-f4aaa-default-rtdb.firebaseio.com/userDataRecords.json",
{
    method:"POST",
    headers:{
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        name,phone,email,income,pan
    }),
}


);
if(res){
    setUserData({
        name:"",
        email:"",
        phone:"",
        income:"",
        pan:"", 
    })
    alert("Data Stored");
}
else{
    alert("fill again");
}
}
    return (
      <main id="Contact" className="relative py-28 bg-gray-900 rounded-lg">
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
                   method='POST'>
                      <div>
                          <label className="font-medium">
                              Full name
                          </label>
                          <input
                          name="name"
                              type="text"
                              required
                              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                          value={userData.name}
                          onChange={postUserData}
                          />
                      </div>
                      <div>
                          <label className="font-medium">
                              Email
                          </label>
                          <input
                              type="email"
                              required
                              name="email"
                              placeholder="singh@gmail.com"
                              value={userData.email}
                              onChange={postUserData}
                              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                          />
                      </div>
                    

                      <div>
                          <label className="font-medium">
                              Average Monthly Income
                          </label>
                          <input
                              type="number"
                              name="income"
                              placeholder="0-1,00,000"
                              value={userData.income}
                              onChange={postUserData}
                              required
                              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                          />
                      </div>
                      




                      <div>
                          <label className="font-medium">
                          Pan Number(Optional)
                          </label>
                          <input
                              type="text"
                              name="pan"
                              placeholder="XXXXXXXXXX"
                              value={userData.pan}
                              onChange={postUserData}
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
                              name="phone"
                                  type="number"
                                  placeholder="Please Add "
                                  value={userData.phone}
                                  onChange={postUserData}
                                  required
                                  className="w-full pl-[1rem] pr-3 py-2 place appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                              />
                          </div>
                      </div>
                      

        {/* <label for="countries" class="block mb-2  text-sm font-medium text-gray-900 dark:text-Black">Occupation</label> */}
<select id="countries" class="bg-black-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dar
value={userData.name}
onChange={postUserData}k:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>Select Occupation</option>
  <option value="US">Salaried</option>
  <option value="CA">Self Employed</option>
</select>

                      {/* <div>
                          <label className="font-medium">
                              Any Message For 
                          </label>
                          <textarea required className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"></textarea>
                      </div> */}
                      <button onClick={submitData}
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
export default Contact;