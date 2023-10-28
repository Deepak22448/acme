import { Hero } from "./components/Hero";
import { NewArrivals } from "./components/NewArrivals";
import { Offers } from "./components/Offers";

const Home = () => {
  return (
    <section>
      <Hero />
      <Offers />
      <NewArrivals />
    </section>
  );
};

export default Home;
