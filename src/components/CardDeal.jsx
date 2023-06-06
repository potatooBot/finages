import { card,rupee } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section} id="EMI">
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
       Check EMI with our  <span style={{color: 'yellow'}}>EMI Calculator</span>{' '}  <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
       Dummy DUMMY DUMMY DUMMY DUMMY DUMMY  
      </p>

     
      <a href="https://finages-emi.netlify.app">

<button onClick={() => { window.open("www.google.com") } } type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
Contact Us
</button>
</a>
    </div>

    <div className={layout.sectionImg}>
      <img src={rupee} alt="billing" className="w-[80%] h-[80%] animate-fade-right animate-infinite animate-duration-5000 animate-linear" />
    </div>
  </section>
);

export default CardDeal;
