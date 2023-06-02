import { apple, bill,emi, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={emi} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
     loremepsum
     loremepsum     loremepsum    loremepsum    loremepsum    loremepsum    loremepsum    loremepsum    loremepsum    loremepsum    loremepsum    loremepsum    loremepsum    loremepsum    loremepsum
      </p>
      <a href="https://finages-emi.netlify.app">

<button type="button" className={`py-3 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
Calculate
</button>
</a>



    </div>
  </section>
);

export default Billing;
