import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { navLinks } from "../constants";
import Contact from "./Contact";
const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);
const Business = () =>  {

  return(
    
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        You do the business, <br className="sm:block hidden" /> we’ll handle
        the Loan.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
     DUmmy dummy dummy  DUmmy dummy dummy DUmmy dummy dummy DUmmy dummy dummy DUmmy dummy dummy DUmmy dummy dummy
      </p>
      <a >

     
      <button onClick={(e)=>{
        e.preventDefault();
        window.scrollTo({
          top:document.querySelector("#Contact").offsetTop,
          behavior:"smooth",
        });
      }} type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
  Contact Us
  </button>
  </a>
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
 
);
};

export default Business;
