import img1 from "../../../assets/images/Frame 1707478063.png";
import AbouSectionTab from "../AbouSectionTab/AbouSectionTab";
import AboutServices from "../AboutServices/AboutServices";

const AboutSection = () => {
  return (
    <div className="w-full my-8 lg:my-[120px] px-6">
      <div className="max-w-[1320px] mx-auto ">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
          <div>
            <img
              src={img1}
              alt=""
              className="w-full lg:w-[617px] h-full lg:h-[460px]"
            />
          </div>
          <div className="lg:w-[50%]">
            <AbouSectionTab></AbouSectionTab>
          </div>
        </div>
        <AboutServices></AboutServices>
      </div>
    </div>
  );
};

export default AboutSection;
