import Collections from "../components/Collections";
import Explore from "../components/Explore";
import Hero from "../components/Hero";

import NewProducts from "../components/NewProducts";
import OnSaleProducts from "../components/OnSaleProducts";

const Home = () => {
  return (
    <>
      <Hero />
      <Explore />
      <Collections />
      <NewProducts />
      <OnSaleProducts />
    </>
  );
};

export default Home;
