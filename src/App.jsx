import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero,Contact,Apply } from "./components";

import {BrowserRouter, Routes,Route } from "react-router-dom";
import Test from "./Test";
import Home from "./Home";

function App  () {
return (

  <BrowserRouter>
<div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    </div>
<Routes>
<Route path="/" element={  
<div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
      
    </div> 
    }/>

    <Route path="/Contact" element={
     <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
<Contact/>
      </div>
      </div>
}/>
</Routes>

 
  {/* <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
     
      <Stats />
        <Business />
        <CardDeal/>
        <Billing/>
    <Contact/>
    <CTA/>
    <Testimonials/>
    <Clients/>
 <Apply/>
    <Footer/>
      </div>
    </div>


  </div> */}
 
  </BrowserRouter>
);

}

export default App;
