import AboutSection from "../../Components/About/AboutSection/AboutSection";
import FoodItemSection from "../../Components/FoodItemSection/FoodItemSection";
import FromSection from "../../Components/FromSection/FromSection";
import Banner from "../Hedar/Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutSection></AboutSection>
      <FoodItemSection></FoodItemSection>
      <FromSection></FromSection>
    </div>
  );
};

export default Home;
