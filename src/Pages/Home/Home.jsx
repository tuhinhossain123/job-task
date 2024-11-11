import AboutSection from "../../Components/About/AboutSection/AboutSection";
import FoodItemSection from "../../Components/FoodItemSection/FoodItemSection";
import FromSection from "../../Components/FromSection/FromSection";
import TestimonialSection from "../../Components/TestimonialSection/TestimonialSection";
import Banner from "../Hedar/Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutSection></AboutSection>
      <FoodItemSection></FoodItemSection>
      <FromSection></FromSection>
      <TestimonialSection></TestimonialSection>
    </div>
  );
};

export default Home;
