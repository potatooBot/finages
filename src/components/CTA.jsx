import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section id="CTA" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>  WANT TO KNOW YOUR <span style={{color: 'yellow'}}>CIBIL</span>{' '} SCORE ? </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
    DIVE IN ?
      </p>
    </div>

   
    <button onClick={() => window.open("https://www.paisabazaar.com/credit-score/cibil-score-calculation/")} type="button" className={`py-4 my-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
CALCULATE
</button>



  </section>
);

export default CTA;
