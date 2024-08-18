import Collections from "../components/Collections"
import Explore from "../components/Explore"
import Hero from "../components/Hero"

// import NewProducts from "../components/NewProducts"
import Products from "./Products"

const Home = () => {
  return (
    <>
        <Hero />
        <Explore />
        <Collections />
        <Products />
        {/* <NewProducts /> */}
    </>
  )
}

export default Home