import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <section id="Partners" className={`${styles.flexCenter} my-4 animate-fade-down animate-infinite animate-duration-[3000ms] animate-delay-1000 animate-ease-in-out animate-normal animate-fill-both` }>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
          <img src={client.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain" />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
