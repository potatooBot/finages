import React from "react";
import Contact from "./Contact";
import { useNavigate } from "react-router-dom";

const Button = ({ styles }) => 

(
 
  <a href="www.google.com">

  <button onClick={() => { window.open("www.google.com") } } type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
  Contact Us
  </button>
  </a>
 
);

export default Button;
