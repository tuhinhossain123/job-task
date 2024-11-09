import img1 from "../../../assets/images/Frame 1707478063.png";
import AbouSectionTab from "../AbouSectionTab/AbouSectionTab";

const AboutSection = () => {
  return (
    <div className="w-full mt-8 lg:mt-[120px] px-6">
      <div className="max-w-[1320px] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-20">
        <div>
          <img src={img1} alt="" className="w-[617px] h-[460px]" />
        </div>
        <div>
          <AbouSectionTab></AbouSectionTab>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
