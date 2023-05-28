import React from "react";
import { useNavigate } from "react-router-dom";

// const goToContact=()=>{
// navigate("/Contact");
// }

const Button = ({ styles }) => {
return
(
  <button  type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
  Contact Us
  </button>
  );
};

export default Button;
