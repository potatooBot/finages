import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero,Contact } from "./components";
// import {BrowserRouter,Routes,Route} from "react-router-dom";

const App = () => (

  <div className="bg-primary w-full overflow-hidden">
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
    <Contact/>
    <Footer/>
      </div>
    </div>
    {/* <BrowserRouter>
  <Routes>
  <Route exact path="/Contact" element={<Contact/>}/>
 </Routes>
  </BrowserRouter> */}
  </div>
  

);

export default App;
